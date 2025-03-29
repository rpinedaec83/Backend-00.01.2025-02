const axios = require('axios');

const getUserGitHub = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener datos de GitHub');
    }
};

module.exports = { getUserGitHub };
