import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class PokemonService{
    constructor(){
        this.api_url = process.env.API_POKEMON_URL;
    }

    async getPokemonList(){
        console.log(2, this.api_url);
        
        const {data} = await axios.get(`${this.api_url}/pokemon?limit=-1`);

        console.log(data);
        return data;
    }

    async getPokemonPowers(pokemonNameOrID){
        console.log(2, this.api_url);
        
        const {data} = await axios.get(`${this.api_url}/pokemon/${pokemonNameOrID}`);

        console.log(data);
        return data;
    }
}

const newPokemonService = new PokemonService();
export { newPokemonService };