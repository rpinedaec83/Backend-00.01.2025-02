const Coupon = require('../models/Coupon');

// Get all coupons
exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Create a coupon
exports.createCoupon = async (req, res) => {
  try {
    // Verificar si req.body está vacío
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ msg: 'El cuerpo de la solicitud está vacío' });
    }

    const { code, type, value, usageLimit, expirationDate } = req.body;

    // Verificar si los campos requeridos están presentes
    if (!code || !type || !value) {
      return res.status(400).json({ msg: 'Faltan campos requeridos (code, type, value)' });
    }

    let coupon = await Coupon.findOne({ code });
    if (coupon) {
      return res.status(400).json({ msg: 'El cupón ya existe' });
    }

    coupon = new Coupon({
      code,
      type,
      value,
      usageLimit,
      expirationDate
    });

    await coupon.save();
    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Verify a coupon
exports.verifyCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ msg: 'Cupón no encontrado' });
    }

    if (!coupon.isActive) {
      return res.status(400).json({ msg: 'Cupón inactivo' });
    }

    if (coupon.expirationDate && new Date() > coupon.expirationDate) {
      return res.status(400).json({ msg: 'Cupón expirado' });
    }

    if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
      return res.status(400).json({ msg: 'Límite de uso del cupón alcanzado' });
    }

    res.json({ msg: 'Cupón válido', coupon });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Apply a coupon
exports.applyCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const { total } = req.body;

    const coupon = await Coupon.findOne({ code });

    if (!coupon || !coupon.isActive || (coupon.expirationDate && new Date() > coupon.expirationDate) || 
        (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit)) {
      return res.status(400).json({ msg: 'Cupón no válido' });
    }

    let discount = 0;
    if (coupon.type === 'percentage') {
      discount = total * (coupon.value / 100);
    } else {
      discount = Math.min(coupon.value, total);
    }

    const finalTotal = total - discount;

    res.json({ 
      originalTotal: total,
      discount,
      finalTotal,
      coupon: coupon.code
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Update a coupon
exports.updateCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const coupon = await Coupon.findByIdAndUpdate(id, updateData, { new: true });

    if (!coupon) {
      return res.status(404).json({ msg: 'Cupón no encontrado' });
    }

    res.json(coupon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
  try {
    const { id } = req.params;

    const coupon = await Coupon.findByIdAndDelete(id);

    if (!coupon) {
      return res.status(404).json({ msg: 'Cupón no encontrado' });
    }

    res.json({ msg: 'Cupón eliminado' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};