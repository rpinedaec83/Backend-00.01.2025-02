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

            case "/citasfamosas":
                let a=""
                let b=""

                const options = {
                    method: 'GET',
                    url: 'https://famous-quotes4.p.rapidapi.com/random',
                    params: {
                        category: 'all',
                        count: '3'
                    },
                    headers: {
                        'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3',
                        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
                    }
                };


                try {
                    const response = await axios.request(options);
                    console.log(response.data);
                    a=response.data[0].text
                    b=response.data[0].author



                } catch (error) {
                    console.error(error);
                }
        

        res.write(`${a} <li>Author : ${b}</li>`)

        res.end()
        break;  
      
       default:
        break;
    }





})
    .listen(8009);