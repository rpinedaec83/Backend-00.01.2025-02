const mongoose = require('mongoose');

const cuponSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true, trim: true },
  descuento: { type: Number, required: true, min: 0 }, // Descuento en porcentaje
  vendedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor', required: true },
  limiteUso: { type: Number, required: true, min: 1 }, // Maximo de veces que se puede usar el cupón
  condicionMinimoCompra: { type: Number, required: true, min: 0 } // Monto mínimo de compra para aplicar el cupón
}, {
  timestamps: true
});

const Cupon = mongoose.model('Cupon', cuponSchema); // Modelo de cupones
module.exports = Cupon;
