const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { isModerator, isAdmin } = require('../middleware/roles');
const couponController = require('../controllers/couponController');

router.get('/', couponController.getAllCoupons);

router.post('/', [auth, isModerator], couponController.createCoupon);

router.get('/verify/:code', couponController.verifyCoupon);

router.post('/apply/:code', couponController.applyCoupon);

router.put('/:id', [auth, isModerator], couponController.updateCoupon);

router.delete('/:id', [auth, isAdmin], couponController.deleteCoupon);

module.exports = router;