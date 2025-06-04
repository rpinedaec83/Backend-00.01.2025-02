const http = require('http');
const app = require('./server/express');
const setupSocket = require('./server/socketServer');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
setupSocket(server);
server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
