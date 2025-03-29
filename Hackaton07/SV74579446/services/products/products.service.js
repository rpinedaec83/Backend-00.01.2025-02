const axios = require('axios');

const getProductList = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la lista de productos');
    }
};

module.exports = { getProductList };