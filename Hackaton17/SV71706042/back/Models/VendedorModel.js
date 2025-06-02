const mongoose = require('mongoose');
const Persona = require('./PersonaModel');

// Creamos el esquema específico para un vendedor
const vendedorSchema = new mongoose.Schema({
  nombreTienda: { type: String, required: true },
  tipoNegocio: { type: String,  required: true }, //Pudo ser un enum pero mejor string para evitar problemas
  rucDni: { type: String, required: true },
  direccionNegocio: { type: String, required: true },
  categoriaPrincipal: { type: String, required: true }, //Aca igual
  productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }], // Productos que ha publicado
  cupones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cupon' }]  // Cupones que ha creado
});

// Igual que el anterior, extendemos desde Persona
const Vendedor = Persona.discriminator('Vendedor', vendedorSchema);

module.exports = Vendedor;
