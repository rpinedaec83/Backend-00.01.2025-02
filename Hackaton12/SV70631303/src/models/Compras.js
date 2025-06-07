// models/Compra.js
const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
  Nombre: String,
  Descripcion: String,
  Fecha: Date,
  EsCompletado: Boolean
});

module.exports = mongoose.model('Compra', compraSchema, 'compras');