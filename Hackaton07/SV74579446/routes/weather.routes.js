const express = require('express');
const { getWeather } = require('../services/weather/weather.service');

const router = express.Router();

router.get('/:city', async (req, res) => {
    try {
        const data = await getWeather(req.params.city);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;