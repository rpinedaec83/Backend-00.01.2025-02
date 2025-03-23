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
    
    case "/clima":
        console.log(query.cuidad);
        let temp = "";
        const options = {
          method: "GET",
          url: "https://weather-api99.p.rapidapi.com/weather",
          params: { city: query.cuidad },
          headers: {
            "x-rapidapi-key":
              "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186",
            "x-rapidapi-host": "weather-api99.p.rapidapi.com",
          },
        };
        try {
          const response = await axios.request(options);
          console.log(response.data);
          temp = parseFloat(response.data.main.temp) - 273.15;
        } catch (error) {
          console.error(error);
        }
        res.write(`El clima en <b> ${query.cuidad} es ${temp} grados centigrados </b>`);
        res.end();
        break;  
        

        

    default:
        break;
}




})
.listen(8009);