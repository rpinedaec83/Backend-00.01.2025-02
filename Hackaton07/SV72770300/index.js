console.log('Inicio de la aplicación');
const http = require("http");
const url = require('url');
const axios = require('axios');
const dt = require('./modulefecha');

http.createServer(async (req, res) => {
    /* res.writeHead(200, {'Content-Type':'text/html'});
        res.write(dt.myDateTime())
        res.end('Hello World') */
    res.writeHead(200, { 'Content-Type': 'text/html' })
    /* res.write('Hello Wolrd'); */
    /* res.write(req.url) */
    /* var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; */
    var q = url.parse(req.url, true);
    let tipo = q.pathname;
    let query = q.query;
    console.log(tipo);
    console.log(query);

    let htmlResponse = "";

    switch (tipo) {

        // 01) Consultar los datos de GitHub de un usuario especifico
        // http://localhost:8050/git-hub-user?user=rpinedaec83

        case `/git-hub-user`:
            console.log(query.user);

            let configUserGitHub = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.github.com/users/${query.user}`,
                headers: {
                    'Cookie': '_octo=GH1.1.1641837757.1742599833; logged_in=no'
                }
            };

            await axios.request(configUserGitHub)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    htmlResponse += `<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1>Usuario GitHub: ${response.data.login}</h1>
                    <img height="200px" src="${response.data.avatar_url}"> <br> <br>
                    <a href="${response.data.html_url}" target="_blank" style="background-color: blue; color: white; padding: 15px 10px; border-radius: 5px; border: none;">Visitar perfil</a>
                    <p>Nombre: <strong>${response.data.name}</strong>
                    <p>Perfil: <strong>${response.data.bio}</strong></p>
                    <p>Blog: <strong>${response.data.blog}</strong></p>
                    <p>Ubicación: <strong>${response.data.location}</strong></p>`;
                    res.write(htmlResponse);
                    res.end();
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al obtener datos de GitHub');
                });

            break;


        // 02) Consultar el Clima de una ciudad o ubicacion especifica
        // http://localhost:8050/clima?ciudad=paris

        case '/clima':
            console.log(query.ciudad);
            let temperatura = "";
            let ciudad = "";
            const options = {
                method: 'GET',
                url: 'https://weather-api99.p.rapidapi.com/weather',
                params: { city: `${query.ciudad}` },
                headers: {
                    'x-rapidapi-key': '8d9ec5752fmshd7903545a2bf2f2p193e38jsne03a1c16e254',
                    'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                ciudad = query.ciudad.charAt(0).toUpperCase() + query.ciudad.slice(1);
                temperatura = parseFloat(response.data.main.temp - 273.15).toFixed(2);
                htmlResponse += `<meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                <h1>Ciudad: ${ciudad}</h1>
                <p>Clima: <strong>${temperatura}</strong> °C</p>`;
                res.write(htmlResponse);
                res.end();

            } catch (error) {
                console.error(error);
                res.end('Error al obtener los datos del clima')
            }

            break;


        // 03) Consultar el tipo de cambio del dolar en Peru  
        // http://localhost:8050/tipo-de-cambio?base=USD&moneda=PEN

        case '/tipo-de-cambio':
            console.log(query.base);
            console.log(query.moneda);
            let baseMoneda = query.base;
            let moneda = query.moneda;

            const configMoneda = {
                method: 'GET',
                url: 'https://exchange-rate-api1.p.rapidapi.com/latest',
                params: { base: `${baseMoneda}` },
                headers: {
                    'x-rapidapi-key': '8d9ec5752fmshd7903545a2bf2f2p193e38jsne03a1c16e254',
                    'x-rapidapi-host': 'exchange-rate-api1.p.rapidapi.com'
                }
            };

            await axios.request(configMoneda)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    htmlResponse += `<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1>Tipo de Cambio</h1>
                    <p>Base: <strong>${baseMoneda}</strong></p>
                    <p>Moneda <strong>${moneda}</strong>: <strong>${response.data.rates[moneda]}</strong></p>`;
                    res.write(htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al obtener el tipo de cambio')
                });
            break;


        // 04) Consultar la lista de Pokemones actual
        // http://localhost:8050/lista-pokemones?nombre=pokemon 

        case `/lista-pokemones`:
            console.log(query.pokemon);
            let configPokemon = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://pokeapi.co/api/v2/${query.nombre.toLowerCase()}`,
                headers: {}
            };

            axios.request(configPokemon)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    let arrayPokemones = response.data.results;
                    const newArrayPokemon = arrayPokemones.map(pokemon => pokemon.name);

                    newArrayPokemon.forEach(pokemon => {
                        htmlResponse += `<ul><li><strong>${pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</strong></li></ul>
                        `;

                    });
                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="color: white; background: red; padding: 15px 30px";>Lista de Pokemones Actuales</h1>` + htmlResponse)
                    res.end()

                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al obtener la lista de pokemones actuales')
                });
            break;


        // 05) Consultar los poderes de un pokemon especifico
        // http://localhost:8050/poderes-pokemon?nombre=raticate

        case `/poderes-pokemon`:
            console.log(query.nombre);

            let configPokemon2 = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://pokeapi.co/api/v2/pokemon/${query.nombre.toLowerCase()}`,
                headers: {}
            };
            axios.request(configPokemon2)
                .then((response) => {
                    JSON.stringify(response.data);
                    let arrayPokemones = response.data.abilities;
                    const newArrayPoderesPokemon = arrayPokemones.map(pokemon => pokemon.ability.name);
                    console.log(arrayPokemones)
                    console.log(newArrayPoderesPokemon)
                    newArrayPoderesPokemon.forEach(poderes => {
                        htmlResponse += `<ul><li><strong>${poderes.charAt(0).toUpperCase() + poderes.slice(1)}</strong></li></ul>
                        `;

                    });
                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="color: white; background: blue; padding: 15px 30px";>Poderes del pokemón ${query.nombre.charAt(0).toUpperCase() + query.nombre.slice(1)}</h1>` + htmlResponse)
                    res.end()

                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al obtener los poderes del pokemón')

                });

            break;


        // 06) Consultar los principales personajes de Rick and Morty  
        // http://localhost:8050/rick-and-morty-personajes-principales

        case '/rick-and-morty-personajes-principales':

            let configPersonajesPrincipales = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://rickandmortyapi.com/api/character',
                headers: {}
            };
            await axios.request(configPersonajesPrincipales)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayPersonajes = response.data.results;
                    const newArrayPersonajes = arrayPersonajes.map(personaje => personaje);
                    newArrayPersonajes.forEach(personajes => {
                        console.log(personajes)

                        if (personajes.id < 6) {
                            let episodios = personajes.episode.map(episodios => `${episodios} <br>`);

                            htmlResponse += `
                    <p>Nombre: <strong>${personajes.name}</strong></p>
                    <ul>
                    <li>Identificación: <strong>${personajes.id}</strong></li>
                    <li>Estado: <strong>${personajes.status}</strong></li>
                    <li>Especie: <strong>${personajes.species}</strong></li>
                    <li>Episodios: <strong>${episodios.length}</strong></li>
                    <li>Ubicación: <strong>${personajes.location.name}</strong></li>
                    <li>Imágen: <br> <img src="${personajes.image}" height="100px"></li>
                    <li>Creado: <strong>${personajes.created}</strong></li>
                    </ul>
                `;
                        }
                    });
                    res.write(`<meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
            <h1>Personajes Principales de Rick and Morty</h1>`+ htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar personajes principales de Rick and Morty')
                });

            break;


        // 07) Consultar el detalle de cada personaje de Rick and Morty 
        // http://localhost:8050/api/character/rickandmortydetalle

        case '/api/character/rickandmortydetalle':

            let configRcikMorty = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://rickandmortyapi.com/api/character',
                headers: {}
            };

            await axios.request(configRcikMorty)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayPersonajes = response.data.results;
                    const newArrayPersonajes = arrayPersonajes.map(personaje => personaje);
                    newArrayPersonajes.forEach(personajes => {
                        console.log(personajes)

                        let episodios = personajes.episode.map(episodios => `${episodios} <br>`);

                        htmlResponse += `
                            <p>Nombre: <strong>${personajes.name}</strong></p>
                            <ul>
                            <li>Identificación: <strong>${personajes.id}</strong></li>
                            <li>Estado: <strong>${personajes.status}</strong></li>
                            <li>Especie: <strong>${personajes.species}</strong></li>
                            <li>Episodios: <strong>${episodios.length}</strong></li>
                            <li>Ubicación: <strong>${personajes.location.name}</strong></li>
                            <li>Imágen: <br> <img src="${personajes.image}" height="100px"></li>
                            <li>Creado: <strong>${personajes.created}</strong></li>
                            </ul>
                        `;

                    });
                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1>Detalle de los personajes de Rick and Morty</h1>`+ htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar detalles de los personajes de Rick and Morty')
                });
            break;


        // 08) Consultar el top 10 de bebidas y cocteles 
        // http://localhost:8050/cocteles-bebidas-categoria?nombre=Ordinary_Drink
        // http://localhost:8050/cocteles-bebidas-categoria?nombre=Cocktail


        case '/cocteles-bebidas-categoria':
            console.log(query.nombre)

            let configCoctelesBebidas = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${query.nombre}`,
                headers: {}
            };

            await axios.request(configCoctelesBebidas)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayBebidasCocteles = response.data.drinks;
                    const newArrayBebidasCocteles = arrayBebidasCocteles.map(bebida => bebida);
                    let cont = 0;
                    newArrayBebidasCocteles.forEach(coctel => {

                        if (coctel && cont < 10) {

                            htmlResponse += `
                                <p>Nombre: <strong>${coctel.strDrink}</strong></p>
                                <li>Identificación: <strong>${coctel.idDrink}</strong></li>
                                <li>Imágen: <br> <img src="${coctel.strDrinkThumb}" height="100px"></li>
                                `;
                            cont++;
                        }

                    });
                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1>10 mejores bebidas de la categoría ${query.nombre}</h1>` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar cócteles y/o bebidas')
                });
            break;


        // 09) Consultar un listado de productos de una tienda
        // http://localhost:8050/lista-productos-tienda

        case '/lista-productos-tienda':

            let configProductosTienda = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://fakestoreapi.com/products',
                headers: {}
            };

            axios.request(configProductosTienda)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayListaProductos = response.data;
                    const newArrayListaProductos = arrayListaProductos.map(producto => producto);
                    console.log(newArrayListaProductos)

                    newArrayListaProductos.forEach(producto => {

                        htmlResponse += `
                        <p style="background: black; color: white; padding: 10px 20px">Nombre Producto: <strong>${producto.title}</strong></p>
                        <ul>
                        <li>Identificación: <strong>${producto.id}</strong></li>
                        <li>Precio (S/.): <strong>${producto.price}</strong></li>
                        <li>Descripción: <strong>${producto.description}</strong></li>
                        <li>Categoría: <strong>${producto.category}</strong></li>
                        <li>Calificación: Tasa<strong>(${producto.rating.rate})</strong> Cuenta<strong>(${producto.rating.count})</strong></li>
                        <img src="${producto.image}" height="100px" style="border: 5px solid red; border-radius: 5px; padding: 10px 15px; margin: 25px 0px 20px 0px;">
                        </ul>
                        `;

                    });
                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="background: red; color: white; padding: 10px 20px">Lista de Productos de la Tienda</h1>` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar una lista de productos de la tienda')
                });
            break;


        // 10) Consultar y traer Fotografias con un determinado tema y tamaño
        // http://localhost:8050/fotografias?nombre=javascript&w=1920&h=1080

        case '/fotografias':
            console.log(query.nombre)
            console.log(query.w)
            console.log(query.h)
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.unsplash.com/search/photos?query=${query.nombre} No especificado&w=${query.w}&${query.h}=480`,
                headers: {
                    'Authorization': 'Client-ID -liDcg6w9WyqYdpZCsDQNW_2YYNOKZmuzBvW-WByDYs'
                }
            };

            await axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayFotografias = JSON.parse(JSON.stringify(response.data.results));
                    // const newArrayFotografias = arrayFotografias.map(fotografia => fotografia);
                    // console.log(newArrayFotografias)
                    console.log(arrayFotografias)

                    arrayFotografias.forEach(photo => {
                        htmlResponse += `
                        <p style="background: rgb(218, 218, 218); color: black; padding: 10px 20px">Autor: <strong>${photo.user.name}</strong></p>
                        <ul>
                        <li>Identificación: <strong>${photo.user.id}</strong></li>
                        <li>Biografía: <strong>${photo.user.bio}</strong></li>
                        <li>Ubicación: <strong>${photo.user.location}</strong></li>
                        <li>Likes: <strong>${photo.likes}</strong></li>
                        <li>Descripción: <strong>${photo.alt_description}</strong></li>
                        </ul>
                        <img src="${photo.urls.regular}" style="margin: 25px 0px 20px 0px;">`
                    });

                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="background: black; color: white; padding: 10px 20px">Lista de Fotografías</h1>
                    <h3>Temática: ${query.nombre ? query.nombre.charAt(0).toUpperCase() + query.nombre.slice(1) : "No especificado"}</h3>
                    <h3>Largo: ${query.w ? query.w + "px" : "No especificado"} | Ancho: ${query.h ? query.h + "px" : "No especificado"}</h3>` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar fotografías de la temática que está buscando')
                });
            break;


        // 11) Consultar citas famosas   
        /*API Tokens: 
            HNzUP5WhUnYLLUPaLjrwvz4ofDhGoeeQbpw49JfI6cc99b3e
            fFJONKUDo0IGUo29KO62WWZHnykABrkWtl2BhfC1541a08f6
            GhSBEM6f5vtT5aiyjoJwytwoasoaY7hOITA6z7VOcbbcb353
            VaNtK0pXcQ0rhgNLU3kRRDpw8bfJPXzto91JO6wMcd322228
        */
        // http://localhost:8050/cita

        case '/cita':
            let configCita = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'http://quotes.rest/bible/vod.json',
                headers: {
                    'X-Theysaidso-Api-Secret': 'HNzUP5WhUnYLLUPaLjrwvz4ofDhGoeeQbpw49JfI6cc99b3e',
                    'Cookie': 'XSRF-TOKEN=eyJpdiI6IjY4cFVJZ2ZMQUVTMndLb2p4elV6Q1E9PSIsInZhbHVlIjoiYm5aKzd0RFZscm5Dak00cGkyVVZNRldYL3NHVGhGSVgwSW1OK3BpMEZDNHY2bjVubER4YlFYZ0NLcTMzZlA2TkM4ejdJUXA2cHpwcG1GTXRLamhOMVgzYlBTenNLaG9vQ2pvSFBySkk5NTdUWkY4bWJrVENPTUIrK0c5YjFQL3giLCJtYWMiOiJiMzVjZTk5NmZlMTZjOWQyNjZjZGYzZTk5M2E1ZGIyYTFhYzAxZWIzZDBhZmIyNTZlZTU2ODY4ZTQzYjU2OTA5IiwidGFnIjoiIn0%3D; they_said_so_session=eyJpdiI6IlI1Y01TT0k5dTlUMmlRRFYwZzc0dnc9PSIsInZhbHVlIjoiQ0hxQ1dkZE9JRzk5T3B0bGYvaWw2a1NYcWtlVW9Sa2FSSnl3MGtDbHdiZ1hFbVhTV1Vzdm41dEtsSm5vcS9ONWl1SVFYWDBGZll2N1hUN2VtKzZsNk1BczFyL2ZPaGNQN2Q0anRWZkFQWGYwUDhrckFjUlhDeEZFSGY1SU9pMXQiLCJtYWMiOiIzZWUxMjc4MWU4Yzg0YjA0NmNiMzdiYzE1NTgwYjMxY2UzYWY2MTg5NmFhOGMyMmExZjc1NTY4ZDVmN2IxYWJmIiwidGFnIjoiIn0%3D'
                }
            };

            axios.request(configCita)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    htmlResponse += `
                    <p>Testamento: <strong>${response.data.contents.testament}</strong></p>
                    <p>Libro: <strong>${response.data.contents.book}</strong></p>
                    <p>Capítulo: <strong>${response.data.contents.bookid}</strong></p>
                    <p>Verísculo: <strong>${response.data.contents.chapter}</strong></p>
                    <p>Cita: <strong>${response.data.contents.verse}</strong></p>
                    <p>Título: <strong>${response.data.contents.title}</strong></p>
                    <p>Categoría: <strong>${response.data.contents.category}</strong></p>
                    <p>Fecha: <strong>${response.data.contents.date}</strong></p>`

                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="background: black; color: white; padding: 10px 20px">Cita del Día</h1>
                    ` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    console.log('Error al buscar una cita')
                });
            break;


        // 12) Consultar datos ficticios de un usuario
        // http://localhost:8050/usuario-aleatorio-git-hub


        case '/usuario-aleatorio-git-hub':
            let configUserRandom = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://randomuser.me/api/',
                headers: {}
            };

            axios.request(configUserRandom)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayUsersGitHub = JSON.parse(JSON.stringify(response.data.results));

                    arrayUsersGitHub.forEach(usuario => {
                        htmlResponse += `
                        <p style="background: black; color: white; padding: 10px 20px">Autor: <strong>${usuario.name.first} ${usuario.name.last}</strong></p>
                        <img src="${usuario.picture.medium}" style="margin: 5px 0px 10px 0px; height:200px">
                        <hr>
                        <ul>
                            <li>Género: <strong>${usuario.gender.charAt(0).toUpperCase() + usuario.gender.slice(1)}</strong></li>
                            <li>Ubicación: <strong>${usuario.location.street.name}, </strong><strong>${usuario.location.street.number}</strong></li>
                            <li>Ciudad: <strong>${usuario.location.city}</strong></li>
                            <li>Estado: <strong>${usuario.location.state}</strong></li>
                            <li>País: <strong>${usuario.location.country}</strong></li>
                            <li>Código Postal: <strong>${usuario.location.postcode}</strong></li>
                            <li>Correo Electrónico: <strong>${usuario.email}</strong></li>
                            <li>Nombre Usuario: <strong>${usuario.login.username}</strong></li>
                            <li>Contraseña: <strong>${usuario.login.password}</strong></li>
                            <li>Fecha Nacimiento: <strong>${usuario.dob.date}</strong> | Edad Actual: <strong>${usuario.dob.age}</strong></li>
                            <li>Fecha Registrada: <strong>${usuario.registered.date}</strong> | Años Usuario(a) Activa: <strong>${usuario.registered.age}</strong></li>
                            <li>Teléfono: <strong>${usuario.phone}</strong> | Celular: <strong>${usuario.cell}</strong></li>
                        </ul>
                        <hr>
                        `
                    });

                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                    *{
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    }

                    ul li{
                        margin: 0px 20px;
                        padding: 5px;
                    }

                    </style>
                    <h1 style="background: rgb(0, 153, 255); color: white; padding: 10px 20px">Usuarios de GitHub Aleatorios</h1>
                    ` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar un usuario de GitHub aleatoriamente')
                });
            break;


        // 13) Consultar el top de peliculas de estreno
        // http://localhost:8050/peliculas-top?categoria=popular

        case '/peliculas-top':
            console.log(query.categoria)
            let configPeliculasEstreno = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.themoviedb.org/3/movie/${query.categoria}?`,
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODdhZmExMDhkMDdmNmZmMmI3ZTU4NDQ2MDY3NTM3NyIsIm5iZiI6MTc0Mjc3MTU2Ny45MDYsInN1YiI6IjY3ZTA5NTZmMjEwZmE4MGEwZjRkYjQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gS2m9sYdf1H1LyB6tb91oIzGunoI8RJC1o94nk_mYpg'
                }
            };

            await axios.request(configPeliculasEstreno)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayPeliculasPopulares = JSON.parse(JSON.stringify(response.data.results));
                    console.log(arrayPeliculasPopulares);

                    arrayPeliculasPopulares.forEach(pelicula => {
                        htmlResponse += `
                        <p style="background: rgb(218, 218, 218); color: black; padding: 10px 20px">Título Película: <strong>${pelicula.title}</strong></p>
                        <img src="${'https://image.tmdb.org/t/p/original/' + pelicula.poster_path}" style="margin: 5px 0px 10px 0px; height:200px">
                        <hr>
                        <ul>
                            <li>Identificación: <strong>${pelicula.id}</strong> | Idioma Original: <strong>${pelicula.original_language}</strong></li>
                            <li>Descripción General: <strong>${pelicula.overview}</strong></li>
                            <li>Popularidad: <strong>${pelicula.popularity}</strong></li>
                            <li>Fecha Lanzamiento: <strong>${pelicula.release_date}</strong></li>
                        </ul>
                        <hr>
                        `
                    });

                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="background: red; color: white; padding: 10px 20px">Top de Películas en Estreno y más Populares</h1>
                    ` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar películas populares en estreno')
                });
            break;


        // 14) Consultar el detalle de una pelicula especifica
        // http://localhost:8050/pelicula?nombre=jurassic+world

        case '/pelicula':

            console.log(query.nombre);
            let configPelicula = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.themoviedb.org/3/search/movie?query=${query.nombre}`,
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODdhZmExMDhkMDdmNmZmMmI3ZTU4NDQ2MDY3NTM3NyIsIm5iZiI6MTc0Mjc3MTU2Ny45MDYsInN1YiI6IjY3ZTA5NTZmMjEwZmE4MGEwZjRkYjQ1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gS2m9sYdf1H1LyB6tb91oIzGunoI8RJC1o94nk_mYpg'
                }
            };

            await axios.request(configPelicula)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayPelicula = JSON.parse(JSON.stringify(response.data.results));
                    console.log(arrayPelicula);

                    arrayPelicula.forEach(pelicula => {
                        htmlResponse += `
                        <p style="background: rgb(218, 218, 218); color: black; padding: 10px 20px">Título Película: <strong>${pelicula.original_title}</strong></p>
                        <p>${pelicula.poster_path ? `<img src="https://image.tmdb.org/t/p/original/${pelicula.poster_path}" style="margin: 5px 0px 10px 0px; height:200px">` : "Imágen no encontrada"}</p>
                        <hr style="background: rgb(4, 43, 70); height: 5px; border: none; border-radius: 5px">
                        <ul>
                            <li>Identificación: <strong>${pelicula.id}</strong> | Idioma Original: <strong>${pelicula.original_language}</strong></li>
                            <li>Descripción General: <strong>${pelicula.overview}</strong></li>
                            <li>Popularidad: <strong>${pelicula.popularity}</strong></li>
                            <li>Fecha Lanzamiento: <strong>${pelicula.release_date}</strong></li>
                        </ul>
                        <hr style="background: rgb(4, 43, 70); height: 5px; border: none; border-radius: 5px">
                        `
                    });

                    res.write(`<meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
                    <h1 style="background: rgb(4, 43, 70); color: white; padding: 10px 20px">Película(as) (${query.nombre.charAt(0).toUpperCase() + query.nombre.slice(1)})</h1>
                    ` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log(error);
                    res.end('Error al buscar la película')
                });
            break;


        // 15) Consultar datos especificos de Marte
        // http://localhost:8050/nasa-planeta-marte

        case '/nasa-planeta-marte':

            let configMarte = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=eD4uzXByWseciHgDItpSBMCHOgAajMDndACGwfjP',
                headers: {}
            };

            axios.request(configMarte)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let arrayDatosMarte = JSON.parse(JSON.stringify(response.data.photos));
                    console.log(arrayDatosMarte);
                    arrayDatosMarte.forEach(photosMarte => {
                        htmlResponse += `
                <p style="background: rgb(218, 218, 218); color: black; padding: 10px 20px">Cámara: <strong>${photosMarte.camera.name}</strong> | Nombre Completo: <strong>${photosMarte.camera.full_name}</strong></p>
                    <ul>
                        <li>Identificación Foto: <strong>${photosMarte.id}</strong> | Sol: <strong>${photosMarte.sol}</strong></li>
                        <li>Vehículo Robótico: <strong>${photosMarte.rover.name}</strong> | Estado: <strong>${photosMarte.rover.status.charAt(0).toUpperCase() + photosMarte.rover.status.slice(1)}</strong></li>
                        <li>Fecha Lanzamiento: <strong>${photosMarte.rover.launch_date}</strong> | Fecha Aterrizaje: <strong>${photosMarte.rover.landing_date}</strong></li>
                    </ul>
                
                <img src="${photosMarte.img_src}" style="margin: 5px 0px 10px 0px; height:200px"">

                    <hr style="background: rgb(4, 43, 70); height: 5px; border: none; border-radius: 5px">
                `
                    });

                    res.write(`<meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>*{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style>
            <h1 style="background: rgb(4, 43, 70); color: white; padding: 10px 20px">Datos del Planeta Marte</h1>
            ` + htmlResponse)
                    res.end()
                })
                .catch((error) => {
                    console.log('Error al buscar datos del planeta Marte');
                });
            break;

        default:
            res.end('Ruta no encontrada por el servidor');
            break;
    }

}).listen(8050);

