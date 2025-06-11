const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware'); // Importa el middleware

// Rutas de autenticación (públicas)
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.getLogout);

// Ruta home (protegida)
router.get('/', isAuthenticated, authController.getHome); // Agrega el middleware aquí

module.exports = router;