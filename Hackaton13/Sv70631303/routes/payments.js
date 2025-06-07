const express = require('express');
const Joi = require('joi');
const Order = require('../models/Order');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Esquema de validación para procesamiento de pago
const paymentSchema = Joi.object({
  orderId: Joi.string().hex().length(24).required(),
  paymentMethod: Joi.string().valid('tarjeta', 'transferencia', 'paypal').required(),
  paymentData: Joi.object({
    cardNumber: Joi.string().when('...paymentMethod', {
      is: 'tarjeta',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    cardHolder: Joi.string().when('...paymentMethod', {
      is: 'tarjeta',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    expiryDate: Joi.string().when('...paymentMethod', {
      is: 'tarjeta',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    cvv: Joi.string().when('...paymentMethod', {
      is: 'tarjeta',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    accountNumber: Joi.string().when('...paymentMethod', {
      is: 'transferencia',
      then: Joi.required(),
      otherwise: Joi.optional()
    }),
    paypalEmail: Joi.string().email().when('...paymentMethod', {
      is: 'paypal',
      then: Joi.required(),
      otherwise: Joi.optional()
    })
  }).required()
});

// Simulador de procesamiento de pagos
const simulatePaymentProcessing = async (paymentMethod, paymentData, amount) => {
  // Simular tiempo de procesamiento
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Simular diferentes escenarios de pago
  const scenarios = ['success', 'insufficient_funds', 'invalid_card', 'network_error'];
  const weights = [0.8, 0.1, 0.05, 0.05]; // 80% éxito, 20% errores varios
  
  let randomValue = Math.random();
  let selectedScenario = scenarios[0];
  
  for (let i = 0; i < scenarios.length; i++) {
    if (randomValue < weights.slice(0, i + 1).reduce((a, b) => a + b, 0)) {
      selectedScenario = scenarios[i];
      break;
    }
  }

  const results = {
    success: {
      success: true,
      transactionId: 'TXN-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      message: 'Pago procesado exitosamente',
      fee: amount * 0.029 // 2.9% de comisión
    },
    insufficient_funds: {
      success: false,
      error: 'Fondos insuficientes',
      errorCode: 'INSUFFICIENT_FUNDS'
    },
    invalid_card: {
      success: false,
      error: 'Datos de tarjeta inválidos',
      errorCode: 'INVALID_CARD'
    },
    network_error: {
      success: false,
      error: 'Error de red, intente nuevamente',
      errorCode: 'NETWORK_ERROR'
    }
  };

  return results[selectedScenario];
};

// Procesar pago
router.post('/process', auth, async (req, res) => {
  try {
    const { error, value } = paymentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Verificar que la orden existe y pertenece al usuario
    const order = await Order.findOne({
      _id: value.orderId,
      user: req.user._id,
      status: 'pendiente'
    }).populate('courses', 'name valor');

    if (!order) {
      return res.status(404).json({ 
        error: 'Orden no encontrada o ya procesada' 
      });
    }

    // Simular procesamiento de pago
    const paymentResult = await simulatePaymentProcessing(
      value.paymentMethod,
      value.paymentData,
      order.finalAmount
    );

    if (paymentResult.success) {
      // Actualizar orden como pagada
      order.status = 'pagado';
      await order.save();

      res.json({
        success: true,
        message: paymentResult.message,
        transactionId: paymentResult.transactionId,
        order: {
          id: order._id,
          orderNumber: order.orderNumber,
          status: order.status,
          finalAmount: order.finalAmount,
          courses: order.courses
        },
        fee: paymentResult.fee
      });
    } else {
      res.status(400).json({
        success: false,
        error: paymentResult.error,
        errorCode: paymentResult.errorCode
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verificar estado de pago
router.get('/status/:orderId', auth, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.orderId,
      user: req.user._id
    }).populate('courses', 'name valor img');

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    res.json({
      orderId: order._id,
      orderNumber: order.orderNumber,
      status: order.status,
      totalAmount: order.totalAmount,
      discountAmount: order.discountAmount,
      finalAmount: order.finalAmount,
      paymentMethod: order.paymentMethod,
      courses: order.courses,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Webhook simulado para notificaciones de pago
router.post('/webhook', async (req, res) => {
  try {
    const { transactionId, orderId, status, amount } = req.body;

    // Verificar que la orden existe
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    // Actualizar estado según la notificación
    const statusMap = {
      'completed': 'completado',
      'failed': 'cancelado',
      'refunded': 'cancelado'
    };

    if (statusMap[status]) {
      order.status = statusMap[status];
      await order.save();
    }

    res.json({ 
      message: 'Webhook procesado exitosamente',
      orderId: order._id,
      newStatus: order.status
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;