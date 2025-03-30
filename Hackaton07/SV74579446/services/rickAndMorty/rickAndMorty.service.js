const axios = require('axios');

const getRickAndMortyCharacters = async () => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los personajes de Rick and Morty');
    }
};

const getCharacterDetails = async (id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener detalles del personaje');
    }
};

module.exports = { getRickAndMortyCharacters, getCharacterDetails };