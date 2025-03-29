require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importar rutas
const githubRoutes = require('./routes/github.routes');
const weatherRoutes = require('./routes/weather.routes');
const exchangeRoutes = require('./routes/exchange.routes');
const pokemonRoutes = require('./routes/pokemon.routes');
const rickAndMortyRoutes = require('./routes/rickAndMorty.routes');
const cocktailsRoutes = require('./routes/cocktails.routes');
const productsRoutes = require('./routes/products.routes');
const imagesRoutes = require('./routes/images.routes');
const marsRoutes = require('./routes/mars.routes');
const quotesRoutes = require('./routes/quotes.routes');
const fakeUserRoutes = require('./routes/fakeUser.routes');
const moviesRoutes = require('./routes/movies.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configurar rutas
app.use('/api/github', githubRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/exchange', exchangeRoutes);
app.use('/api/pokemon', pokemonRoutes);
app.use('/api/rickandmorty', rickAndMortyRoutes);
app.use('/api/cocktails', cocktailsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/images', imagesRoutes);
app.use('/api/mars', marsRoutes);
app.use('/api/quotes', quotesRoutes);
app.use('/api/fakeuser', fakeUserRoutes);
app.use('/api/movies', moviesRoutes);

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});