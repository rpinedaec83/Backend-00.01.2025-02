import axios from 'axios';

class UnsplashService {
  constructor() {
    this.apiUrl = 'https://api.unsplash.com/photos';
    this.accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Sustituir con tu clave de acceso
  }

  async getPhotos(query, perPage = 10) {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          query,
          per_page: perPage,
          client_id: this.accessKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw new Error('Error al obtener las fotos');
    }
  }
}

export const newUnsplashService = new UnsplashService();
