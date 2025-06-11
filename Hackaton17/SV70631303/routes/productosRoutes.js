const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

module.exports = (upload) => {
  // Rutas de la API
  router.get('/api/carrito/count', isAuthenticated, productosController.getCartCount);

  // Rutas de vistas
  router.get('/', isAuthenticated, productosController.listProducts);
  router.get('/agregar-producto', isAuthenticated, productosController.showNewProductForm);
  router.post('/', isAuthenticated, upload.single('imagen'), productosController.createProduct);
  router.get('/productos/:id', isAuthenticated, productosController.showProductDetail);

  return router;
};