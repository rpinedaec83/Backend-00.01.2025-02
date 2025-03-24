import axios from 'axios';

class RickAndMortyService {
  constructor() {
    this.apiUrl = 'https://rickandmortyapi.com/api/character'; // Endpoint para obtener los personajes
  }

  async getMainCharacters() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data.results; // Devuelve los personajes de Rick and Morty
    } catch (error) {
      console.error('Error fetching Rick and Morty characters:', error);
      throw new Error('Error al obtener los personajes de Rick and Morty');
    }
  }
}

export const newRickAndMortyService = new RickAndMortyService();