import axios from "axios";

class CurrencyService {
  constructor() {
    this.api_url = "https://api.apis.net.pe/v1";
  }

  async getCurrencyExchange() {
    const { data } = await axios.get(`${this.api_url}/tipo-cambio-sunat`);
    return data;
  }
}

const newCurrencyService = new CurrencyService();

export { newCurrencyService };