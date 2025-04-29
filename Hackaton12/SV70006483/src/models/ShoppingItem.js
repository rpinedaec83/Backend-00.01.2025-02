const { ObjectId } = require('mongodb');

class ShoppingItem {
  constructor(nombre, descripcion, fecha = new Date(), esCompletado = false) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.esCompletado = esCompletado;
  }
}

module.exports = ShoppingItem;