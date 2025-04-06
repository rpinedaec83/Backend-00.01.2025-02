import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class WeatherService {
  constructor() {
    this.api_url = process.env.API_WEATHER_URL;
    this.api_key = process.env.WEATHER_API_KEY;
  }

  async getWeather(city) {
    const { data } = await axios.get(`${this.api_url}/weather?q=${city}&appid=${this.api_key}`);
    return data;
  }
}

const newWeatherService = new WeatherService();

export { newWeatherService };