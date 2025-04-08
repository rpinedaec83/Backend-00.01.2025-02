const express = require('express');
const { getUserGitHub } = require('../services/github/github.service');

const router = express.Router();

router.get('/:username', async (req, res) => {
    try {
        const data = await getUserGitHub(req.params.username);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
