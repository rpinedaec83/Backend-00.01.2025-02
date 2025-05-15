const express = require("express");
const router = express.Router();
const ordenController = require("../controllers/orden.controller");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/authJwt");

// Crear orden (solo Moderador)
router.post("/", [verifyToken, isModerator], ordenController.crearOrden);

// Obtener todas las órdenes (público)
router.get("/", ordenController.obtenerOrdenes);

// Actualizar orden (solo Moderador)
router.put("/:id", [verifyToken, isModerator], ordenController.actualizarOrden);

// Eliminar orden (solo Admin)
router.delete("/:id", [verifyToken, isAdmin], ordenController.eliminarOrden);

module.exports = router;
