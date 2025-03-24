import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export class OmdbService {
  constructor() {
    this.api_url = process.env.OMDB_API_URL;
    this.api_key = process.env.OMDB_API_KEY;
  }

  async searchMovies(query, limit = 10) {

      const response = await axios.get(this.api_url, {
        params: {
          apikey: this.api_key,
          s: query,
          type: "movie",
        },
      });
        const movies = response.data.Search.slice(0, limit);
        return movies;
  }

  async getMovieDetails(idOrTitle) {
      const response = await axios.get(this.api_url, {
        params: {
          apikey: this.api_key,
          i: idOrTitle, // Buscar por ID de IMDb
          t: idOrTitle, // Buscar por título
          plot: "full", // Obtener la trama completa
        },
      });

        const movie = response.data;
        return movie;
  }
}

export const newOmdbService = new OmdbService();