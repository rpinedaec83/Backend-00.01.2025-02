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
    
    case "/marte":

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY',
      headers: { 
        'x-rapidapi-key': '16d7278dfcmsh00dc62ec1d732c8p1f3e99jsn85c80820b0b3', 
        'x-rapidapi-host': 'bing-search-apis.p.rapidapi.com'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data);

      a=response.data.photos[0].img_src
      b=response.data.photos[1].img_src
      c=response.data.photos[2].img_src
      d=response.data.photos[3].img_src
      e=response.data.photos[4].img_src
      f=response.data.photos[5].img_src
      g=response.data.photos[6].img_src
      h=response.data.photos[7].img_src
      i=response.data.photos[8].img_src
      j=response.data.photos[9].img_src
      k=response.data.photos[9].img_src
      l=response.data.photos[9].img_src
      m=response.data.photos[9].img_src
img=`<img height="200px" src="${a}" alt="" srcset="">`
img2=`<img height="200px" src="${b}" alt="" srcset="">`
img3=`<img height="200px" src="${c}" alt="" srcset="">`
img4=`<img height="200px" src="${d}" alt="" srcset="">`
img5=`<img height="200px" src="${e}" alt="" srcset="">`
img6=`<img height="200px" src="${f}" alt="" srcset="">`
img7=`<img height="200px" src="${g}" alt="" srcset="">`
img8=`<img height="200px" src="${h}" alt="" srcset="">`
img9=`<img height="200px" src="${i}" alt="" srcset="">`
img10=`<img height="200px" src="${j}" alt="" srcset="">`
img11=`<img height="200px" src="${k}" alt="" srcset="">`
img12=`<img height="200px" src="${l}" alt="" srcset="">`
img13=`<img height="200px" src="${m}" alt="" srcset="">`

res.write(`${img} ${img2} ${img3} ${img4} ${img5} ${img6} ${img7} ${img8} ${img9} ${img10} ${img11} ${img12} ${img13}`)
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