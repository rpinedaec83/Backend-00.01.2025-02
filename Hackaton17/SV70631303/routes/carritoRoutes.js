const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

module.exports = () => {
  // Rutas de vistas
  router.get('/', isAuthenticated, carritoController.verCarrito);
  router.post('/agregar', isAuthenticated, carritoController.agregarProducto);
  router.post('/eliminar/:itemId', isAuthenticated, carritoController.eliminarProducto);
  router.post('/actualizar/:itemId', isAuthenticated, carritoController.actualizarCantidad);
  router.get('/checkout', isAuthenticated, carritoController.mostrarCheckout);
  router.get('/orden-confirmada/:id', isAuthenticated, carritoController.mostrarOrdenConfirmada);
  router.post('/:id/orden', isAuthenticated, carritoController.crearOrden);
  router.get('/mis-ordenes', isAuthenticated, carritoController.mostrarOrdenes);

  return router;
};