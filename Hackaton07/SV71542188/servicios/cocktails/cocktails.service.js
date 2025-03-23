import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class CocktailsService {
  constructor() {
    this.api_url = process.env.API_COCKTAILS_URL;
  }

  async getCocktails() {
    const { data } = await axios.get(`${this.api_url}/search.php?s=`);
    return data.drinks.slice(0, 10);
  }
}

const newCocktailsService = new CocktailsService();

export { newCocktailsService };