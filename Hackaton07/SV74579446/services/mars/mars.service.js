const axios = require('axios');

const getMarsData = async () => {
    try {
        const NASA_API_KEY = process.env.NASA_API_KEY;
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener datos de Marte');
    }
};

module.exports = { getMarsData };