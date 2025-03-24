import axios from 'axios';

class StoreService {
  constructor() {
    this.apiUrl = 'https://fakestoreapi.com/products';
  }

  async getProductList() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching product list:', error);
      throw new Error('Error al obtener los productos');
    }
  }
}

export const newStoreService = new StoreService();
