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
        let temp = ""
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
                        ty=response.data.type
                        res.write(`El personaje es ${temp} ademas es ${ty} `)
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