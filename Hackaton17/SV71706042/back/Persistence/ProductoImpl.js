const Producto = require('../Models/ProductoModel');

class ProductoImpl {
  insertar(datos) {
    const producto = new Producto(datos);
    return producto.save().catch(err => console.error("Error al insertar producto:", err));
  }

  buscarPorId(id) {
    return Producto.findById(id).catch(err => {
      console.error("Error al buscar producto:", err);
    });
  }

  actualizar(id, nuevosDatos) {
    return Producto.findByIdAndUpdate(id, nuevosDatos, { new: true }).catch(err => {
      console.error("Error al actualizar producto:", err);
    });
  }

  eliminar(id) {
    return Producto.findByIdAndDelete(id).catch(err => {
      console.error("Error al eliminar producto:", err);
    });
  }

  listarTodos() {
    return Producto.find().catch(err => {
      console.error("Error al listar productos:", err);
    });
  }
}

module.exports = new ProductoImpl();
