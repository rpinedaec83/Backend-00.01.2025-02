import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class MoviesService {
  constructor() {
    this.api_url = process.env.API_MOVIES_URL;
    this.api_key = process.env.MOVIE_API_KEY;
  }

  async getTopMovies() {
    const { data } = await axios.get(`${this.api_url}/movie/popular?api_key=${this.api_key}`);
    return data.results.slice(0, 10);
  }

  async getMovieDetails(id) {
    const { data } = await axios.get(`${this.api_url}/movie/${id}?api_key=${this.api_key}`);
    return data;
  }
}

const newMoviesService = new MoviesService();

export { newMoviesService };