const express = require("express");
const router = express.Router();
const cuponController = require("../controllers/cupon.controller");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/authJwt");

// Crear cupón (solo Moderador)
router.post("/", [verifyToken, isModerator], cuponController.crearCupon);

// Verificar cupón (cualquiera)
router.post("/verificar", cuponController.verificarCupon);

// Actualizar cupón (solo Moderador)
router.put("/:id", [verifyToken, isModerator], cuponController.actualizarCupon);

// Eliminar cupón (solo Admin)
router.delete("/:id", [verifyToken, isAdmin], cuponController.eliminarCupon);

module.exports = router;
