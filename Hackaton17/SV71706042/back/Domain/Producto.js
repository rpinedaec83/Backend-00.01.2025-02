class Producto {
  constructor(id, nombre, descripcion, precio, vendedorId, categoria) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.vendedorId = vendedorId;
    this.categoria = categoria;
  }
}
module.exports = Producto;  