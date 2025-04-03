const express = require('express');
const { getExchangeRate } = require('../services/exchange/exchange.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getExchangeRate();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;