const express = require('express');
const { getPokemonList, getPokemonDetails } = require('../services/pokemon/pokemon.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getPokemonList();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:name', async (req, res) => {
    try {
        const data = await getPokemonDetails(req.params.name);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;