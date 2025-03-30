import axios from 'axios';

class MovieService {
  constructor() {
    this.apiUrl = 'https://api.themoviedb.org/3/movie';
    this.apiKey = 'YOUR_TMDB_API_KEY'; // Sustituir con tu clave de API
  }

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${this.apiUrl}/${movieId}`, {
        params: {
          api_key: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw new Error('Error al obtener detalles de la película');
    }
  }
}

export const newMovieService = new MovieService();
