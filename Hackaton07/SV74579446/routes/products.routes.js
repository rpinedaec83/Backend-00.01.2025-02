const express = require('express');
const { getProductList } = require('../services/products/products.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getProductList();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;