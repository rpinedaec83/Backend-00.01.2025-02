class PedidoCliente {
  constructor(id, clienteId, productosPorTienda, total, direccion, telefono, nombres, cuponesAplicados = []) {
    this.id = id;
    this.clienteId = clienteId;
    this.productosPorTienda = productosPorTienda; // Array de { tiendaId, productos: [{productoId, cantidad}], subtotal }
    this.total = total;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nombres = nombres;
    this.cuponesAplicados = cuponesAplicados;
    this.fecha = new Date();
  }
}

module.exports = PedidoCliente;
