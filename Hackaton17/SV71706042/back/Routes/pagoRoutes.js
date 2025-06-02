const express = require('express');
const router = express.Router();
const pagoController = require('../Controllers/pagoController');

router.post('/create-checkout-session', pagoController.createCheckoutSession);

module.exports = router;
