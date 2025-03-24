import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class WeatherSercive{
    constructor(){
        this.api_url = process.env.API_WEATHER_URL;
    }

    async getWeatherOfACity(city){
        console.log(2, this.api_url);
        const {data} = await axios.get(`${this.api_url}/weather?city_name=${city}`,
            {
                headers: {
                    'x-rapidapi-key': process.env.API_WEATHER_KEY
                  }
            }
        );

        console.log(data);
        return data;
    }
}

const newWeatherService = new WeatherSercive();

export { newWeatherService };