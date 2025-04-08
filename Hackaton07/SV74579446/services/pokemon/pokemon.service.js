const axios = require('axios');

const getPokemonList = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la lista de Pokémon');
    }
};

const getPokemonDetails = async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener los detalles del Pokémon');
    }
};

module.exports = { getPokemonList, getPokemonDetails };