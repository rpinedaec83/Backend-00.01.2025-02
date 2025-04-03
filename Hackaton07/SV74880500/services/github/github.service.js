import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class GithubService {
    constructor() {
        this.api_url = process.env.API_GITHUB_URL;
    }

    async getDataUser(username) {
        console.log(2,this.api_url);
        const {data} = await axios.get(`${this.api_url}/users/${username}`);

        console.log(3,data);
        return data;
//peticicon al servidor de github
    }
}

const newGithubService = new GithubService();
export {newGithubService};