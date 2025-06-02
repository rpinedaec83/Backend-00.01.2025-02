const Persona = require('./Persona');

class Cliente extends Persona {
  constructor(id, nombre, correo, telefono, contraseña, direccionEntrega, fechaNacimiento, cupones = [], historialCompras = []) {
    super(id, nombre, correo, telefono, contraseña);
    this.direccionEntrega = direccionEntrega;
    this.fechaNacimiento = fechaNacimiento;
    this.cupones = cupones;
    this.historialCompras = historialCompras;
  }
}

module.exports = Cliente;
