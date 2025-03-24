import axios from 'axios';

class CocktailService {
  constructor() {
    this.apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  }

  async getTopCocktails() {
    try {
      const response = await axios.get(`${this.apiUrl}search.php?s=`);
      return response.data.drinks.slice(0, 10); // Devuelve los primeros 10 cócteles
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      throw new Error('Error al obtener los cócteles');
    }
  }
}

export const newCocktailService = new CocktailService();
