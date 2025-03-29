const express = require('express');
const { getTopCocktails } = require('../services/cocktails/cocktails.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getTopCocktails();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;