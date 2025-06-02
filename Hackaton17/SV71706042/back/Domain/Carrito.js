class Carrito {
  constructor(compradorId, productos = []) {
    this.compradorId = compradorId;
    this.productos = productos; // Array de { productoId, cantidad }
  }

  agregarProducto(productoId, cantidad) {
    this.productos.push({ productoId, cantidad });
  }

  aplicarCupon(cupon) {
    this.cuponAplicado = cupon;
  }
}

module.exports = Carrito;
    