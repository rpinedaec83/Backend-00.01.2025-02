const axios = require('axios');

const getTopCocktails = async () => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la lista de cócteles');
    }
};

module.exports = { getTopCocktails};