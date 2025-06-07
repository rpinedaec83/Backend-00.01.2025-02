const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  discountAmount: {
    type: Number,
    default: 0,
    min: 0
  },
  finalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  couponUsed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coupon'
  },
  status: {
    type: String,
    enum: ['pendiente', 'pagado', 'cancelado', 'completado'],
    default: 'pendiente'
  },
  paymentMethod: {
    type: String,
    enum: ['tarjeta', 'transferencia', 'paypal'],
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);