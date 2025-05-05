const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth'); 

router.post('/register', authController.register);

router.post('/login', authController.login);

router.put('/change-role', auth, authController.isAdmin, authController.changeRole);

router.post('/logout', auth, authController.logout);

module.exports = router;