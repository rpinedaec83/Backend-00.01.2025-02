import express from "express";
import dotenv from "dotenv";
import { newGithubService } from "./services/github/github.service.js";
import { newQodService } from "./services/quotes/quotes.service.js";
import { newNasaService } from "./services/nasa/nasa.service.js";
import { newWeatherService } from "./services/weather/weather.service.js";
import { newCurrencyService } from "./services/currency/currency.service.js";
import { newPokemonService } from "./services/pokemon/pokemon.service.js";
import { newRickAndMortyService } from "./services/rickandmorty/rickandmorty.service.js";
import { newCocktailsService } from "./services/cocktails/cocktails.service.js";
import { newStoreService } from "./services/store/store.service.js";
import { newPhotosService } from "./services/photos/photos.service.js";
import { newUserService } from "./services/user/user.service.js";
import { newMoviesService } from "./services/movies/movies.service.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

// Rutas
app.get("/hola", (req, res) => {
  res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>`);
});

app.get("/github/:username", async (req, res) => {
  const { username } = req.params;
  const result = await newGithubService.getDataUser(username);
  res.json(result);
});

app.get("/qod", async (req, res) => {
  const result = await newQodService.getQod();
  res.json(result);
});

app.get("/nasa/apod", async (req, res) => {
  const result = await newNasaService.getDataApod();
  res.json(result);
});

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const result = await newWeatherService.getWeather(city);
  res.json(result);
});

app.get("/currency", async (req, res) => {
  const result = await newCurrencyService.getCurrencyExchange();
  res.json(result);
});

app.get("/pokemon", async (req, res) => {
  const result = await newPokemonService.getPokemonList();
  res.json(result);
});

app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  const result = await newPokemonService.getPokemonDetails(name);
  res.json(result);
});

app.get("/rickandmorty", async (req, res) => {
  const result = await newRickAndMortyService.getCharacters();
  res.json(result);
});

app.get("/rickandmorty/:id", async (req, res) => {
  const { id } = req.params;
  const result = await newRickAndMortyService.getCharacterDetails(id);
  res.json(result);
});

app.get("/cocktails", async (req, res) => {
  const result = await newCocktailsService.getCocktails();
  res.json(result);
});

app.get("/store", async (req, res) => {
  const result = await newStoreService.getStoreProducts();
  res.json(result);
});

app.get("/photos", async (req, res) => {
  const { theme } = req.query;
  const result = await newPhotosService.getPhotos(theme);
  res.json(result);
});

app.get("/user", async (req, res) => {
  const result = await newUserService.getRandomUser();
  res.json(result);
});

app.get("/movies", async (req, res) => {
  const result = await newMoviesService.getTopMovies();
  res.json(result);
});

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const result = await newMoviesService.getMovieDetails(id);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});