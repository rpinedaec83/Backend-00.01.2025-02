const mongoose = require('mongoose');

const pedidoVendedorSchema = new mongoose.Schema({
  vendedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor', required: true },
  productos: [{
    productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
    cantidad: { type: Number, required: true, min: 1 }
  }],
  datosCliente: {
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }
  },
  total: { type: Number, required: true, min: 0 },
  estado: { type: String, default: 'pendiente', enum: ['pendiente', 'enviado', 'entregado', 'cancelado'] },
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('PedidoVendedor', pedidoVendedorSchema);
