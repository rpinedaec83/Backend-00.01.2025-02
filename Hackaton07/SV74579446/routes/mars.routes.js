const express = require('express');
const { getMarsData } = require('../services/mars/mars.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getMarsData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;