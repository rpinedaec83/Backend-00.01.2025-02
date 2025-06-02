const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true, min: 0 },
  vendedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor', required: true },
  categoria: { type: String }
}, {
  timestamps: true // para crear campos de fecha de creación y actualización automáticamente
});

module.exports = mongoose.model('Producto', productoSchema);
