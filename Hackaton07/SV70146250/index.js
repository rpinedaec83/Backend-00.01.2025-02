console.log("Inciando APP: Uso de APIs");
var http = require("http");
var url = require("url");
const axios = require("axios");

http
  .createServer(async (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        var q = url.parse(req.url, true);
    
        let tipo = q.pathname;
        let query = q.query;
        console.log(query);
        console.log(tipo);
    
        let htmlResponse = "";
        switch (tipo) {
//#region Git User
          case "/gituser":    //Primer API
          let usuario = Object.keys(query)[0]; 
          if (!usuario) {
            res.write("<p>No se agrego el User</p>");
            res.end();
            break;
          }
          try {
            let response = await axios.get(`https://api.github.com/users/${usuario}`);
            let data = response.data;
            let fechaActualizado = data.updated_at.substring(0,10);
            let fechaCreado = data.created_at.substring(0,10);
            htmlResponse = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" width="100" height="100">
                <p>ID: ${data.id}</p>
                <p>Tipo: ${data.type}</p>
                <p>Nombre: ${data.name || "[Privado]"}</p>
                <p>Compania: ${data.company||"[Privado]"}</p>
                <p>Blog: ${data.blog||"[Privado]"}</p>
                <p>Repositorios: ${data.public_repos}</p>
                <p>Seguidores: ${data.followers}</p>
                <p>Ubicacion: ${data.location||"[Privado]"}</p>
                <p>Email: ${data.email ||"[Privado]"}</p>
                <p>X: ${data.twitter_username ||"[Privado]"}</p>
                <p>Biografia: ${data.bio}</p>
                <p>Creado: ${fechaCreado}</p>
                <p>Actualziado: ${fechaActualizado}</p>
                <p><a href="${data.html_url}" target="_blank">Perfil GitHub</a></p>
            `;
            res.write(htmlResponse);
          } catch (error) {
            res.write("<p>Error: User Invalido</p>");
          }
          res.end();
          break;
//#region Clima
          case "/clima":
            let ciudad = Object.keys(query)[0]; 
            console.log(ciudad);
            let temp = "";
            let options = {
              method: "GET",
              url: "https://weather-api99.p.rapidapi.com/weather",
              params: { city: ciudad },
              headers: {
                "x-rapidapi-key":
                  "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186",
                "x-rapidapi-host": "weather-api99.p.rapidapi.com",
              },
            };
            try {
              let response = await axios.request(options);
              console.log(response.data);
              temp = (parseFloat(response.data.main.temp) - 273.15).toFixed(1);
            } catch (error) {
              console.error(error);
            }
            res.write(`El clima en <b> ${ciudad} es ${temp} grados Celsius </b>`);
            res.end();
            break;
//#region Tipo cambio
             case "/tipocambio":
                    let moneda = query.moneda; 
                    try {
                    const response = await axios.get(`https://api.frankfurter.dev/v1/latest?base=ILS`);
                    
                    let tasa = response.data.rates[moneda.toUpperCase()];
                    
                    if (tasa) {
                      htmlResponse = `<p>1 SOL = ${tasa} ${moneda.toUpperCase()}</p>`;
                    } else {
                      htmlResponse = `<p>No soporta esa Moneda</p>`;
                    }
                  } catch (error) {
                    console.error(error);
                    htmlResponse = `<p>Tipo de Cambio Invalido</p>`;
                  }
          
                  res.write(htmlResponse);
                  res.end();
                  break;
//#region PokeLista
            /*
              case '/pokemon':
                let pokelista ={
                    method: 'get',
                    url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302',
                    headers:{}
                }
                axios.request(pokelista)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    res.write(JSON.stringify(response.data))
                    return res.end();
                })
                .catch((error) => {
                    console.log(error);
                });
              break;  
            */
//#endregion
              case "/pokemonlist": // API de Pokémon
              try {
                let response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302");
                let poketomonster = response.data.results;
                
                res.write("<h1>Lista Pokemon</h1><ul>");
                poketomonster.forEach((pokemon,num) => {
                  res.write(`<p>${num + 1}. ${pokemon.name}</p>`);
                });
                res.write("</ul>");
              } catch (error) {
                res.write("Error Datos Invalidos");
              }
              res.end();
              break;
//#region PokePoderes
            case "/pokemon":
              let poketmonster = Object.keys(query)[0]; // Captura el nombre del Pokémon
              if (!poketmonster) {
                res.write("Pokemon NO existe");
                res.end();
                return;
              }
              try {
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poketmonster}`);
                let data = response.data;
                let nombrePokemon = data.forms[0].name; 
                let movimientos = data.moves.map(mov => mov.move.name).join(", "); //Movimientos

                let htmlResponse = `
                  <h2>${nombrePokemon}</h2>
                  <p>Poderes: ${movimientos}</p>
                `;
                res.write(htmlResponse);
              } catch (error) {
                res.write("Error: Datos Invalidos");
              }
              res.end();
              break;
//#region Rick&Morty Personajes
            case "/rick&mortypersonajes":
              let id = Object.keys(query)[0]; // Obtiene el ID del personaje

              if (!id) {
                res.write("<p>Dato Invalido</p>");
                res.end();
                break;
              }

              try {
                let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                let data = response.data;

                let htmlResponse = `
                  <h1>${id}: ${data.name}</h1>
                  <p>Estado: ${data.status}</p>
                  <p>Especie: ${data.species}</p>
                  <p>Origen: ${data.origin.name}</p>
                  <p>Ubicacion: ${data.location.name}</p>
                  <img src="${data.image}" width="150">
                `;

                res.write(htmlResponse);
              } catch (error) {
                res.write("Error: Solo existen 826 personajes");
              }

              res.end();
              break;
//#region Principales Rick&Morty
              case "/principalesrick&morty":
                  try {
                  let htmlResponse = "<h1>Principales de Rick & Morty</h1><ul>";
                  
                  for (let i = 1; i <= 20; i++) {
                    let response = await axios.get(`https://rickandmortyapi.com/api/character/${i}`);
                    let data = response.data;
                    htmlResponse += `<p>${i}: ${data.name}</p>`;
                  }

                  htmlResponse += "</ul>";
                  res.write(htmlResponse);
                } catch (error) {
                  res.write("Error: Datos Ivalidos");
                }

                res.end();
                break;

//#region Leyenda
          default:          //De no encontrarse la ruta
            res.write(`<h1>Leyenda</h1>
                        <table border="1">
              <tr>
                  <th>API</th>
                  <th>Ejemplo</th>
              </tr>
              <tr>
                  <td>Git User</td>
                  <td>/gituser?rpinedaec83</td>
              </tr>
              <tr>
                  <td>Clima</td>
                  <td>/clima?Lima</td>
              </tr>
              <tr>
                  <td>Tipo Cambio</td>
                  <td>/tipocambio?moneda=USD</td>
              </tr>
              <tr>
                  <td>Lista Pokemon</td>
                  <td>/pokemonlist</td>
              </tr>
              <tr>
                  <td>Poderes Pokemon</td>
                  <td>/pokemon?ditto</td>
              </tr>
              <tr>
                  <td>Principales Rick&Morty</td>
                  <td>/principalesrick&morty</td>
              </tr>
              <tr>
                  <td>Rick&Morty Personaje</td>
                  <td>/rick&mortypersonajes?2</td>
              </tr>
              
              
          </table>`);
            res.end();
          break;

        }
    })
    .listen(8009);