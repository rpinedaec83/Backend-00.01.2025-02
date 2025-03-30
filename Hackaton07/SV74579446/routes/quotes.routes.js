const express = require('express');
const { getRandomQuote } = require('../services/quotes/quotes.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getRandomQuote();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;