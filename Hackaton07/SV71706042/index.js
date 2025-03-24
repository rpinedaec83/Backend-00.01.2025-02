
let http = require('http');
let fs = require('fs');
var url = require('url');
const axios = require('axios');




http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true);
    let query = q.query;
    let tipo = q.pathname;
    console.log(tipo);
    switch (tipo) {
        case '/github': // Consultar los datos de GitHub 
            const githubOptions = {
                method: 'GET',
                url: `https://api.github.com/users/${query.usuario}`
            };
            try {
                const response = await axios.request(githubOptions);
                console.log(response.data);
                const usuario = response.data;
                res.write("EL usuario: " + usuario.login + "  nombre: " + usuario.name + "  Locacion: "+usuario.location);
                let image = usuario.avatar_url;
                res.write(`<img src="${image}" alt="${usuario.login}"  width="100" height="100">`);
            } catch (error) {
                console.error(error);
                res.write('Error al obtener los datos de GitHub');
            }
            res.end();
            break;
        case '/clima': // Consultar el clima de una ciudad
             const options = {
                method: 'GET',
                url: 'https://weather-api99.p.rapidapi.com/weather',
                params: { city: query.ciudad },
                headers: {
                  'x-rapidapi-key': 'b2bc1038a4msh7df7e94a3654916p12edf0jsn626d546ab9df',
                  'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
                }
            };
              try {
                const response = await axios.request(options);
                temperatura = parseFloat(response.data.main.temp);
                temperatura=temperatura-273.15;
                console.log(`El clima en <b>${query.ciudad} <b> es de ${temperatura} grados centigrados`);
              } catch (error) {
                console.error(error);
              }
              res.write(`El clima en <b>${query.ciudad} <b> es de ${temperatura} grados centigrados`);
              res.end();
            break;
        case '/tipo-cambio': // Consultar el tipo de cambio del dolar
            const dolarOptions = {
                method: 'GET',
                url: 'https://api.frankfurter.app/latest',
                params: { amount : query.from , from: 'USD'}
            };
            try {
                const response = await axios.request(dolarOptions);
                console.log(response.data);
                let cambio =response.data.rates.PLN
                res.write(`El tipo de cambio de ${query.from} USD a PEN es: ${cambio}`);
            } catch (error) {
                console.error(error);
                res.write('Error al obtener el tipo de cambio');
            }
            res.end();
            break;
        case '/pokemones': // Consultar la lista de Pokemones
            try {
                let url = 'https://pokeapi.co/api/v2/pokemon'; 
                let allPokemons = [];
                let totalCount = 0;
                
                while (url) {
                    const response = await axios.get(url);
                    totalCount = response.data.count; // Total
                    allPokemons = allPokemons.concat(response.data.results.map(pokemon => pokemon.name));
                    url = response.data.next; // Avanzamos 
                }
                res.write(`<h2>Total de Pokemones: ${totalCount}</h2>`);
                res.write(`<p>${allPokemons.join(', ')}</p>`);
            } catch (error) {
                console.error(error);
                res.write('Error al obtener la lista de Pokemones');
            }
            res.end();
            break;
        case '/pokemon': // Consultar los poderes de un Pokémon 
            const nombrePokemon = query.nombre;  // Se obtiene el nombre 
            if (!nombrePokemon) {
                res.write('Debes proporcionar el nombre de un Pokémon.');
                res.end();
                break;
            }

            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
                const habilidades = response.data.abilities.map(habilidad => habilidad.ability.name).join(', ');
                res.write(`Habilidades de ${nombrePokemon}: ${habilidades}`);
            } catch (error) {
                console.error(error);
                res.write('Error al obtener los poderes del Pokémon.');
            }
            break;
        case '/rickmorty-personajes': // Consultar los  personajes de Rick and Morty
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
               const personajes = response.data.results;
        
                res.write('<h2>Principales personajes de Rick and Morty:</h2>');

                personajes.forEach(personaje => {
                    console.log(personaje.name);
                    res.write(` <div style="text-align: center;">
                            <img src="${personaje.image}">
                            <p>${personaje.name}</p>
                         </div>`);
                });
            } catch (error) {
                console.error(error);
                res.write('Error al obtener personajes de Rick and Morty');
            }
            res.end();
            break;
        case '/rickmorty-detalle': // Consultar el detalle de cada personaje de Rick and Morty
            try {
                const personaje = query.nombre; // Captura el nombre del personaje desde la URL
                if (!personaje) {
                    res.write('Debes ingresar un nombre de personaje en la URL, ejemplo: ?nombre=Rick');
                    res.end();
                    break;
                }
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${personaje}`);
                console.log(response.data.results);
                if (response.data.results.length > 0) {
                    const p = response.data.results[0]; // Primer resultado
                    res.write(`<h2>${p.name}</h2>`);
                    res.write(`<p>Especie: ${p.species}</p>`);
                    res.write(`<p>Estado: ${p.status}</p>`);
                    res.write(`<p>Origen: ${p.origin.name}</p>`);
                    res.write(`<p>Ubicacion actual: ${p.location.name}</p>`);
                    res.write(`<img src="${p.image}" alt="${p.name}">`);
                } else {
                    res.write(`No se encontró información para "${personaje}"`);
                }
            } catch (error) {
                console.error(error);
                res.write('Error al obtener detalle del personaje');
            }
            res.end();
            break;
        case '/cocteles': // Consultar el top 10 de bebidas y cocteles
           
            break;
        case '/productos': // Consultar una lista de productos de una tienda
            
            break;
        case '/fotos': // Consultar y traer fotos con un determinado tema y tamaño
            break;
        case '/citas': // Consultar citas famosas
            break;
        case '/usuario-fake': // Consultar datos ficticios de un usuario
            break;
        case '/pelis-top': // Consultar el top de películas de estreno
            break;
        case '/pelis-detalle': // Consultar el detalle de una película específica
            break;
        case '/marte': // Consultar datos específicos de Marte
            break;
        default:
            break;
    }


}).listen(3000)