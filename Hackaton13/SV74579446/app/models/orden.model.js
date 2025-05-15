const mongoose = require("mongoose");

const OrdenSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cursos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Curso"
  }],
  estado: {
    type: String,
    enum: ["pendiente", "pagado", "cancelado"],
    default: "pendiente"
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Orden", OrdenSchema);
