const PedidoCliente = require('../Models/PedidoClienteModel');

class PedidoClienteImpl {
  insertar(datos) {
    const pedido = new PedidoCliente(datos);
    return pedido.save().catch(err => console.error("Error al insertar pedido del cliente:", err));
  }

  buscarPorId(id) {
    return PedidoCliente.findById(id).catch(err => {
      console.error("Error al buscar pedido del cliente:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return PedidoCliente.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar pedido del cliente:", err);
    });
  }

  eliminar(id) {
    return PedidoCliente.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar pedido del cliente:", err);
    });
  }

  listarTodos() {
    return PedidoCliente.find().catch(err => {
      console.error("Error al listar pedidos del cliente:", err);
    });
  }
}

module.exports = new PedidoClienteImpl();
