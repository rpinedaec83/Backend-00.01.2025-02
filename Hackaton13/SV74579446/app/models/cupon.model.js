const mongoose = require("mongoose");

const CuponSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true
  },
  descuento: {
    type: Number,
    required: true
  },
  activo: {
    type: Boolean,
    default: true
  },
  expiracion: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Cupon", CuponSchema);
