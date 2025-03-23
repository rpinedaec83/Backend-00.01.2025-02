//•	Consultar los poderes de un pokemon especifico Pokemon 
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
    
   
        case "/pokemon":
                
        let pok=""
        let pok2=""
        let temp3=""
        let pok3=""
        let pok4=""
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
           pok=response.data.name
           a=[]
           a.push(response.data.abilities[0])
           temp3=(JSON.stringify(a[0].ability.name))
           b=[]
           b.push(response.data.abilities[1])
           pok2=(JSON.stringify(b[0].ability.name))
           c=[]
           c.push(response.data.abilities[2])
           pok3=(JSON.stringify(c[0].ability.name))
           d=[]
           //d.push(response.data.abilities[3])
           //pok4=(JSON.stringify(d[0].ability.name))


           
            
          } catch (error) {
            console.error(error);
          }
        
       
        

          res.write(`Las abilidades del pokemon ${query.nombre}:  ${temp3} ${pok2} ${pok3}`)
          res.end()
      break;



     




      
    default:
        break;
}





})
.listen(8009);







