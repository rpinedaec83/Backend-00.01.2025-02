import axios from "axios";

class StoreService {
  constructor() {
    this.api_url = "https://fakestoreapi.com";
  }

  async getStoreProducts() {
    const { data } = await axios.get(`${this.api_url}/products`);
    return data;
  }
}

const newStoreService = new StoreService();

export { newStoreService };