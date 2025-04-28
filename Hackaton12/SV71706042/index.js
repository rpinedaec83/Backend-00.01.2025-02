const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");
let listaCompras = [
  { id: 1, Nombre: "Leche", Descripcion: "2 litros", Fecha: "2025-04-27", EsCompletado: false },
  { id: 2, Nombre: "Pan", Descripcion: "1 bolsa", Fecha: "2025-04-27", EsCompletado: true },
  { id: 3, Nombre: "Huevos", Descripcion: "1 docena", Fecha: "2025-04-28", EsCompletado: false },
  { id: 4, Nombre: "Arroz", Descripcion: "5 kg", Fecha: "2025-04-28", EsCompletado: true },
  { id: 5, Nombre: "Azúcar", Descripcion: "2 kg", Fecha: "2025-04-29", EsCompletado: false },
  { id: 6, Nombre: "Sal", Descripcion: "1 kg", Fecha: "2025-04-29", EsCompletado: false },
  { id: 7, Nombre: "Aceite", Descripcion: "1 litro", Fecha: "2025-04-30", EsCompletado: true },
  { id: 8, Nombre: "Pasta", Descripcion: "3 paquetes", Fecha: "2025-04-30", EsCompletado: false },
  { id: 9, Nombre: "Jabón", Descripcion: "4 unidades", Fecha: "2025-05-01", EsCompletado: true },
  { id: 10, Nombre: "Shampoo", Descripcion: "1 botella", Fecha: "2025-05-01", EsCompletado: false },
  { id: 11, Nombre: "Detergente", Descripcion: "2 kg", Fecha: "2025-05-02", EsCompletado: false },
  { id: 12, Nombre: "Manzanas", Descripcion: "1 kg", Fecha: "2025-05-02", EsCompletado: true },
  { id: 13, Nombre: "Plátanos", Descripcion: "1.5 kg", Fecha: "2025-05-03", EsCompletado: false },
  { id: 14, Nombre: "Tomates", Descripcion: "2 kg", Fecha: "2025-05-03", EsCompletado: true },
  { id: 15, Nombre: "Papas", Descripcion: "4 kg", Fecha: "2025-05-04", EsCompletado: false }
];

//crea servidor y recibe todas las peticiones http
const server = http.createServer((req, res) => {

  //extraccion de url
  const parseUrl = url.parse(req.url, true);
  console.log(parseUrl);
  const path = parseUrl.pathname;

  //api -- back

  // Ruta API para obtener todas las ventas
  if (req.method == "GET" && path === "/api/sales") {
    //retornar respuesta
    res.writeHead(200, { "Content-Type": "application/json" }); // crea la cabecera de respuesta
    return res.end(
      //regresa la respuesta
      JSON.stringify({
        data: listaCompras,
      })
    );
  }
  //Ruta API para obtener una venta por ID
  if (req.method == "POST" && path == "/api/sales") {
    console.log("Creando una venta");

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    return req.on("end", () => {
      const { name, description, date, isCompleted } = JSON.parse(body);
      if (!name || !description || !date) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "fantan campos" }));
      }

      listaCompras.push({
        id: listaCompras.length + 1,
        Nombre: name,
        Descripcion: description,
        Fecha: date,
        EsCompletado: isCompleted === "completado"
      });
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(listaCompras));
    });
  }
  // Ruta API para obtener solo los pendientes
if (req.method == "GET" && path == "/api/pendientes") {
    const pendientes = listaCompras.filter(item => !item.EsCompletado);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ data: pendientes }));
  }
  
  // Ruta API para obtener solo los completados
  if (req.method == "GET" && path == "/api/completados") {
    const completados = listaCompras.filter(item => item.EsCompletado);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ data: completados }));
  }

  //                        FRONT END
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
  if (req.method == "GET" && path == "/web/completados") {
    return fs.readFile("./completados.html", "utf8", (err, data) => {
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
  if (req.method == "GET" && path == "/web/pendientes") {
    return fs.readFile("./pendientes.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Internal server error" }));
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  }
  
  res.writeHead(404, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ message: "Not found" }));
});

server.listen(4000, () => {
  console.log("server listing in port 4000");
});