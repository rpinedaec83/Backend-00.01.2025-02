const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");
let listSales = [
  {
    id: 1,
    product: "laptop",
    description:"Laptop Toshiba Dynabook Tecra A40-J, Intel Core i7-1165G7 Hasta 4,7 GHz",
    date:"27/04/25",
    isCompleted:""
  },
  {
    id: 2,
    product: "mouse",
    description:"LOGITECH G300S 9 teclas Programable",
    date:"27/04/25",
    isCompleted:""
  },
  {
    id: 3,
    product: "teclado mecanico",
    description:"Redragon MODELO: Kumara, COLORES: Blanco, TIPO DE SWITCH",
    date:"27/04/25",
    isCompleted:""
  },
  {
    id: 4,
    product: "macbook 14 pro",
    description:"Chip M4 Pro de Apple. CPU de 12 núcleos. GPU de 16 núcleos 24 GB",
    date:"27/04/25",
    isCompleted:""
   
  },
];
//crea servidor y recibe todas las peticiones http
const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "application/json" }); // crea la cabecera de respuesta

  //   res.end(
  //     //regresa la respuesta
  //     JSON.stringify({
  //       data: "Hello World!",
  //     })
  //   );

  //extraccion de url
  const parseUrl = url.parse(req.url, true);
  console.log(parseUrl);
  const path = parseUrl.pathname;

  //api -- back
  // creacion de ruta
  if (req.method == "GET" && path === "/api/sales") {
    //retornar respuesta
    res.writeHead(200, { "Content-Type": "application/json" }); // crea la cabecera de respuesta
    return res.end(
      //regresa la respuesta
      JSON.stringify({
        data: listSales,
      })
    );
  }
  //creacion de ruta post

  //localhost:4000/api/sales  post

  if (req.method == "POST" && path == "/api/sales") {
    console.log("creating a new sale");

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    return req.on("end", () => {
      const { name, description, date, isCompleted } = JSON.parse(body);
      if (!name || !description || !date) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "faltan campos" }));
      }
      
      listSales.push({
        id: listSales.length + 1,
        product: name,
        description:description,
        date:date,
        isCompleted: isCompleted ,///////////////////////////////////////////////////////
      });
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(listSales));
    });
  }

  //web -- front
  if (req.method == "GET" && path == "/web/sales") {
    return fs.readFile("./sales.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "application/json" });

        return res.end(JSON.stringify({ message: "Internal server error" }));
      }
      res.writeHead(200, { "Context-Type": "text/html" });

      return res.end(data.toString());
    });
  }
  if (req.method == "GET" && path == "/web/sales/create") {
    return fs.readFile("./create-sales.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "application/json" });

        return res.end(JSON.stringify({ message: "Internal server error" }));
      }
      res.writeHead(200, { "Context-Type": "text/html" });

      return res.end(data.toString());
    });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ message: "Not found" }));
});

server.listen(4000, () => {
  console.log("server listing in port 4000");
});
