const express = require('express');
const pool = require('../config/database');
const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  try {
    const [orders] = await pool.query(
      'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(orders);
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes' });
  }
});

router.post('/', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { items } = req.body;
  
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Se requiere al menos un item para crear una orden' });
  }

  const connection = await pool.getConnection();
  
  try {
    await connection.beginTransaction();

    const [orderResult] = await connection.query(
      'INSERT INTO orders (user_id, total_amount, status) VALUES (?, 0, "pending")',
      [req.user.id]
    );
    const orderId = orderResult.insertId;

    let totalAmount = 0;
    for (const item of items) {
      const [productResult] = await connection.query(
        'SELECT price FROM products WHERE id = ?',
        [item.product_id]
      );
      
      if (productResult.length === 0) {
        throw new Error(`Producto no encontrado: ${item.product_id}`);
      }

      const price = productResult[0].price;
      const itemTotal = price * item.quantity;
      totalAmount += itemTotal;

      await connection.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, item.product_id, item.quantity, price]
      );
    }

    await connection.query(
      'UPDATE orders SET total_amount = ? WHERE id = ?',
      [totalAmount, orderId]
    );

    await connection.commit();

    const [orderDetails] = await connection.query(
      'SELECT * FROM orders WHERE id = ?',
      [orderId]
    );
    const [orderItems] = await connection.query(
      'SELECT * FROM order_items WHERE order_id = ?',
      [orderId]
    );

    res.status(201).json({
      ...orderDetails[0],
      items: orderItems
    });

  } catch (error) {
    await connection.rollback();
    console.error('Error al crear la orden:', error);
    res.status(500).json({ error: 'Error al crear la orden' });
  } finally {
    connection.release();
  }
});

router.get('/:id', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  try {
    const [orders] = await pool.query(
      'SELECT * FROM orders WHERE id = ? AND user_id = ?',
      [req.params.id, req.user.id]
    );

    if (orders.length === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    const [items] = await pool.query(
      'SELECT * FROM order_items WHERE order_id = ?',
      [req.params.id]
    );

    res.json({ ...orders[0], items });
  } catch (error) {
    console.error('Error al obtener la orden:', error);
    res.status(500).json({ error: 'Error al obtener la orden' });
  }
});

router.put('/:id/status', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuario no autenticado' });
  }

  const { status } = req.body;
  
  if (!status || !['pending', 'completed', 'refunded'].includes(status)) {
    return res.status(400).json({ error: 'Estado de orden inválido' });
  }

  try {
    const [result] = await pool.query(
      'UPDATE orders SET status = ? WHERE id = ? AND user_id = ?',
      [status, req.params.id, req.user.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }
    
    res.json({ message: 'Estado de orden actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado de la orden:', error);
    res.status(500).json({ error: 'Error al actualizar el estado de la orden' });
  }
});

module.exports = router;