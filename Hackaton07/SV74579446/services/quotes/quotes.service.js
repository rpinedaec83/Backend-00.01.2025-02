const axios = require('axios');

const getRandomQuote = async () => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener una cita famosa');
    }
};

module.exports = { getRandomQuote };