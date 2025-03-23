import axios from "axios";

class UserService {
  constructor() {
    this.api_url = "https://randomuser.me/api";
  }

  async getRandomUser() {
    const { data } = await axios.get(this.api_url);
    return data.results[0];
  }
}

const newUserService = new UserService();

export { newUserService };