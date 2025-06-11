const mongoose = require('mongoose');

const itemOrdenSchema = new mongoose.Schema({
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true
  },
  nombreProducto: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true,
    min: 1
  },
  precioUnitario: {
    type: Number,
    required: true,
    min: 0
  },
  subtotal: {
    type: Number,
    required: true,
    min: 0
  }
});

const direccionSchema = new mongoose.Schema({
  direccion: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  departamento: {
    type: String,
    required: true
  },
  codigoPostal: {
    type: String,
    required: true
  },
  referencia: {
    type: String
  },
  telefono: {
    type: String,
    required: true
  }
});

const ordenSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  items: [itemOrdenSchema],
  total: {
    type: Number,
    required: true,
    min: 0
  },
  metodoDePago: {
    type: String,
    enum: ['tarjeta', 'transferencia', 'efectivo', 'paypal'],
    required: true
  },
  direccionEnvio: direccionSchema,
  status: {
    type: String,
    enum: ['pendiente', 'procesando', 'enviado', 'completada', 'cancelada'],
    default: 'pendiente'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ordenSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Orden', ordenSchema, 'order');