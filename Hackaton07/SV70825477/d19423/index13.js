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
    
    case "/idproducto":
        console.log(query.id);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://fakestoreapi.com/products/${query.id}`,
            headers: { 
              'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3', 
              'x-rapidapi-host': 'bing-search-apis.p.rapidapi.com'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            id=response.data.id
            precio=response.data.price
            titulo=response.data.title
            descrip=response.data.description
            categoria=response.data.category
            a=response.data.image
            imag=`<img height="200px" src="${a}" alt="" srcset="">`


            res.write(`<li>El id : ${id}</li> <li>Precio : ${precio}$</li> <li>Titulo : ${titulo}</li> <li>Descripcion : ${descrip}</li> <li>Categoria : ${categoria}</li> <li>${imag}</li>`)
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