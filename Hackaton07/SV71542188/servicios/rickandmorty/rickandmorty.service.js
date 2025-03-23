import axios from "axios";

class RickAndMortyService {
  constructor() {
    this.api_url = "https://rickandmortyapi.com/api";
  }

  async getCharacters() {
    const { data } = await axios.get(`${this.api_url}/character`);
    return data.results;
  }

  async getCharacterDetails(id) {
    const { data } = await axios.get(`${this.api_url}/character/${id}`);
    return data;
  }
}

const newRickAndMortyService = new RickAndMortyService();

export { newRickAndMortyService };