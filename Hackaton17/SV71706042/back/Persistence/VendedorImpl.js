const Vendedor = require('../Models/VendedorModel');

class VendedorImpl {
  insertar(datos) {
    const vendedor = new Vendedor(datos);
    return vendedor.save().catch(err => console.error("Error al insertar vendedor:", err));
  }

  buscarPorId(id) {
    return Vendedor.findById(id).populate('historialCompras').catch(err => {
      console.error("Error al buscar vendedor:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return Vendedor.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar vendedor:", err);
    });
  }

  eliminar(id) {
    return Vendedor.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar vendedor:", err);
    });
  }

  listarTodos() {
    return Vendedor.find().catch(err => {
      console.error("Error al listar vendedores:", err);
    });
  }
}

module.exports = new VendedorImpl();
