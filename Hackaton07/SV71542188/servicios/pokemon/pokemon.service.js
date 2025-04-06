import axios from "axios";

class PokemonService {
  constructor() {
    this.api_url = "https://pokeapi.co/api/v2";
  }

  async getPokemonList() {
    const { data } = await axios.get(`${this.api_url}/pokemon?limit=100`);
    return data.results;
  }

  async getPokemonDetails(name) {
    const { data } = await axios.get(`${this.api_url}/pokemon/${name}`);
    return data;
  }
}

const newPokemonService = new PokemonService();

export { newPokemonService };