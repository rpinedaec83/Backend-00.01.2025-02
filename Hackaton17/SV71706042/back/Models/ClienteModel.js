const mongoose = require('mongoose');
const Persona = require('./PersonaModel'); // Importamos el esquema base

// Creamos un nuevo esquema extendiendo desde Persona (tipo cliente)
const clienteSchema = new mongoose.Schema({
  direccionEntrega: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  cupones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cupon' }], // Lista de cupones, necesita el codigo, fechaVencimiento y el idVendedor
  historialCompras: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }] // Todas las compras que ha realizado
});

// "discriminator" para crear un modelo específico basado en Persona
const cliente = Persona.discriminator('cliente', clienteSchema);

module.exports = cliente;
