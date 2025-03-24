import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class RandomUserService{
    constructor(){
        this.api_url = process.env.API_RANDOMUSER_URL;
    }

    async getRandomUserData(){
        console.log(2, this.api_url);

        const {data} = await axios.get(`${this.api_url}/api`);

        console.log(data);
        return data;
    }
}

const newRandomUserSerivce = new RandomUserService();
export { newRandomUserSerivce };