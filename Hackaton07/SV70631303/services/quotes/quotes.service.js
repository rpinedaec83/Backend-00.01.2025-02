import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class QodService {
  constructor() {
    this.qod_url = process.env.API_QUOTES_URL;
  }

  async getQod() {
    console.log(this.qod_url)
    const { data } = await axios.get(`${this.qod_url}/bible/vod.json`, {
      headers: {
        Authorization: `Bearer ${process.env.API_QUOTES_TOKEN}`,
      },
    });

    return data;
  }
}

const newQodService = new QodService();

export { newQodService };