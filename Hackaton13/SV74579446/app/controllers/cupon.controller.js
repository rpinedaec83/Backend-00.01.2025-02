const Cupon = require("../models/cupon.model");

// Crear un cupón (solo Moderador)
exports.crearCupon = async (req, res) => {
  try {
    const { codigo, descuento, expiracion } = req.body;
    const nuevoCupon = new Cupon({ codigo, descuento, expiracion });
    const cuponGuardado = await nuevoCupon.save();
    res.status(201).json(cuponGuardado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear cupón", error });
  }
};

// Verificar un cupón (cualquiera)
exports.verificarCupon = async (req, res) => {
  try {
    const { codigo } = req.body;
    const cupon = await Cupon.findOne({ codigo, activo: true });

    if (!cupon) {
      return res.status(404).json({ message: "Cupón no válido o expirado" });
    }

    // Verificamos que no haya expirado
    if (new Date(cupon.expiracion) < new Date()) {
      return res.status(400).json({ message: "Cupón expirado" });
    }

    res.status(200).json({ descuento: cupon.descuento, message: "Cupón válido" });
  } catch (error) {
    res.status(500).json({ message: "Error al verificar cupón", error });
  }
};

// Actualizar cupón (solo Moderador)
exports.actualizarCupon = async (req, res) => {
  try {
    const cuponActualizado = await Cupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cuponActualizado) return res.status(404).json({ message: "Cupón no encontrado" });
    res.json(cuponActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cupón", error });
  }
};

// Eliminar cupón (solo Admin)
exports.eliminarCupon = async (req, res) => {
  try {
    const cuponEliminado = await Cupon.findByIdAndDelete(req.params.id);
    if (!cuponEliminado) return res.status(404).json({ message: "Cupón no encontrado" });
    res.json({ message: "Cupón eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cupón", error });
  }
};
