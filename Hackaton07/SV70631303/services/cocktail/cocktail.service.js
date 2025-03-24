import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class CocktailService {
  constructor() {
    this.apiUrl = process.env.API_URL;
  }

  async getTop10Cocktails() {
      const response = await axios.get(this.apiUrl);

      // Verificar la respuesta
      console.log("API Full Response:", response.data);

      const { drinks } = response.data;
      console.log(drinks.slice(0,10));
      return drinks.slice(0, 10);
  }
}

export const newCocktailService = new CocktailService();
