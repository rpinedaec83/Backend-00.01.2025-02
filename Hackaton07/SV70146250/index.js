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
//#region Top10Drinks
          case "/top10bebidas":
            try{
              let htmlResponse = "<h1>TOP 10 Bebidas</h1><ul>";
              
              for (let i = 1; i <= 10; i++) {
                  let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
                  let data = response.data.drinks[0];
                  htmlResponse += `<p>Nombre: ${data.strDrink}</p></br><img src="${data.strDrinkThumb}" width="120">`;
              }
              htmlResponse += "</ul>";
              res.write(htmlResponse);
            } catch(error) {
              res.write("Error: Datos Ivalidos");
            }
            res.end();
            break;
//#region Productos
          case "/productos":
             try{
                let htmlResponse = "<h1>Lista Productos</h1><ul>";
                
                for (let i = 1; i <= 7; i++) {
                    let response = await axios.get(`https://fakestoreapi.com/products`);
                    let data = response.data;
                    htmlResponse += `<h3>Nombre: ${data[i].title}</h3><br>
                                    <li>Precio: ${data[i].price}</li><br>
                                    <li>Descripcion: ${data[i].description}</li><br>
                                    <li>Categoria: ${data[i].category}</li><br>
                                    <img src="${data[i].image}" width="200"><br>
                                    -------------------${i}------------------`;
                }
                htmlResponse += "</ul>";
                res.write(htmlResponse);
              } catch(error) {
                res.write("Error: Datos Ivalidos");
              }
              res.end();
              break;
//#region Busca Fotos
          case "/fotos":
              // Escala segun el parametro &escala=
              let escala = {
                pequeño: "small",
                mediano: "regular",
                grande: "full",
              };

              let escalaElegida = escala[query.escala] || "small"; // Defecto: small

              try {
                let response = await axios.get(
                  `https://api.unsplash.com/search/photos?page=1&query=${query.busqueda}`,
                  {
                    headers: {
                      Authorization: "Client-ID ky_N-SCm--U9lvCtuMm8FFDnBW8bXdla2TZZjNfdz1Q",
                    },
                  }
                );

                let fotos = response.data.results;
                htmlResponse = "<h1>Resultados de Busqueda</h1><ul>";
                fotos.forEach((foto) => {
                  htmlResponse += `<li><img src="${foto.urls[escalaElegida]}"></li>`;
                });
                htmlResponse += "</ul>";

                res.write(htmlResponse);
              } catch (error) {
                res.write("<p>Error al obtener imagenes</p>");
              }

              res.end();
              break;
//#region Citas
//Falta correcion
              case "/cita":
                try {
                  let response = await axios.get("https://quotes.rest/quote/random?language=es&limit=1", {
                    headers: { accept: "application/json",
                      'X-TheySaidSo-Api-Secret': '2Smar95AmRpwld0wJAEdRPOvrXaiG8UxhZiceYPW' // Autentificador
                     }  //Parece tener un problema con la autentificacion...
                  });
              
                  let quote = response.data.contents.quotes[0];
                  let htmlResponse = `<h1>Cita Famosa Aleatoria</h1><p>"${quote.quote}"</p><p>- ${quote.author}</p>`;
              
                  res.write(htmlResponse);
                } catch (error) {
                  res.write("Error: Cita NO disponible");
                }
              
                res.end();
                break;
//#region Persona Falsa
//falta valdiaciones
case '/personafalsa':
    try {
      let response = await axios.get("https://randomuser.me/api/");
      let user = response.data.results[0];
  
      let nombre = `${user.name.first} ${user.name.last}`;
      let edad = user.dob.age;
      let correo = user.email;
      let ciudad = user.location.city;
      let foto = user.picture.large;
  
      let htmlResponse = `
        <h1>Usuario 100% real [No fake]</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad} anios</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
        <img src="${foto}">
      `;
  
      res.end(htmlResponse);
    } catch (error) {
      res.end("<p>Error: No data</p>");
    }
    break;


//#region TOPEstreno 
// FALTA VALIDAR Y CORREGIR, pero funciona
case "/topestreno":
    let apiKey = "999732c297afa24cc87932a8f47cd97a"; 
    let fechaInicio = "2025-03-17"; // FALTA USAR Date() PARA ACTUALIZARLO DINAMCAMENTE
    let fechaFin = "2025-03-23";

    let configu = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${fechaInicio}&primary_release_date.lte=${fechaFin}&sort_by=vote_average.desc`,
    };

    axios
        .request(configu)
        .then((response) => {
            let peliculas = response.data.results.slice(0, 5); // Tomamos solo 5 películas
 
            let htmlResponse = "<h1>Peliculas estrenadas esta semana</h1>";

            peliculas.forEach((peli) => {
                htmlResponse += `<h2>${peli.title}</h2>`;
                htmlResponse += `<p>Fecha estreno: ${peli.release_date}</p>`;
                htmlResponse += `<p>Voto promedio: ${peli.vote_average}</p>`;
                htmlResponse += `<img height="200px" src="https://image.tmdb.org/t/p/w500${peli.poster_path}">`;
            });

            res.write(htmlResponse);
            res.end();
        })
        .catch((error) => {
            console.log(error);
         //   res.write(`<p>Error: Faltan estrenos</p>)`;
            res.end();
        });

    break;

//#region Detalle Pelicula
case "/pelis":
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://imdb236.p.rapidapi.com/imdb/autocomplete?query=${query.nombre}`,
        headers: {
            "x-rapidapi-key":
                "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186",
            "x-rapidapi-host": "imdb236.p.rapidapi.com",
        },
    };

    axios
        .request(config)
        .then((response) => {
            let arrPelis = response.data;
            let primerResultado = arrPelis[0]; // Obtener el primer resultado
            //console.log("Datos", primerResultado);
            htmlResponse += `<h2>${primerResultado.primaryTitle}</h2>`;
            htmlResponse += `<p>Fecha de estreno: ${primerResultado.releaseDate}</p>`;
            htmlResponse += `<p>Generos: ${primerResultado.genres.join(", ")}</p>`;
            htmlResponse += `<p>Para adultos: ${primerResultado.isAdult ? "Sí" : "No"}</p>`;
            htmlResponse += `<p>Duracion: ${primerResultado.runtimeMinutes} minutos</p>`;
            htmlResponse += `<img height="200px" src="${primerResultado.primaryImage}">`;

            res.write(htmlResponse);
            res.end();
        })
        .catch((error) => {
         res.write(`<p>Error: No encontrado</p>`);
          res.end();
        });

    break;
    /*
    axios
  .request(config)
  .then((response) => {
    console.log(response.data); // Para ver la estructura de los datos en la consola
  })
  .catch((error) => {
    console.log(error);
  });

  break; */

//#region Verano Marte
case "/veranomarte":
  axios
    .get("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
    .then(({ data }) => {
      let sol = Object.values(data).find((s) => s.Season === "summer");
      let temp = sol?.AT?.av;

      // Busca la proxima que tegna datos si no hay
      if (temp === undefined) {
        let otroSol = Object.values(data).find((s) => s.AT?.av !== undefined);
        temp = otroSol?.AT?.av ?? "N/A";
      }

      res.end(`<h1>Temperatura verano en Marte</h1><p>Promedio: ${temp} grados Celsicus</p>`);
    })
    .catch(() => res.end("<p>Error, no hay data</p>"));
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
              <tr>
                  <td>TOP10 Bebidas</td>
                  <td>/top10bebidas</td>
              </tr>
              <tr>
                  <td>Busca Fotos</td>
                  <td>/fotos?busqueda=clock&escala=grande</td>
              </tr>              
                            <tr>
                  <td>Citas</td>
                  <td>/cita</td>
              </tr>  
                            <tr>
                  <td>Persona Falsa</td>
                  <td>/personafalsa</td>
              </tr>  
                            <tr>
                  <td>TOP Estreno</td>
                  <td>/topestreno</td>
              </tr>  
                            <tr>
                  <td>Detalle Pelicula</td>
                  <td>/pelis?nombre=catman</td>
              </tr>  
                            <tr>
                  <td>Verano Marte</td>
                  <td>/veranomarte</td>
              </tr>  
          </table>`);
            res.end();
          break;

        }
    })
    .listen(8009);