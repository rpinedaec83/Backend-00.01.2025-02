const url = require('url');

function routes(req, res, controller) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === 'GET' && path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lista de Compras</title>
        </head>
        <body>
          <h1>Bienvenido a la Lista de Compras</h1>
          <p>Utiliza las siguientes rutas:</p>
          <ul>
            <li>POST /create - Para crear un nuevo ítem</li>
            <li>GET /pendientes - Para ver los ítems pendientes</li>
            <li>GET /completados - Para ver los ítems completados</li>
            <li>PUT /completar/:id - Para marcar un ítem como completado</li>
          </ul>
        </body>
      </html>
    `);
  } else if (req.method === 'POST' && path === '/create') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      req.body = body;
      controller.createItem(req, res);
    });
  } else if (req.method === 'GET' && path === '/pendientes') {
    controller.getPendingItems(req, res);
  } else if (req.method === 'GET' && path === '/completados') {
    controller.getCompletedItems(req, res);
  } else if (req.method === 'PUT' && path.startsWith('/completar/')) {
    console.log('Route: Received request to complete item');
    controller.completeItem(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'No encontrado' }));
  }
}

module.exports = routes;