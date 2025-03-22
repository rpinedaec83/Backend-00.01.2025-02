import express from 'express';
import fetch from "node-fetch";

const app = express();


// Clase deGitHub
class GitHubService {
  constructor() {
    this.baseUrl = "https://api.github.com/users/";
  }

  async getUserData(username) {
    try {
      const response = await fetch(`${this.baseUrl}${username}`);
      if (!response.ok) throw new Error(`Error al obtener datos de GitHub`);

      const data = await response.json();
      return JSON.parse(JSON.stringify(data)); 
    } catch (error) {
      return { error: error.message };
    }
  }
}

// Clase Tipo de campio
class ExchangeRateService {
    constructor() {
      this.baseUrl = "https://v6.exchangerate-api.com/v6/33e58428e0c7482cd62cfca7";
    }
  
    async getExchangeRate() {
      try {
        const response = await fetch(`${this.baseUrl}/latest/USD`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error al obtener el tipo de cambio. Status: ${response.status}. Response: ${errorText}`);
        }
        
        const data = await response.json();
        if (!data.conversion_rates || !data.conversion_rates.PEN) {
          throw new Error('La respuesta no contiene el tipo de cambio esperado');
        }
        return {
          date: new Date().toISOString().split('T')[0], // Fecha actual
          rates: {
            PEN: data.conversion_rates.PEN
          }
        };
      } catch (error) {
        console.error('Error en ExchangeRateService:', error);
        return { error: error.message };
      }
    }
  }
  

// Clase clima
class WeatherService {
  constructor() {
    this.apiKey = "2301afc3756f38dddeafd474ef3e141b";
    this.baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  }

  async getWeatherData(city) {
    try {
      const response = await fetch(
        `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`
      );
      if (!response.ok) throw new Error(`Error al obtener datos del clima`);

      const data = await response.json();
      return JSON.parse(JSON.stringify(data)); 
    } catch (error) {
      return { error: error.message };
    }
  }
}

// Clase Pokémon
class PokemonService {
    constructor() {
      this.baseUrl = "https://pokeapi.co/api/v2";
    }
  
    async getPokemonList(limit = 20, offset = 0) {
      try {
        const response = await fetch(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error(`Error al obtener la lista de Pokémon`);
        
        const data = await response.json();
        
        // Obtener detalles de cada Pokémon para conseguir las imágenes
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();
            return {
              name: pokemon.name,
              image: detailData.sprites.front_default
            };
          })
        );
        
        return {
          ...data,
          results: pokemonDetails
        };
      } catch (error) {
        console.error('Error en PokemonService:', error);
        return { error: error.message };
      }
    }
    async getPokemonPowers(pokemonName) {
        try {
          const response = await fetch(`${this.baseUrl}/pokemon/${pokemonName.toLowerCase()}`);
          if (!response.ok) throw new Error(`Error al obtener datos del Pokémon ${pokemonName}`);
          
          const data = await response.json();
          return {
            name: data.name,
            image: data.sprites.front_default,
            moves: data.moves.map(move => move.move.name)
          };
        } catch (error) {
          console.error('Error en PokemonService:', error);
          return { error: error.message };
        }
      }
  }

  class RickAndMortyService {
    constructor() {
      this.baseUrl = "https://rickandmortyapi.com/api";
    }
  
    async getMainCharacters(limit = 20) {
      try {
        const response = await fetch(`${this.baseUrl}/character?page=1`);
        if (!response.ok) throw new Error(`Error al obtener personajes de Rick and Morty`);
        
        const data = await response.json();
        return data.results.slice(0, limit).map(character => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          image: character.image
        }));
      } catch (error) {
        console.error('Error en RickAndMortyService:', error);
        return { error: error.message };
      }
    }
    async getCharacterDetail(id) {
        try {
          const response = await fetch(`${this.baseUrl}/character/${id}`);
          if (!response.ok) throw new Error(`Error al obtener detalles del personaje de Rick and Morty`);
          
          const character = await response.json();
          return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            type: character.type,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
            image: character.image,
            episodes: character.episode.length
          };
        } catch (error) {
          console.error('Error en RickAndMortyService:', error);
          return { error: error.message };
        }
      }
    
  }

  class CocktailService {
    constructor() {
      this.baseUrl = "https://www.thecocktaildb.com/api/json/v1/1";
    }
  
    async getTopCocktails(limit = 10) {
      try {
        const response = await fetch(`${this.baseUrl}/filter.php?c=Cocktail`);
        if (!response.ok) throw new Error(`Error al obtener cócteles`);
        
        const data = await response.json();
        return data.drinks.slice(0, limit).map(drink => ({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb
        }));
      } catch (error) {
        console.error('Error en CocktailService:', error);
        return { error: error.message };
      }
    }
  }

  class StoreService {
    constructor() {
      this.baseUrl = "https://fakestoreapi.com";
    }
  
    async getProducts(limit = 20) {
      try {
        const response = await fetch(`${this.baseUrl}/products?limit=${limit}`);
        if (!response.ok) throw new Error(`Error al obtener productos de la tienda`);
        
        const data = await response.json();
        return data.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          image: product.image
        }));
      } catch (error) {
        console.error('Error en StoreService:', error);
        return { error: error.message };
      }
    }
  }

  class UnsplashService {
    constructor() {
      this.baseUrl = "https://api.unsplash.com";
      this.accessKey = "tVDqm3EvoK1hRVD3V26Ng6fJfuizrjzQ_U12lLjKVEk"; 
    }
  
    async getPhotos(query, count = 10, width = 400, height = 300) {
      try {
        const response = await fetch(
          `${this.baseUrl}/photos/random?query=${query}&count=${count}&client_id=${this.accessKey}`
        );
        if (!response.ok) throw new Error(`Error al obtener fotos de Unsplash`);
        
        const data = await response.json();
        return data.map(photo => ({
          id: photo.id,
          description: photo.description || photo.alt_description || "Sin descripción",
          url: photo.urls.raw + `&w=${width}&h=${height}&fit=crop`,
          photographer: photo.user.name,
          link: photo.links.html
        }));
      } catch (error) {
        console.error('Error en UnsplashService:', error);
        return { error: error.message };
      }
    }
  }

  class QuotesService {
    constructor() {
      this.baseUrl = "https://api.quotable.io";
      this.maxRetries = 3;
      this.retryDelay = 1000; // 1 segundo
    }
  
    async getQuoteOfTheDay() {
      for (let i = 0; i < this.maxRetries; i++) {
        try {
          const response = await fetch(`${this.baseUrl}/random`);
          if (!response.ok) throw new Error(`Error al obtener la cita del día`);
          
          const data = await response.json();
          return {
            text: data.content,
            author: data.author,
            tags: data.tags.join(', ')
          };
        } catch (error) {
          console.error(`Intento ${i + 1} fallido:`, error);
          if (i === this.maxRetries - 1) {
            console.error('Error en QuotesService después de múltiples intentos:', error);
            return this.getDefaultQuote();
          }
          await new Promise(resolve => setTimeout(resolve, this.retryDelay));
        }
      }
    }
  
    getDefaultQuote() {
      return {
        text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        author: "John Lennon",
        tags: "vida, planes"
      };
    }
  }

  class RandomUserService {
    constructor() {
      this.baseUrl = "https://randomuser.me/api/";
    }
  
    async getRandomUser() {
      try {
        const response = await fetch(this.baseUrl);
        if (!response.ok) throw new Error(`Error al obtener datos de usuario aleatorio`);
        
        const data = await response.json();
        const user = data.results[0];
        return {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.large,
          gender: user.gender,
          age: user.dob.age,
          country: user.location.country,
          phone: user.phone
        };
      } catch (error) {
        console.error('Error en RandomUserService:', error);
        return { error: error.message };
      }
    }
  }

  class MovieService {
    constructor() {
      this.baseUrl = "https://api.themoviedb.org/3";
      this.apiKey = "06e2e54e1d6079c52a3ad7bca8654914"; 
    }
  
    async getTopMovies(limit = 10) {
      try {
        const response = await fetch(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=es-ES`);
        if (!response.ok) throw new Error(`Error al obtener películas de estreno`);
        
        const data = await response.json();
        return data.results.slice(0, limit).map(movie => ({
          id: movie.id,
          title: movie.title,
          releaseDate: movie.release_date,
          overview: movie.overview,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }));
      } catch (error) {
        console.error('Error en MovieService:', error);
        return { error: error.message };
      }
    }
    async getMovieDetails(movieId) {
      try {
        const response = await fetch(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es-ES`);
        if (!response.ok) throw new Error(`Error al obtener detalles de la película`);
        
        const movie = await response.json();
        return {
          id: movie.id,
          title: movie.title,
          originalTitle: movie.original_title,
          releaseDate: movie.release_date,
          overview: movie.overview,
          posterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          genres: movie.genres.map(genre => genre.name),
          runtime: movie.runtime,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count
        };
      } catch (error) {
        console.error('Error en MovieService:', error);
        return { error: error.message };
      }
    }
  }

  class MarsService {
    constructor() {
      this.baseUrl = "https://api.nasa.gov/mars-photos/api/v1";
      this.apiKey = "nzTlDtAJFASBeIAdE8iX8PJyapZaOvfOUIcfgvYJ"; 
    }
  
    async getMarsData(sol = 1000) {
      try {
        const response = await fetch(`${this.baseUrl}/rovers/curiosity/photos?sol=${sol}&api_key=${this.apiKey}`);
        if (!response.ok) throw new Error(`Error al obtener datos de Marte`);
        
        const data = await response.json();
        return data.photos.slice(0, 10).map(photo => ({
          id: photo.id,
          earthDate: photo.earth_date,
          camera: photo.camera.full_name,
          imgSrc: photo.img_src,
          rover: photo.rover.name
        }));
      } catch (error) {
        console.error('Error en MarsService:', error);
        return { error: error.message };
      }
    }
  }
  

// Configurar el servidor con http
const PORT = 3000;
const gitHubService = new GitHubService();
const weatherService = new WeatherService();
const exchangeRateService = new ExchangeRateService();
const pokemonService = new PokemonService();
const rickAndMortyService = new RickAndMortyService();
const cocktailService = new CocktailService();
const storeService = new StoreService();
const unsplashService = new UnsplashService();
const quotesService = new QuotesService();
const randomUserService = new RandomUserService();
const movieService = new MovieService();
const marsService = new MarsService();




app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>API Gateway - Instrucciones by Kong</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
          h1 { color: #333; }
          ul { list-style-type: none; padding: 0; }
          li { margin-bottom: 10px; }
          code { background-color: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>API Gateway - Instrucciones de Uso</h1>
        <ol>
          <li>Para ver el perfil de GitHub de un usuario, accede a:<br>
              <code>http://localhost:${PORT}/github/NombreDeUsuario</code></li>
          <li>Para ver el clima de una ciudad específica, accede a:<br>
              <code>http://localhost:${PORT}/weather/NombreDeLaCiudad</code></li>
          <li>Para consultar el tipo de cambio del dólar en Perú:<br>
            <code>http://localhost:${PORT}/exchange-rate</code>
          </li>
          <li>Para ver la lista de Pokémon, accede a:<br>
            <code>http://localhost:${PORT}/pokemon-list</code></li>
          <li>Para ver los poderes de un Pokémon específico, accede a:<br>
            <code>http://localhost:${PORT}/pokemon-powers/NombreDelPokemon</code></li>
          <li>Para ver los personajes principales de Rick and Morty, accede a:<br>
            <code>http://localhost:${PORT}/rick-and-morty-characters</code></li>
          <li>Para ver los detalles de un personaje específico de Rick and Morty, accede a:<br>
            <code>http://localhost:${PORT}/rick-and-morty-character/ID</code></li>
          <li>Para ver los top 10 cócteles, accede a:<br>
            <code>http://localhost:${PORT}/top-cocktails</code></li>
          <li>Para ver los productos de la tienda, accede a:<br>
            <code>http://localhost:${PORT}/store-products</code></li>
          <li>Para ver fotos de Unsplash, accede a:<br>
            <code>http://localhost:${PORT}/unsplash-photos?query=TEMA&count=NUMERO&width=ANCHO&height=ALTO</code></li>
          <li>Para ver la cita del día, accede a:<br>
            <code>http://localhost:${PORT}/quote-of-the-day</code></li>
          <li>Para ver un usuario aleatorio, accede a:<br>
            <code>http://localhost:${PORT}/random-user</code></li>
          <li>Para ver las películas de estreno, accede a:<br>
            <code>http://localhost:${PORT}/top-movies</code></li>
          <li>Para ver los detalles de una película específica, accede a:<br>
            <code>http://localhost:${PORT}/movie/ID</code></li>
          <li>Para ver datos de Marte, accede a:<br>
            <code>http://localhost:${PORT}/mars-data?sol=NUMERO_DE_SOL</code></li>
        </ol>
        <p class="note">Nota: Asegúrate de usar nombres válidos para obtener resultados correctos.</p>
        <h2>Enlaces de prueba:</h2>
        <ul>
          <li><a href="/github/Dhayro27" target="_blank">Ver perfil de GitHub de Dhayro27</a></li>
          <li><a href="/weather/Pucallpa" target="_blank">Ver el clima en Pucallpa</a></li>
          <li><a href="/exchange-rate" target="_blank">Ver tipo de cambio del dólar</a></li>
          <li><a href="/pokemon-list" target="_blank">Ver lista de Pokémon</a></li>
          <li><a href="/pokemon-powers/pikachu" target="_blank">Ver poderes de Pikachu</a></li>
          <li><a href="/rick-and-morty-characters" target="_blank">Ver personajes de Rick and Morty</a></li>
          <li><a href="/top-cocktails" target="_blank">Ver top 10 cócteles</a></li>
          <li><a href="/store-products" target="_blank">Ver productos de la tienda</a></li>
          <li><a href="/unsplash-photos?query=nature&count=5" target="_blank">Ver fotos de naturaleza en Unsplash</a></li>
          <li><a href="/quote-of-the-day" target="_blank">Ver cita del día</a></li>
          <li><a href="/random-user" target="_blank">Ver usuario aleatorio</a></li>
          <li><a href="/top-movies" target="_blank">Ver películas de estreno</a></li>
          <li><a href="/mars-data" target="_blank">Ver datos de Marte</a></li>
        </ul>
      </body>
      </html>
    `);
  });
  
  app.get('/github/:username', async (req, res) => {
    const { username } = req.params;
    const data = await gitHubService.getUserData(username);
  
    if (data.error) {
      res.status(404).send(`<h1>Error: ${data.error}</h1>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Perfil de GitHub de ${data.login}</title>
        </head>
        <body>
          <h1>Perfil de GitHub de ${data.login}</h1>
          <p>Nombre: ${data.name || "No disponible"}</p>
          <p>Biografía: ${data.bio || "No disponible"}</p>
          <p>Seguidores: ${data.followers}</p>
          <p>Siguiendo: ${data.following}</p>
          <p>Repositorios públicos: ${data.public_repos}</p>
          <p><a href="${data.html_url}" target="_blank">Ver perfil en GitHub</a></p>
        </body>
        </html>
      `);
    }
  });
  
  app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    const data = await weatherService.getWeatherData(city);
  
    if (data.error) {
      res.status(404).send(`<h1>Error: ${data.error}</h1>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Clima en ${data.name}</title>
        </head>
        <body>
          <h1>Clima en ${data.name}</h1>
          <p>Temperatura: ${data.main.temp}°C</p>
          <p>Sensación térmica: ${data.main.feels_like}°C</p>
          <p>Humedad: ${data.main.humidity}%</p>
          <p>Descripción: ${data.weather[0].description}</p>
          <p>Coordenadas: ${data.coord.lat}, ${data.coord.lon}</p>
          <p><a href="https://www.google.com/maps/search/?api=1&query=${data.coord.lat},${data.coord.lon}" target="_blank">Ver ubicación en Google Maps</a></p>
        </body>
        </html>
      `);
    }
  });
  
  app.get('/exchange-rate', async (req, res) => {
    const data = await exchangeRateService.getExchangeRate();
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Tipo de Cambio USD a PEN</title>
        </head>
        <body>
          <h1>Tipo de Cambio USD a PEN</h1>
          <p>Fecha: ${data.date}</p>
          <p>1 USD = ${data.rates.PEN} PEN</p>
        </body>
        </html>
      `);
    }
  });
  
  app.get('/pokemon-list', async (req, res) => {
    const limit = parseInt(req.query.limit || '20');
    const offset = parseInt(req.query.offset || '0');
    const data = await pokemonService.getPokemonList(limit, offset);
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Lista de Pokémon</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; }
            ul { list-style-type: none; padding: 0; display: flex; flex-wrap: wrap; }
            li { margin: 10px; text-align: center; width: 120px; }
            img { width: 96px; height: 96px; }
          </style>
        </head>
        <body>
          <h1>Lista de Pokémon</h1>
          <ul>
            ${data.results.map(pokemon => `
              <li>
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <p>${pokemon.name}</p>
                <p><a href="/pokemon-powers/${pokemon.name}">Ver Poderes</a></p>
              </li>
            `).join('')}
          </ul>
          <p>Total de Pokémon: ${data.count}</p>
          ${offset > 0 ? `<a href="/pokemon-list?limit=${limit}&offset=${Math.max(0, offset - limit)}">Anterior</a>` : ''}
          ${offset + limit < data.count ? `<a href="/pokemon-list?limit=${limit}&offset=${offset + limit}">Siguiente</a>` : ''}
        </body>
        </html>
      `);
    }
  });
  
  app.get('/pokemon-powers/:pokemonName', async (req, res) => {
    const { pokemonName } = req.params;
    const data = await pokemonService.getPokemonPowers(pokemonName);
  
    if (data.error) {
      res.status(404).send(`<h1>Error: ${data.error}</h1>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Poderes de ${data.name}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
            h1 { color: #333; }
            ul { list-style-type: none; padding: 0; }
            li { margin-bottom: 5px; }
            .pokemon-info { display: flex; align-items: center; margin-bottom: 20px; }
            .pokemon-info img { margin-right: 20px; }
          </style>
        </head>
        <body>
          <h1>Poderes de ${data.name}</h1>
          <div class="pokemon-info">
            <img src="${data.image}" alt="${data.name}" width="96" height="96">
            <div>
              <h2>${data.name}</h2>
              <p>Número de movimientos: ${data.moves.length}</p>
            </div>
          </div>
          <h3>Lista de movimientos:</h3>
          <ul>
            ${data.moves.map(move => `<li>${move}</li>`).join('')}
          </ul>
        </body>
        </html>
      `);
    }
  });


app.get('/rick-and-morty-characters', async (req, res) => {
  const data = await rickAndMortyService.getMainCharacters();

  console.log('Datos de personajes de Rick and Morty:', data);

  if (data.error) {
    res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Personajes de Rick and Morty</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
          h1 { color: #333; text-align: center; }
          .character-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
          .character-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          img { width: 150px; height: 150px; object-fit: cover; border-radius: 50%; }
          .character-name { margin: 10px 0; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Personajes Principales de Rick and Morty</h1>
        <div class="character-grid">
          ${data.map(character => `
            <div class="character-card">
              <img src="${character.image}" alt="${character.name}">
              <p class="character-name">${character.name}</p>
              <p>Estado: ${character.status}</p>
              <p>Especie: ${character.species}</p>
              <a href="/rick-and-morty-character/${character.id}">Ver detalles</a>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `);
  }
});

app.get('/rick-and-morty-character/:id', async (req, res) => {
  const characterId = req.params.id;
  const data = await rickAndMortyService.getCharacterDetail(characterId);

  console.log('Detalles del personaje de Rick and Morty:', data);

  if (data.error) {
    res.status(404).send(`<h1>Error: ${data.error}</h1>`);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Detalles de ${data.name}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
          h1 { color: #333; text-align: center; }
          .character-detail { background-color: white; border-radius: 10px; padding: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          img { width: 200px; height: 200px; object-fit: cover; border-radius: 50%; display: block; margin: 0 auto 20px; }
          .info-grid { display: grid; grid-template-columns: auto 1fr; gap: 10px; }
          .info-label { font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Detalles de ${data.name}</h1>
        <div class="character-detail">
          <img src="${data.image}" alt="${data.name}">
          <div class="info-grid">
            <span class="info-label">Nombre:</span><span>${data.name}</span>
            <span class="info-label">Estado:</span><span>${data.status}</span>
            <span class="info-label">Especie:</span><span>${data.species}</span>
            <span class="info-label">Tipo:</span><span>${data.type || 'N/A'}</span>
            <span class="info-label">Género:</span><span>${data.gender}</span>
            <span class="info-label">Origen:</span><span>${data.origin}</span>
            <span class="info-label">Ubicación:</span><span>${data.location}</span>
            <span class="info-label">Episodios:</span><span>${data.episodes}</span>
          </div>
        </div>
        <p style="text-align: center;"><a href="/rick-and-morty-characters">Volver a la lista de personajes</a></p>
      </body>
      </html>
    `);
  }
});

app.get('/top-cocktails', async (req, res) => {
  const data = await cocktailService.getTopCocktails();

  console.log('Top 10 cócteles:', data);

  if (data.error) {
    res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Top 10 Cócteles</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
          h1 { color: #333; text-align: center; }
          .cocktail-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
          .cocktail-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          img { width: 150px; height: 150px; object-fit: cover; border-radius: 50%; }
          .cocktail-name { margin: 10px 0; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Top 10 Cócteles</h1>
        <div class="cocktail-grid">
          ${data.map((cocktail, index) => `
            <div class="cocktail-card">
              <img src="${cocktail.image}" alt="${cocktail.name}">
              <p class="cocktail-name">${index + 1}. ${cocktail.name}</p>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `);
  }
});

app.get('/store-products', async (req, res) => {
  const data = await storeService.getProducts();

  console.log('Productos de la tienda:', data);

  if (data.error) {
    res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
  } else {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Productos de la Tienda</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
          h1 { color: #333; text-align: center; }
          .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
          .product-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          img { width: 150px; height: 150px; object-fit: contain; }
          .product-title { margin: 10px 0; font-weight: bold; height: 3em; overflow: hidden; }
          .product-price { color: #007bff; font-weight: bold; }
          .product-category { font-style: italic; color: #6c757d; }
        </style>
      </head>
      <body>
        <h1>Productos de la Tienda</h1>
        <div class="product-grid">
          ${data.map(product => `
            <div class="product-card">
              <img src="${product.image}" alt="${product.title}">
              <p class="product-title">${product.title}</p>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              <p class="product-category">${product.category}</p>
            </div>
          `).join('')}
        </div>
      </body>
      </html>
    `);
  }
});

app.get('/unsplash-photos', async (req, res) => {
    const query = req.query.query || 'nature';
    const count = parseInt(req.query.count || '10');
    const width = parseInt(req.query.width || '400');
    const height = parseInt(req.query.height || '300');
  
    const data = await unsplashService.getPhotos(query, count, width, height);
  
    console.log('Fotos de Unsplash:', data);
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Fotos de ${query} - Unsplash</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; text-align: center; }
            .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(${width}px, 1fr)); gap: 20px; }
            .photo-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            img { width: 100%; height: auto; border-radius: 5px; }
            .photo-description { margin: 10px 0; font-style: italic; }
            .photo-credit { font-size: 0.8em; color: #666; }
          </style>
        </head>
        <body>
          <h1>Fotos de "${query}" de Unsplash</h1>
          <div class="photo-grid">
            ${data.map(photo => `
              <div class="photo-card">
                <img src="${photo.url}" alt="${photo.description}">
                <p class="photo-description">${photo.description}</p>
                <p class="photo-credit">Foto por: <a href="${photo.link}" target="_blank">${photo.photographer}</a></p>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `);
    }
  });
  
  app.get('/quote-of-the-day', async (req, res) => {
    const data = await quotesService.getQuoteOfTheDay();
  
    console.log('Cita del día:', data);
  
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Cita del Día</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
          h1 { color: #333; text-align: center; }
          .quote-container { background-color: white; border-radius: 10px; padding: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
          .quote-text { font-size: 1.2em; font-style: italic; margin-bottom: 10px; }
          .quote-author { text-align: right; font-weight: bold; }
          .quote-tags { text-align: center; color: #666; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>Cita del Día</h1>
        <div class="quote-container">
          <p class="quote-text">"${data.text}"</p>
          <p class="quote-author">- ${data.author}</p>
          <p class="quote-tags">Tags: ${data.tags}</p>
        </div>
      </body>
      </html>
    `);
  });

  app.get('/random-user', async (req, res) => {
    const data = await randomUserService.getRandomUser();
  
    console.log('Datos de usuario aleatorio:', data);
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Usuario Aleatorio</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; text-align: center; }
            .user-card { background-color: white; border-radius: 10px; padding: 20px; max-width: 400px; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            img { width: 150px; height: 150px; border-radius: 50%; display: block; margin: 0 auto 20px; }
            .user-info { display: grid; grid-template-columns: auto 1fr; gap: 10px; }
            .info-label { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>Usuario Aleatorio</h1>
          <div class="user-card">
            <img src="${data.picture}" alt="${data.name}">
            <div class="user-info">
              <span class="info-label">Nombre:</span><span>${data.name}</span>
              <span class="info-label">Email:</span><span>${data.email}</span>
              <span class="info-label">Género:</span><span>${data.gender}</span>
              <span class="info-label">Edad:</span><span>${data.age}</span>
              <span class="info-label">País:</span><span>${data.country}</span>
              <span class="info-label">Teléfono:</span><span>${data.phone}</span>
            </div>
          </div>
        </body>
        </html>
      `);
    }
  });

  app.get('/top-movies', async (req, res) => {
    const data = await movieService.getTopMovies();
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Top Películas de Estreno</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; text-align: center; }
            .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
            .movie-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            img { width: 100%; height: auto; border-radius: 5px; }
            .movie-title { margin: 10px 0; font-weight: bold; }
            .movie-date { color: #666; }
          </style>
        </head>
        <body>
          <h1>Top Películas de Estreno</h1>
          <div class="movie-grid">
            ${data.map(movie => `
              <div class="movie-card">
                <img src="${movie.posterPath}" alt="${movie.title}">
                 <a href="/movie/${movie.id}" class="movie-link"><h3 class="movie-title">${movie.title}</h3></a>
                <p class="movie-date">Estreno: ${movie.releaseDate}</p>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `);
    }
  });

  app.get('/movie/:id', async (req, res) => {
    const movieId = req.params.id;
    const data = await movieService.getMovieDetails(movieId);
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>${data.title} - Detalles de la Película</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; text-align: center; }
            .movie-details { background-color: white; border-radius: 10px; padding: 20px; max-width: 800px; margin: 0 auto; box-shadow: 0 2px 5px rgba(0,0,0,0.1); display: flex; }
            .movie-poster { flex: 0 0 300px; margin-right: 20px; }
            .movie-poster img { width: 100%; height: auto; border-radius: 5px; }
            .movie-info { flex: 1; }
            .movie-title { margin-top: 0; }
            .movie-meta { color: #666; margin-bottom: 10px; }
            .movie-overview { margin-top: 20px; }
            .movie-rating { font-weight: bold; color: #f39c12; }
          </style>
        </head>
        <body>
          <div class="movie-details">
            <div class="movie-poster">
              <img src="${data.posterPath}" alt="${data.title}">
            </div>
            <div class="movie-info">
              <h1 class="movie-title">${data.title}</h1>
              <p class="movie-meta">
                <strong>Título original:</strong> ${data.originalTitle}<br>
                <strong>Fecha de estreno:</strong> ${data.releaseDate}<br>
                <strong>Géneros:</strong> ${data.genres.join(', ')}<br>
                <strong>Duración:</strong> ${data.runtime} minutos
              </p>
              <p class="movie-rating">
                Puntuación: ${data.voteAverage}/10 (${data.voteCount} votos)
              </p>
              <div class="movie-overview">
                <h3>Sinopsis:</h3>
                <p>${data.overview}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
    }
  });

  app.get('/mars-data', async (req, res) => {
    const sol = req.query.sol || 1000;
    const data = await marsService.getMarsData(sol);
  
    if (data.error) {
      res.status(500).send(`<h1>Error: ${data.error}</h1><p>Por favor, intenta de nuevo más tarde.</p>`);
    } else {
      res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <title>Datos de Marte</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f0f0f0; }
            h1 { color: #333; text-align: center; }
            .mars-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
            .mars-card { background-color: white; border-radius: 10px; padding: 15px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
            img { width: 100%; height: auto; border-radius: 5px; }
            .mars-info { margin-top: 10px; }
          </style>
        </head>
        <body>
          <h1>Datos de Marte (Sol ${sol})</h1>
          <div class="mars-grid">
            ${data.map(photo => `
              <div class="mars-card">
                <img src="${photo.imgSrc}" alt="Foto de Marte">
                <div class="mars-info">
                  <p><strong>ID de la foto:</strong> ${photo.id}</p>
                  <p><strong>Fecha terrestre:</strong> ${photo.earthDate}</p>
                  <p><strong>Cámara:</strong> ${photo.camera}</p>
                  <p><strong>Rover:</strong> ${photo.rover}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </body>
        </html>
      `);
    }
  });
  
  app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
  });
  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`API Gateway corriendo en http://localhost:${PORT}`);
  });