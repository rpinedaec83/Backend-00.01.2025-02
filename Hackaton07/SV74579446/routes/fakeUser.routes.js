const express = require('express');
const { getFakeUser } = require('../services/fakeUser/fakeUser.service');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await getFakeUser();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
