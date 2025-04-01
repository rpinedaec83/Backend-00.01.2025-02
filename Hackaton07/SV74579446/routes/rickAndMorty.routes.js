const express = require('express');
const { getRickAndMortyCharacters, getCharacterDetails } = require('../services/rickAndMorty/rickAndMorty.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getRickAndMortyCharacters();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await getCharacterDetails(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;