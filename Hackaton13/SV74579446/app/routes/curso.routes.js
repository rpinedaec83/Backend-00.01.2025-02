const express = require("express");
const router = express.Router();
const cursoController = require("../controllers/curso.controller");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/authJwt");

// Crear curso (solo Moderador)
router.post("/", [verifyToken, isModerator], cursoController.crearCurso);

// Obtener todos los cursos (público)
router.get("/", cursoController.obtenerCursos);

// Actualizar curso (solo Moderador)
router.put("/:id", [verifyToken, isModerator], cursoController.actualizarCurso);

// Eliminar curso (solo Admin)
router.delete("/:id", [verifyToken, isAdmin], cursoController.eliminarCurso);

module.exports = router;
