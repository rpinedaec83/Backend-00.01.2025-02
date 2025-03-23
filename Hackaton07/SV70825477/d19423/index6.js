//•	Consultar datos ficticios de un usuario 

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

            case "/datoficticio":
                //let b=""
                let a=""
                console.log(query.personaje)
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://randomuser.me/api/',
                    headers: {}
                };

                axios.request(config)
                    .then((response) => {
                        console.log(response.data);
                        a=response.data.results[0].name
                        b=(JSON.stringify(a))
                        location=response.data.results[0].location.street
                        c=(JSON.stringify(location))
                        location2=response.data.results[0].location.timezone
                        d=(JSON.stringify(location2))
                        email=response.data.results[0].email  
                        cell=response.data.results[0].cell
                        
                        res.write(`<li> Datos personales: ${b}</li> <li> Direccion: ${c}</li> <li> Zona horaria: ${d}</li> <li> Email: ${email} </li> <li> Telefono: ${cell}</li>`)
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