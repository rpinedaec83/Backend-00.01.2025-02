import axios from 'axios';

class CurrencyService {
  constructor() {
    this.apiUrl = 'https://api.frankfurter.app/latest';
  }

  async getExchangeRate() {
    try {
      const response = await axios.get(`${this.apiUrl}?from=USD&to=PEN`);
      return response.data.rates.PEN; // Tipo de cambio de USD a PEN
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      throw new Error('Error al obtener el tipo de cambio');
    }
  }
}

export const newCurrencyService = new CurrencyService();