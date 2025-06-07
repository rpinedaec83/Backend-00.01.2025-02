const express = require('express');
const Joi = require('joi');
const Coupon = require('../models/Coupon');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Esquema de validación
const couponSchema = Joi.object({
  code: Joi.string().required(),
  description: Joi.string().required(),
  discountType: Joi.string().valid('percentage', 'fixed').required(),
  discountValue: Joi.number().min(0).required(),
  minPurchaseAmount: Joi.number().min(0).default(0),
  maxDiscountAmount: Joi.number().min(0).optional(),
  usageLimit: Joi.number().min(1).optional(),
  validFrom: Joi.date().required(),
  validUntil: Joi.date().required()
});

// Verificar cupón (público)
router.post('/verify', async (req, res) => {
  try {
    const { code, totalAmount } = req.body;

    if (!code || totalAmount === undefined) {
      return res.status(400).json({ error: 'Código de cupón y monto total requeridos' });
    }

    const coupon = await Coupon.findOne({
      code: code.toUpperCase(),
      isActive: true,
      validFrom: { $lte: new Date() },
      validUntil: { $gte: new Date() }
    });

    if (!coupon) {
      return res.status(404).json({ error: 'Cupón no válido o expirado' });
    }

    if (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit) {
      return res.status(400).json({ error: 'Cupón agotado' });
    }

    if (totalAmount < coupon.minPurchaseAmount) {
      return res.status(400).json({ 
        error: `Monto mínimo de compra: $${coupon.minPurchaseAmount}` 
      });
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

    res.json({
      valid: true,
      coupon: {
        code: coupon.code,
        description: coupon.description,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
        discountAmount: Math.min(discountAmount, totalAmount)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los cupones (solo moderadores y admins)
router.get('/', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { page = 1, limit = 10, active } = req.query;
    const query = {};

    if (active !== undefined) {
      query.isActive = active === 'true';
    }

    const coupons = await Coupon.find(query)
      .populate('createdBy', 'firstName lastName')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Coupon.countDocuments(query);

    res.json({
      coupons,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear cupón (solo moderadores)
router.post('/', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { error, value } = couponSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Verificar que la fecha de fin sea posterior a la de inicio
    if (new Date(value.validUntil) <= new Date(value.validFrom)) {
      return res.status(400).json({ 
        error: 'La fecha de fin debe ser posterior a la fecha de inicio' 
      });
    }

    // Verificar que el código no exista
    const existingCoupon = await Coupon.findOne({ 
      code: value.code.toUpperCase() 
    });
    
    if (existingCoupon) {
      return res.status(400).json({ error: 'El código de cupón ya existe' });
    }

    const coupon = new Coupon({
      ...value,
      code: value.code.toUpperCase(),
      createdBy: req.user._id
    });

    await coupon.save();
    await coupon.populate('createdBy', 'firstName lastName');

    res.status(201).json({
      message: 'Cupón creado exitosamente',
      coupon
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar cupón (solo moderadores)
router.put('/:id', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { error, value } = couponSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Verificar que la fecha de fin sea posterior a la de inicio
    if (new Date(value.validUntil) <= new Date(value.validFrom)) {
      return res.status(400).json({ 
        error: 'La fecha de fin debe ser posterior a la fecha de inicio' 
      });
    }

    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { ...value, code: value.code.toUpperCase() },
      { new: true, runValidators: true }
    ).populate('createdBy', 'firstName lastName');

    if (!coupon) {
      return res.status(404).json({ error: 'Cupón no encontrado' });
    }

    res.json({
      message: 'Cupón actualizado exitosamente',
      coupon
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar cupón (solo admins)
router.delete('/:id', auth, requireRole(['admin']), async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!coupon) {
      return res.status(404).json({ error: 'Cupón no encontrado' });
    }

    res.json({ message: 'Cupón eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
