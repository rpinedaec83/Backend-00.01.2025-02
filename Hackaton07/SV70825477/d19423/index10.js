//•	Consultar el top 10 de bebidas y cocteles 
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

            case "/cocteles":
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://the-cocktail-db3.p.rapidapi.com/',
                    headers: {
                        'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3',
                        'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
                    }
                };


                axios.request(config)
                    .then((response) => {
                        console.log(response.data);
                        coc1=response.data[0].title
                        coc2=response.data[1].title
                        coc3=response.data[2].title
                        coc4=response.data[3].title
                        coc5=response.data[4].title
                        coc6=response.data[5].title
                        coc7=response.data[6].title
                        coc8=response.data[7].title
                        coc9=response.data[8].title
                        coc10=response.data[9].title

                        res.write(`<li>Top 10 de bebidas y cocteles :</li><li>${coc1} </li> <li>${coc2}</li> <li>${coc3}</li> <li>${coc4}</li> <li>${coc5}</li> <li>${coc6} </li> <li>${coc7} </li> <li>${coc8} </li> <li>${coc9} </li> <li>${coc10} </li>`)
            
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