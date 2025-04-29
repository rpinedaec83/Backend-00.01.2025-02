const http = require('node:http');
const url = require('node:url');

let shoppingList = [
  { "id": 1, "product": "laptop" },
    { "id": 2, "product": "mouse" },
    { "id": 3, "product": "teclado mecanico" },
    { "id": 4, "product": "macbook 14 pro" }
]; // Lista de compras

// Crear el servidor
const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const method = req.method;

  // Ruta para crear un item en la lista
  if (method === "POST" && path === "/api/shopping") {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const item = JSON.parse(body);
      shoppingList.push({ ...item, EsCompletado: false });
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Item creado exitosamente', data: item }));
    });
    return;
  }

  // Ruta para mostrar los pendientes
  if (method === "GET" && path === "/api/shopping/pendientes") {
    const pendientes = shoppingList.filter(item => !item.EsCompletado);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: pendientes }));
    return;
  }

  // Ruta para mostrar los completados
  if (method === "GET" && path === "/api/shopping/completados") {
    const completados = shoppingList.filter(item => item.EsCompletado);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ data: completados }));
    return;
  }

  // Ruta para completar un item de la lista
  if (method === "PUT" && path.startsWith("/api/shopping/completar/")) {
    const id = parseInt(path.split("/").pop());
    const item = shoppingList.find(item => item.id === id);
    if (item) {
      item.EsCompletado = true;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Item completado exitosamente', data: item }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Item no encontrado' }));
    }
    return;
  }

  // Ruta no encontrada
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
});

// Iniciar el servidor
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});