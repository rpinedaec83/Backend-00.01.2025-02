import express from "express";
import dotenv from "dotenv";
import { newGithubService } from "./services/github/github.service.js";
import { newQodService } from "./services/quotes/quotes.service.js";
import { newNasaService } from "./services/nasa/nasa.service.js";
import { newCurrencyService } from "./services/currency/currency.service.js";
import { newPokemonService } from "./services/pokemon/pokemon.service.js";
import { newRickAndMortyService } from "./services/rickandmorty/rickandmorty.service.js";
import { newCocktailService } from "./services/cocktail/cocktail.service.js";
import { newStoreService } from "./services/store/store.service.js";
import { newUnsplashService } from "./services/unsplash/unsplash.service.js";
import { newUserService } from "./services/user/user.service.js";
import { newMovieService } from "./services/movie/movie.service.js";

dotenv.config();
const app = express()
const port = process.env.PORT;

app.get('/hola', (req, res) => {
  res.send('Hello World!')
});

app.get("/github/:username", async (req, res) => {
    const { username } = req.params;
  
    console.log(1, username);
    const result = await newGithubService.getDataUser(username);
    res.json(result);
  });
  app.get("/qod", async (req, res) => {
    const result = await newQodService.getQod();
    res.json(result);
  });
  app.get("/nasa/apod", async (req, res) => {
    const result = await newNasaService.getDataApod();
    //retonar un html
  
    res.json(result);
  });

  app.get("/currency", async (req, res) => {
    try {
      const result = await newCurrencyService.getExchangeRate();
      res.json({ rate: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener la lista de Pokemones
  app.get("/pokemon", async (req, res) => {
    try {
      const result = await newPokemonService.getPokemonList();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener los poderes de un Pokémon específico
  app.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;
    try {
      const result = await newPokemonService.getPokemonPowers(name);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener los personajes de Rick and Morty
  app.get("/rickandmorty", async (req, res) => {
    try {
      const result = await newRickAndMortyService.getMainCharacters();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/cocktails", async (req, res) => {
    try {
      const result = await newCocktailService.getTopCocktails();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener los productos de una tienda
  app.get("/store", async (req, res) => {
    try {
      const result = await newStoreService.getProductList();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener fotos de un tema específico
  app.get("/photos", async (req, res) => {
    const { query, perPage } = req.query;
    try {
      const result = await newUnsplashService.getPhotos(query, perPage || 10);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener un usuario ficticio
  app.get("/user", async (req, res) => {
    try {
      const result = await newUserService.getRandomUser();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta para obtener el detalle de una película
  app.get("/movie/:movieId", async (req, res) => {
    const { movieId } = req.params;
    try {
      const result = await newMovieService.getMovieDetails(movieId);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });