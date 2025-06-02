const Persona = require('./Persona');

class Vendedor extends Persona {
  constructor(id, nombre, correo, telefono, contraseña, nombreNegocio, tipoNegocio, rucDni, direccionNegocio, categoriaPrincipal, productos = []) {
    super(id, nombre, correo, telefono, contraseña);
    this.nombreNegocio = nombreNegocio;
    this.tipoNegocio = tipoNegocio;
    this.rucDni = rucDni;
    this.direccionNegocio = direccionNegocio;
    this.categoriaPrincipal = categoriaPrincipal;
    this.productos = productos;
  }
}

module.exports = Vendedor;
