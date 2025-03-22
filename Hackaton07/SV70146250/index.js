console.log("Inciando APP: Uso de APIs");
var http = require("http");
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
    
        let htmlResponse = "";
        switch (tipo) {
          case "/gituser":    //Primer API
          let usuario = Object.keys(query)[0]; 
          if (!usuario) {
            res.write("<p>No se agrego el User</p>");
            res.end();
            break;
          }
          try {
            let response = await axios.get(`https://api.github.com/users/${usuario}`);
            let data = response.data;
            let fechaActualizado = data.updated_at.substring(0,10);
            let fechaCreado = data.created_at.substring(0,10);
            htmlResponse = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" width="100" height="100">
                <p>ID: ${data.id}</p>
                <p>Tipo: ${data.type}</p>
                <p>Nombre: ${data.name || "[Privado]"}</p>
                <p>Compania: ${data.company||"[Privado]"}</p>
                <p>Blog: ${data.blog||"[Privado]"}</p>
                <p>Repositorios: ${data.public_repos}</p>
                <p>Seguidores: ${data.followers}</p>
                <p>Ubicacion: ${data.location||"[Privado]"}</p>
                <p>Email: ${data.email ||"[Privado]"}</p>
                <p>X: ${data.twitter_username ||"[Privado]"}</p>
                <p>Biografia: ${data.bio}</p>
                <p>Creado: ${fechaCreado}</p>
                <p>Actualziado: ${fechaActualizado}</p>
                <p><a href="${data.html_url}" target="_blank">Perfil GitHub</a></p>
            `;
            res.write(htmlResponse);
          } catch (error) {
            res.write("<p>Error: User Invalido</p>");
          }
          res.end();
          break;
          case "/clima":
            let ciudad = Object.keys(query)[0]; 
            console.log(ciudad);
            let temp = "";
            let options = {
              method: "GET",
              url: "https://weather-api99.p.rapidapi.com/weather",
              params: { city: ciudad },
              headers: {
                "x-rapidapi-key":
                  "73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186",
                "x-rapidapi-host": "weather-api99.p.rapidapi.com",
              },
            };
            try {
              let response = await axios.request(options);
              console.log(response.data);
              temp = (parseFloat(response.data.main.temp) - 273.15).toFixed(1);
            } catch (error) {
              console.error(error);
            }
            res.write(`El clima en <b> ${ciudad} es ${temp} grados Celsius </b>`);
            res.end();
            break;

             case "/tipocambio":
                    let moneda = query.moneda; 
                    try {
                    const response = await axios.get(`https://api.frankfurter.dev/v1/latest?base=ILS`);
                    
                    let tasa = response.data.rates[moneda.toUpperCase()];
                    
                    if (tasa) {
                      htmlResponse = `<p>1 SOL = ${tasa} ${moneda.toUpperCase()}</p>`;
                    } else {
                      htmlResponse = `<p>No soporta esa Moneda</p>`;
                    }
                  } catch (error) {
                    console.error(error);
                    htmlResponse = `<p>Tipo de Cambio Invalido</p>`;
                  }
          
                  res.write(htmlResponse);
                  res.end();
                  break;

    
          default:          //De no encontrarse la ruta
            res.write(`<div style='display:grid;place-items:center;height:100vh;text-align:center;font-size:4rem;'>
                        <p>Error 404<br>Ruta no encontrada</p></div>`);
            res.end();
          break;

        }
    })
    .listen(8009);