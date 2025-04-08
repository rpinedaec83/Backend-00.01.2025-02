const express = require('express');
const { getTopMovies, getMovieDetails } = require('../services/Movies/movies.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getTopMovies();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await getMovieDetails(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;