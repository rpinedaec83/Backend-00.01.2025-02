const Orden = require("../models/orden.model");

// Crear una orden (solo Moderador)
exports.crearOrden = async (req, res) => {
  try {
    const { usuario, cursos, total } = req.body;
    const nuevaOrden = new Orden({ usuario, cursos, total });
    const ordenGuardada = await nuevaOrden.save();
    res.status(201).json(ordenGuardada);
  } catch (error) {
    res.status(500).json({ message: "Error al crear orden", error });
  }
};

// Obtener todas las órdenes (público)
exports.obtenerOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.find().populate("usuario cursos");
    res.status(200).json(ordenes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener órdenes", error });
  }
};

// Actualizar una orden (solo Moderador)
exports.actualizarOrden = async (req, res) => {
  try {
    const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ordenActualizada) return res.status(404).json({ message: "Orden no encontrada" });
    res.json(ordenActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar orden", error });
  }
};

// Eliminar una orden (solo Admin)
exports.eliminarOrden = async (req, res) => {
  try {
    const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
    if (!ordenEliminada) return res.status(404).json({ message: "Orden no encontrada" });
    res.json({ message: "Orden eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar orden", error });
  }
};
