const express = require('express');
const Joi = require('joi');
const Order = require('../models/Order');
const Course = require('../models/Course');
const Coupon = require('../models/Coupon');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Esquema de validación
const orderSchema = Joi.object({
  courses: Joi.array().items(Joi.string().hex().length(24)).min(1).required(),
  couponCode: Joi.string().optional(),
  paymentMethod: Joi.string().valid('tarjeta', 'transferencia', 'paypal').required()
});

// Generar número de orden único
const generateOrderNumber = () => {
  return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Calcular descuento
const calculateDiscount = async (totalAmount, couponCode) => {
  if (!couponCode) return { discountAmount: 0, coupon: null };

  const coupon = await Coupon.findOne({
    code: couponCode.toUpperCase(),
    isActive: true,
    validFrom: { $lte: new Date() },
    validUntil: { $gte: new Date() }
  });

  if (!coupon) {
    throw new Error('Cupón no válido o expirado');
  }

  if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
    throw new Error('Cupón agotado');
  }

  if (totalAmount < coupon.minPurchaseAmount) {
    throw new Error(`Monto mínimo de compra: $${coupon.minPurchaseAmount}`);
  }

  let discountAmount = 0;
  
  if (coupon.discountType === 'percentage') {
    discountAmount = (totalAmount * coupon.discountValue) / 100;
    if (coupon.maxDiscountAmount) {
      discountAmount = Math.min(discountAmount, coupon.maxDiscountAmount);
    }
  } else {
    discountAmount = coupon.discountValue;
  }

  return { discountAmount, coupon };
};

// Obtener todas las órdenes (público)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, userId } = req.query;
    const query = {};

    if (status) query.status = status;
    if (userId) query.user = userId;

    const orders = await Order.find(query)
      .populate('user', 'firstName lastName email')
      .populate('courses', 'name valor')
      .populate('couponUsed', 'code discountType discountValue')
      .populate('createdBy', 'firstName lastName')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Order.countDocuments(query);

    res.json({
      orders,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener orden por ID (público)
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'firstName lastName email')
      .populate('courses', 'name description valor img')
      .populate('couponUsed', 'code discountType discountValue')
      .populate('createdBy', 'firstName lastName');

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear orden (solo moderadores)
router.post('/', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { error, value } = orderSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Verificar que los cursos existen
    const courses = await Course.find({
      _id: { $in: value.courses },
      isActive: true
    });

    if (courses.length !== value.courses.length) {
      return res.status(404).json({ error: 'Algunos cursos no fueron encontrados' });
    }

    // Calcular total
    const totalAmount = courses.reduce((sum, course) => sum + course.valor, 0);

    // Calcular descuento si hay cupón
    let discountAmount = 0;
    let coupon = null;

    if (value.couponCode) {
      const discountResult = await calculateDiscount(totalAmount, value.couponCode);
      discountAmount = discountResult.discountAmount;
      coupon = discountResult.coupon;
    }

    const finalAmount = totalAmount - discountAmount;

    const order = new Order({
      orderNumber: generateOrderNumber(),
      user: req.user._id,
      courses: value.courses,
      totalAmount,
      discountAmount,
      finalAmount,
      couponUsed: coupon?._id,
      paymentMethod: value.paymentMethod,
      createdBy: req.user._id
    });

    await order.save();
    
    // Incrementar uso del cupón
    if (coupon) {
      await Coupon.findByIdAndUpdate(coupon._id, {
        $inc: { usedCount: 1 }
      });
    }

    await order.populate([
      { path: 'user', select: 'firstName lastName email' },
      { path: 'courses', select: 'name valor' },
      { path: 'couponUsed', select: 'code discountType discountValue' }
    ]);

    res.status(201).json({
      message: 'Orden creada exitosamente',
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar orden (solo moderadores)
router.put('/:id', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pendiente', 'pagado', 'cancelado', 'completado'].includes(status)) {
      return res.status(400).json({ error: 'Estado no válido' });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate([
      { path: 'user', select: 'firstName lastName email' },
      { path: 'courses', select: 'name valor' },
      { path: 'couponUsed', select: 'code discountType discountValue' }
    ]);

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    res.json({
      message: 'Orden actualizada exitosamente',
      order
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar orden (solo admins)
router.delete('/:id', auth, requireRole(['admin']), async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ error: 'Orden no encontrada' });
    }

    res.json({ message: 'Orden eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
