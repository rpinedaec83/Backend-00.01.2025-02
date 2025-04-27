/*
Guia de desarrollo
a.Crear una ruta para crear la lista : (Nombre, Descripcion, Fecha, EsCompletado )
b.Crear una ruta para mostrar los pendientes 
c.Crear una ruta para mostrar los completados 
d.Crear una ruta para completar un item de la lista
*/

const http = require("node:http");
const url = require("node:url");

const fs = require("node:fs");

let listSales = [
  { id: 1, product: "laptop" },

  { id: 2, product: "mouse" },
  { id: 3, product: "teclado mecanico" },
  { id: 4, product: "macbook 14 pro" },
];

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  
  const path = parseUrl.pathname;

  if (req.method == "GET" && path === "/api/sales") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ data: listSales }));
  }

  if (req.method == "POST" && path == "/api/sales") {
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
        description,
        date,
        isCompleted: isCompleted ?? "pendiente",
      });
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(listSales));
    });
  }

  if (req.method == "GET" && path == "/web/sales") {
    return fs.readFile("./sales.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "internal server error" }));
      }
      res.writeHead(200, { "Context-Type": "text/html" });
      return res.end(data.toString());
    });
  }

  if (req.method == "GET" && path == "/web/sales/create") {
    return fs.readFile("./create-sales.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "application/json" });
        return res.end(JSON.stringify({ message: "internal server error" }));
      }
      res.writeHead(200, { "Context-Type": "text/html" });
      return res.end(data.toString());
    });
  }

  // b. Crear una ruta para mostrar los pendientes
  if (req.method == "GET" && path === "/api/sales/pendientes") {
    const pendientes = listSales.filter((sale) => sale.isCompleted === "pendiente");

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ data: pendientes }));
  }

  // c. Crear una ruta para mostrar los completados
  if (req.method == "GET" && path === "/api/sales/completados") {
    const completados = listSales.filter((sale) => sale.isCompleted === true);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ data: completados }));
  }

  // d. Crear una ruta para completar un item de la lista
  if (req.method == "POST" && path === "/api/sales/complete") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    return req.on("end", () => {
      const { id } = JSON.parse(body);
      const sale = listSales.find((sale) => sale.id === id);

      if (!sale) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "item not found" }));
      }

      sale.isCompleted = true;
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "item completed", data: sale }));
    });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ message: "not found" }));
});

server.listen(4000, () => {

  console.log("server listening on port 4000");

});
