const express = require('express');
const stripe = require('../config/stripe');
const pool = require('../config/database');
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
  console.log('Iniciando creación de PaymentIntent');
  if (!req.user) {
    console.log('Usuario no autenticado');
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { orderId } = req.body;
  console.log('OrderId recibido:', orderId);

  try {
    const [orderRows] = await pool.query('SELECT * FROM orders WHERE id = ? AND user_id = ?', [orderId, req.user.id]);
    console.log('Resultado de la consulta de orden:', orderRows);
    
    if (orderRows.length === 0) {
      console.log('Orden no encontrada');
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    const order = orderRows[0];
    console.log('Orden encontrada:', order);

    let paymentIntent;

    if (order.payment_intent_id) {
      try {
        paymentIntent = await stripe.paymentIntents.retrieve(order.payment_intent_id);
        if (paymentIntent.status === 'succeeded') {
          console.log('La orden ya ha sido pagada');
          return res.status(400).json({ error: 'Esta orden ya ha sido pagada' });
        }
        if (paymentIntent.status === 'requires_payment_method') {
          console.log('Usando PaymentIntent existente');
        } else {
          await stripe.paymentIntents.cancel(order.payment_intent_id);
          paymentIntent = null;
        }
      } catch (stripeError) {
        console.log('No se pudo recuperar el PaymentIntent existente:', stripeError);
        paymentIntent = null;
      }
    }

    if (!paymentIntent) {
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(order.total_amount * 100),
        currency: 'usd',
        metadata: { orderId: order.id.toString() }
      });
      console.log('Nuevo PaymentIntent creado:', paymentIntent);
    }

    await pool.query('UPDATE orders SET payment_intent_id = ?, status = ? WHERE id = ?', 
      [paymentIntent.id, 'payment_pending', order.id]);
    console.log('PaymentIntent ID guardado en la base de datos');

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error al crear la intención de pago:', error);
    res.status(500).json({ error: 'Error al crear la intención de pago' });
  }
});

router.post('/confirm-payment', async (req, res) => {
  console.log('Iniciando confirmación de pago');
  const { paymentIntentId } = req.body;
  console.log('PaymentIntent ID recibido:', paymentIntentId);

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    console.log('PaymentIntent recuperado:', paymentIntent);
    
    if (paymentIntent.status === 'succeeded') {
      const [result] = await pool.query('UPDATE orders SET status = ? WHERE payment_intent_id = ?', 
        ['completed', paymentIntentId]);
      
      if (result.affectedRows === 0) {
        console.log('No se encontró la orden correspondiente al PaymentIntent');
        return res.status(404).json({ error: 'No se encontró la orden correspondiente' });
      }
      
      console.log('Orden actualizada como completada');
      res.json({ success: true });
    } else {
      console.log('El pago no se completó correctamente');
      res.status(400).json({ error: 'El pago no se completó correctamente' });
    }
  } catch (error) {
    console.error('Error al confirmar el pago:', error);
    res.status(500).json({ error: 'Error al confirmar el pago' });
  }
});

router.post('/refund', async (req, res) => {
  console.log('Iniciando proceso de reembolso');
  if (!req.user) {
    console.log('Usuario no autenticado');
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { orderId } = req.body;
  console.log('OrderId recibido para reembolso:', orderId);

  try {
    const [orderRows] = await pool.query('SELECT * FROM orders WHERE id = ? AND user_id = ?', [orderId, req.user.id]);
    console.log('Resultado de la consulta de orden para reembolso:', orderRows);
    
    if (orderRows.length === 0) {
      console.log('Orden no encontrada para reembolso');
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    const order = orderRows[0];
    console.log('Orden encontrada para reembolso:', order);

    if (order.status !== 'completed') {
      console.log('La orden no está completada, no se puede reembolsar');
      return res.status(400).json({ error: 'La orden no está completada' });
    }

    if (!order.payment_intent_id) {
      console.log('No se encontró el ID de la intención de pago para reembolso');
      return res.status(400).json({ error: 'No se encontró el ID de la intención de pago' });
    }

    const refund = await stripe.refunds.create({
      payment_intent: order.payment_intent_id,
    });
    console.log('Reembolso creado:', refund);

    await pool.query('UPDATE orders SET status = ? WHERE id = ?', ['refunded', order.id]);
    console.log('Orden actualizada como reembolsada');

    res.json({ success: true, refund });
  } catch (error) {
    console.error('Error al procesar el reembolso:', error);
    res.status(500).json({ error: 'Error al procesar el reembolso' });
  }
});

module.exports = router;