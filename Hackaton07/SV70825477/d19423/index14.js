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
    
    case "/pelicula":
      console.log(query.nombre)
       let a=""
   
      let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://imdb236.p.rapidapi.com/imdb/autocomplete?query=${query.nombre}`,
      headers: { 
        'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3', 
        'x-rapidapi-host': 'imdb236.p.rapidapi.com'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);
a=response.data[0].description
b=response.data[0].primaryImage
 img=`<img height="200px" src="${b}" alt="" srcset="">`

res.write(`<li>El nombre es : ${query.nombre}</li> <li>Descripcion : ${a}</li> <li>${img}</li>`)
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