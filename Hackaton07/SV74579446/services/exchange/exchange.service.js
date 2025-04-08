const axios = require('axios');

const getExchangeRate = async () => {
    try {
        const response = await axios.get('https://www.frankfurter.app/latest?from=USD&to=PEN');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el tipo de cambio');
    }
};

module.exports = { getExchangeRate };