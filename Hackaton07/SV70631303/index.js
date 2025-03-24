import express from "express";
import dotenv from "dotenv";
import { newGithubService } from "./services/github/github.service.js";
import { newQodService } from "./services/quotes/quotes.service.js";
import { newNasaService } from "./services/nasa/nasa.service.js";
import { newWeatherService } from "./services/weather/weather.service.js";
import { newConversionService } from "./services/conversion/conversion.service.js";
import { newPokemonService } from "./services/pokemon/pokemon.service.js";
import { newRickAndMortyService } from "./services/rick&morty/rick&morty.service.js";
import { newFakeStoreService } from "./services/fakestore/fakestore.service.js";
import { newRandomUserSerivce } from "./services/randomuser/randomuser.service.js";
import { newUnsplashService } from "./services/unsplash/unsplash.service.js";
import { newCocktailService } from "./services/cocktail/cocktail.service.js";
import { newOmdbService } from "./services/omdb/omdb.service.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

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

//Github
app.get("/github/:username", async (req, res) => {
  const { username } = req.params;

  console.log(1, username);
  const result = await newGithubService.getDataUser(username);
  res.json(result);
});

//Citas
app.get("/qod", async (req, res) => {
  const result = await newQodService.getQod();
  res.json(result);
});

//Nasa
app.get("/nasa/apod", async (req, res) => {
  const result = await newNasaService.getDataApod();

  res.json(result);
});

//Clima
app.get("/clima/:city_name", async (req, res) => {
  const { city_name } = req.params;

  console.log(1, city_name);
  const result = await newWeatherService.getWeatherOfACity(city_name);

  res.json(result);
});

app.get("/conversion/:currencyfrom/:currencyto/:amount", async (req, res) => {
  const { currencyfrom } = req.params;
  const { currencyto } = req.params;
  const { amount } = req.params;

  console.log(1, currencyfrom);
  console.log(1, currencyto);
  console.log(1, amount);
  const result = await newConversionService.getExchange(currencyfrom, currencyto, amount);
  res.json(result);
});

app.get("/pokemon/list", async (req, res) => {
  const result = await newPokemonService.getPokemonList();

  res.json(result);
});

app.get("/pokemon/:pokemonNameOrID", async (req, res) => {
  const { pokemonNameOrID } = req.params;

  console.log(1, pokemonNameOrID);
  const result = await newPokemonService.getPokemonPowers(pokemonNameOrID);

  res.json(result);
});

app.get("/rickandmorty/characters/main", async (req, res) => {
  const result = await newRickAndMortyService.getMainCharacters();

  res.json(result);
});

app.get("/rickandmorty/characters", async (req, res) => {
  const result = await newRickAndMortyService.getCharactersList();

  res.json(result);
});

app.get("/fakestore/products", async (req, res) => {
  const result = await newFakeStoreService.getProducts();
  res.json(result);
});

app.get("/randomuser", async (req, res) => {
  const result = await newRandomUserSerivce.getRandomUserData();

  res.json(result);
});

app.get("/unsplash/images/:query", async (req, res) => {
  const { query } = req.params;
  const images = await newUnsplashService.getImages(query);

  const html = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Imágenes de ${query}</title>
    </head>
    <body>
        <h1>Imágenes de ${query}</h1>
        <div class="image-container">
            ${images
              .map(
                (image) => `
                <img src="${image.url}" alt="${image.description}" title="${image.description}" />
            `
              )
              .join("")}
        </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.get("/cocktails/top10", async (req, res) => {
  const result = await newCocktailService.getTop10Cocktails();
  res.json(result);
});

app.get("/movies/top10", async (req, res) => {
  const query = req.query.query || "movie"; // Término de búsqueda (por defecto "movie")
  const result = await newOmdbService.searchMovies(query, 10);
  res.json(result);
});

app.get("/movies/detail/:idOrTitle", async (req, res) => {
  const { idOrTitle } = req.params;
  const result = await newOmdbService.getMovieDetails(idOrTitle);
  
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});