import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class FakeStoreService{
    constructor(){
        this.api_url = process.env.API_FAKESTORE_URL;
    }

    async getProducts(){
        console.log(2, this.api_url);
        const { data } = await axios.get(`${this.api_url}/products`)
        
        console.log(data);
        return data;
    }
}

const newFakeStoreService = new FakeStoreService();
export { newFakeStoreService };