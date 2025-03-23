//•	Consultar el Clima de una ciudad o ubicacion especifica 
//•	Consultar el top de peliculas de estreno  
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
    
/////////////////////////////////////
    let htmlResponse = "";
    switch (tipo) {
      case "/pokemon":
        
        let temp=""
        let temp2=""
        let temp3=""
        console.log(query.nombre)
        const options = {
          method: 'GET',
          url: 'https://pokemon-api3.p.rapidapi.com/pokemon',
          params: {name: query.nombre},
          headers: {
            'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3',
            'x-rapidapi-host': 'pokemon-api3.p.rapidapi.com'
          }
        };

        
          try {
            const response = await axios.request(options);
		         console.log(response.data);
           temp=response.data.name
           temp2=response.data.id
           a=[]
           a.push(response.data.abilities[0])
           temp3=(JSON.stringify(a[0].ability.name))
           a=response.data.sprites.front_default
            
           k=`<img height="200px" src="${a}" alt="" srcset="">`
           
           res.write(`Su nombre es ${temp}, el ID es ${temp2} y su abilidad es ${temp3} <li>${k}</li>`)
           res.end()

          } catch (error) {
            console.error(error);
          }
        
       
        

          
      break;
      ///////////////////////////////////////////////////////////////////
      case "/pelis":
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://imdb236.p.rapidapi.com/imdb/autocomplete?query=${query.nombre}`,
          headers: {
            "x-rapidapi-key":
              "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186",
            "x-rapidapi-host": "imdb236.p.rapidapi.com",
          },
        };

        axios
          .request(config)
          .then((response) => {
            let arrPelis = response.data;
            arrPelis.forEach((element) => {
              htmlResponse += `<img height="200px" src="${element.primaryImage}" alt="" srcset="">`;
            });
            res.write(htmlResponse);
            res.end();
          })
          .catch((error) => {
            console.log(error);
          });

        break;
        case "/":
          console.log(query.nombre)

          res.write("A")
          res.end()
          break;
          //////////////////////////////////////////////////////
          



      default:
        break;
    }
  })
  .listen(8009);
