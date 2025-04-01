const express = require('express');
const { getImages } = require('../services/images/images.service');

const router = express.Router();

router.get('/:query', async (req, res) => {
    try {
        const data = await getImages(req.params.query);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;