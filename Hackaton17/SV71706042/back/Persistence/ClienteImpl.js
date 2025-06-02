const Cliente = require('../Models/ClienteModel');

class ClienteImpl {
  insertar(datos) {
    const cliente = new Cliente(datos);
    return cliente.save().catch(err => console.error("Error al insertar cliente:", err));
  }

  buscarPorId(id) {
    return Cliente.findById(id).populate('historialCompras').catch(err => {
      console.error("Error al buscar cliente:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return Cliente.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar cliente:", err);
    });
  }

  eliminar(id) {
    return Cliente.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar cliente:", err);
    });
  }

  listarTodos() {
    return Cliente.find().catch(err => {
      console.error("Error al listar clientes:", err);
    });
  }
}

module.exports = new ClienteImpl();
