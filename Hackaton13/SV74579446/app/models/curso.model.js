const mongoose = require("mongoose");

const CursoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: String,       // URL o nombre del archivo
  portada: String,      // Otra imagen opcional
  valor: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Curso", CursoSchema);
