const mongoose = require('mongoose');

// "persona" (puede ser cliente o vendedor)
const personaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true }, // no se pueden repetir correos para evitar problemas
  telefono: { type: String, required: true },
  contraseña: { type: String, required: true }
}, {
  // Esta opción nos permite tener diferentes tipos de persona (cliente, vendedor)
  discriminatorKey: 'rol',
  timestamps: true // guarda automáticamente fecha de creación y modificación ESCENCIAL segun lo que estoy planteando
});

// Creamos el modelo base 'Persona'
const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;
