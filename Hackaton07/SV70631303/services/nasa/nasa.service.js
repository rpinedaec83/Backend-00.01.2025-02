import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class NasaService {
  constructor() {
    this.nasa_url = process.env.API_NASA_URL;
  }

  async getDataApod() {
    const { data } = await axios.get(
      `${this.nasa_url}/planetary/apod?api_key=${process.env.NASA_API_KEY}`
    );

    return data;
  }
  
}

const newNasaService = new NasaService();

export { newNasaService };