const axios = require('axios');

const getImages = async (query) => {
    try {
        const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener imágenes');
    }
};

module.exports = { getImages };