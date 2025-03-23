import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class PhotosService {
  constructor() {
    this.api_url = process.env.API_PHOTOS_URL;
    this.api_key = process.env.UNSPLASH_API_KEY;
  }

  async getPhotos(theme) {
    const { data } = await axios.get(`${this.api_url}/photos/random?query=${theme}&client_id=${this.api_key}`);
    return data;
  }
}

const newPhotosService = new PhotosService();

export { newPhotosService };