const PedidoVendedor = require('../Models/PedidoVendedorModel');

class PedidoVendedorImpl {
  insertar(datos) {
    const pedido = new PedidoVendedor(datos);
    return pedido.save().catch(err => console.error("Error al insertar pedido al vendedor:", err));
  }

  buscarPorId(id) {
    return PedidoVendedor.findById(id).catch(err => {
      console.error("Error al buscar pedido al vendedor:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return PedidoVendedor.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar pedido al vendedor:", err);
    });
  }

  eliminar(id) {
    return PedidoVendedor.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar pedido al vendedor:", err);
    });
  }

  listarTodos() {
    return PedidoVendedor.find().catch(err => {
      console.error("Error al listar pedidos al vendedor:", err);
    });
  }
}

module.exports = new PedidoVendedorImpl();
