import axios from 'axios';

class UserService {
  constructor() {
    this.apiUrl = 'https://randomuser.me/api/';
  }

  async getRandomUser() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data.results[0]; // Devuelve un usuario aleatorio
    } catch (error) {
      console.error('Error fetching random user:', error);
      throw new Error('Error al obtener datos del usuario');
    }
  }
}

export const newUserService = new UserService();
