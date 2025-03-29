const axios = require('axios');

const getTopMovies = async () => {
    try {
        const TMDB_API_KEY = process.env.TMDB_API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=es-ES&page=1`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener el top de películas');
    }
};

const getMovieDetails = async (movieId) => {
    try {
        const TMDB_API_KEY = process.env.TMDB_API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=es-ES`);
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener detalles de la película');
    }
};

module.exports = { getTopMovies, getMovieDetails };