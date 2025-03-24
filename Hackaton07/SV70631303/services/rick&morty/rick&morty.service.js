import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class RickAndMortyService{
    constructor(){
        this.api_url = process.env.API_RICKANDMORTY_URL;
    }

    async getMainCharacters(){
        console.log(2, this.api_url);
        const { data } = await axios.get(`${this.api_url}/character/1,2,3,4,5`);

        console.log(data);
        return data;
    }

    async getCharactersList(){
        console.log(2, this.api_url);

        const {data} = await axios.get(`${this.api_url}/character`);

        console.log(data);
        return data;
    }
}

const newRickAndMortyService = new RickAndMortyService();
export { newRickAndMortyService };
