const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const { isAdmin, isModerator } = require('../middleware/roles');

// Crear orden (solo Moderador)
router.post('/', [auth, isModerator], orderController.createOrder);

// Obtener todas las órdenes (Cualquiera)
router.get('/', auth, orderController.getAllOrders);

// Obtener una orden por ID (Cualquiera)
router.get('/:id', auth, orderController.getOrderById);

// Actualizar una orden (solo Moderador)
router.put('/:id', [auth, isModerator], orderController.updateOrder);

// Eliminar una orden (solo Admin)
router.delete('/:id', [auth, isAdmin], orderController.deleteOrder);

// Procesar pago de una orden (Cualquiera)
router.post('/:id/pay', auth, orderController.processPayment);


module.exports = router;