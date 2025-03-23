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
    
    case "/tipocambio":
             
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.frankfurter.dev/v1/latest?base=USD',
                headers: { }
              };
              
              axios.request(config)
              .then((response) => {
                console.log(response.data);
                 b=response.data.rates.PLN
                c=b-(0.22)
                res.write(`Valor del dolar en peru es: ${c}`)
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