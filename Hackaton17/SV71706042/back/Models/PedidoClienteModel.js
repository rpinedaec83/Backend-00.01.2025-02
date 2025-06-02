const mongoose = require('mongoose');

const pedidoClienteSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  productosPorTienda: [{
    tiendaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor' },
    productos: [{
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
      cantidad: { type: Number, required: true, min: 1 }
    }],
    subtotal: { type: Number, required: true, min: 0 }
  }],
  total: { type: Number, required: true, min: 0 },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  nombres: { type: String, required: true },
  cuponesAplicados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cupon' }],
  fecha: { type: Date, default: Date.now }
}, {
  timestamps: true
});

module.exports = mongoose.model('PedidoCliente', pedidoClienteSchema);
