console.log("Inicio de la aplicacion");
var http = require("http");
var fs = require("fs");
var url = require("url");
const axios = require("axios");

http
  .createServer(async (req, res) => {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     console.log(req)
    //     res.write(`<h1>${req.url}</h1>`); //write a response to the client
    //   res.end(); //end the response

    // var q = url.parse(req.url, true).query;
    // console.log(q)
    //   var txt = q.year + " " + q.month;
    //   if(q.year === '2025'){
    //     txt+=" Año vigente"
    //   }
    //   else{
    //     txt+=" Año no vigente"
    //   }
    //   res.end(txt);

    // fs.readFile('demofile1.html', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });

    // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
    // res.end();

    // var q = url.parse(req.url, true);
    //   var filename = "." + q.pathname;
    //   fs.readFile(filename, function(err, data) {
    //     if (err) {
    //       res.writeHead(404, {'Content-Type': 'text/html'});
    //       return res.end("404 Not Found");
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    //   });
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true);

    let tipo = q.pathname;
    let query = q.query;
    console.log(query);
    console.log(tipo);
    let htmlResponse = "";
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
      default:
        break;
    }
  })
  .listen(8009);
