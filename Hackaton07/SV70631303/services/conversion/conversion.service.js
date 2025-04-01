import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class ConversionService{
    constructor(){
        this.api_url = process.env.API_CONVERSION_URL;
    }

    async getExchange(currencyFrom, currencyTo, amount){
        console.log(2, this.api_url);
        const {data} = await axios.get(`${this.api_url}?from=${currencyFrom}&to=${currencyTo}&amount=${amount}`,
            {
                headers: {
                    'x-rapidapi-key': process.env.API_CONVERSION_KEY
                  }
            }
        );

        console.log(data);
        return data;
    }
}

const newConversionService = new ConversionService();
export { newConversionService };