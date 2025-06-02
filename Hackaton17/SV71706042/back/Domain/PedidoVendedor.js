class PedidoVendedor {
  constructor(id, vendedorId, productos, datosCliente, total, estado = "pendiente") {
    this.id = id;
    this.vendedorId = vendedorId;
    this.productos = productos; // Array de { productoId, cantidad }
    this.datosCliente = datosCliente; // nombre, direccion, telefono
    this.total = total;
    this.estado = estado;
    this.fecha = new Date();
  }
}

module.exports = PedidoVendedor;
