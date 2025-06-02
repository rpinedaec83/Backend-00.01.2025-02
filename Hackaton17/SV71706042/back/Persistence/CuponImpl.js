const Cupon = require('../Models/CuponModel');

class CuponImpl {
  insertar(datos) {
    const cupon = new Cupon(datos);
    return cupon.save().catch(err => console.error("Error al insertar cupon:", err));
  }

  buscarPorId(id) {
    return Cupon.findById(id).catch(err => {
      console.error("Error al buscar cupon:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return Cupon.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar cupon:", err);
    });
  }

  eliminar(id) {
    return Cupon.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar cupon:", err);
    });
  }

  listarTodos() {
    return Cupon.find().catch(err => {
      console.error("Error al listar cupones:", err);
    });
  }
}

module.exports = new CuponImpl();
