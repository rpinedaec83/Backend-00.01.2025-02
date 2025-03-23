console.log("Inicio de la aplicacion");
var http = require("http");
var fs = require("fs");
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
        
        switch (tipo) {

            case "/rickandmorty":
                console.log(query.personaje)
                
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://rickandmortyapi.com/api/character/${query.personaje}`,
                    headers: {}
                };
                axios.request(config)
                    .then((response) => {
                        console.log(response.data);
                        temp = response.data.name
                        especie=response.data.species
                        genero=response.data.gender
                        local=response.data.location.name
                        res.write(`El personaje es ${temp}; su especie ${especie}; el genero ${genero} y su ubicacion en ${local} `)
                        res.end()
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                
                
                break;

            default:
                break;
        }





    })
    .listen(8009);