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
    
    case "/imagen":
        console.log(query.nombre);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://google-search-master.p.rapidapi.com/images?q=${query.nombre}&gl=us&hl=en&autocorrect=true&num=10&page=`,
            headers: { 
              'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3', 
              'x-rapidapi-host': 'google-search-master.p.rapidapi.com', 
              'Cookie': 'GAESA=CogBMDBhZmFlODA0MzRhMGFiMmNiNWE2NTJmYjE5OTMyYjQ2ZjcxMmU1NzdhOTk0NTgwNTA5M2ZjNTI4NWUwYmUyYzM2ZmFjZWQ5ODY4MzEzMWFkNGM0Y2ExODNhOTM5NDdmODdhZGQzNDUwZjNlMWQ4ZDY1MzVlNDE2Njg4MTUwNzY1NWE3NjMyORD-0s6B3DI'
            }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data);
            a=response.data.images[0].imageUrl
            b=response.data.images[1].imageUrl
            c=response.data.images[2].imageUrl
            d=response.data.images[3].imageUrl
            e=response.data.images[4].imageUrl
            f=response.data.images[5].imageUrl
            g=response.data.images[6].imageUrl
            h=response.data.images[7].imageUrl
            i=response.data.images[8].imageUrl
            
            k=`<img height="200px" src="${a}" alt="" srcset="">`
            l=`<img height="200px" src="${b}" alt="" srcset="">`
            m=`<img height="200px" src="${c}" alt="" srcset="">`
            n=`<img height="200px" src="${d}" alt="" srcset="">`
            o=`<img height="200px" src="${e}" alt="" srcset="">`
            p=`<img height="200px" src="${f}" alt="" srcset="">`
            q=`<img height="200px" src="${g}" alt="" srcset="">`
            r=`<img height="200px" src="${h}" alt="" srcset="">`
            s=`<img height="200px" src="${i}" alt="" srcset="">`


            res.write(k+l+m+n+o+p+q+r+s)
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