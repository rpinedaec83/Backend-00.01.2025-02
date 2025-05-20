const Curso = require("../models/curso.model");

// Crear un curso (solo Moderador/Admin)
exports.crearCurso = async (req, res) => {
  try {
    const { nombre, descripcion, imagen, portada, valor } = req.body;
    const nuevoCurso = new Curso({ nombre, descripcion, imagen, portada, valor });
    const cursoGuardado = await nuevoCurso.save();
    res.status(201).json(cursoGuardado);
  } catch (error) {
    res.status(500).json({ message: "Error al crear curso", error });
  }
};

// Obtener todos los cursos (público)
exports.obtenerCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener cursos", error });
  }
};

// Actualizar curso (solo Moderador)
exports.actualizarCurso = async (req, res) => {
  try {
    const cursoActualizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cursoActualizado) return res.status(404).json({ message: "Curso no encontrado" });
    res.json(cursoActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar curso", error });
  }
};

// Eliminar curso (solo Admin)
exports.eliminarCurso = async (req, res) => {
  try {
    const eliminado = await Curso.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ message: "Curso no encontrado" });
    res.json({ message: "Curso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar curso", error });
  }
};
