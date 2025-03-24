import axios from 'axios';

class PokemonService {
  constructor() {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100'; // Endpoint para obtener una lista de Pokemones
  }

  async getPokemonList() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data.results; // Devuelve una lista de Pokémon
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
      throw new Error('Error al obtener la lista de pokemones');
    }
  }

  async getPokemonPowers(pokemonName) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return response.data.abilities;
    } catch (error) {
      console.error(`Error fetching powers for ${pokemonName}:`, error);
      throw new Error('Error al obtener los poderes del pokemon');
    }
  }
}

export const newPokemonService = new PokemonService();