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
    
    case "/github":
        console.log(query.nombre)
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.github.com/users/${query.nombre}`,
        
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            a=response.data.login
            b=response.data.id
            urles=response.data.url
            nombre=response.data.name
            company=response.data.company
            local=response.data.location
            email=response.data.email
            res.write(`<li> Datos personales: </li> <li> ID nombre: ${a}</li> <li> ID: ${b}</li> <li> Url: ${urles}</li> <li> Nombre: ${nombre}</li> <li> Compania: ${company}</li> <li> Localizacion: ${local}</li> <li> Email: ${email}</li>`)
            
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