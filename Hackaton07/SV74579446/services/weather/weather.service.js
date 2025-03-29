const axios = require('axios');

const getWeather = async (city) => {
    try {
        const API_KEY = process.env.WEATHER_API_KEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener datos del clima');
    }
};

module.exports = { getWeather };