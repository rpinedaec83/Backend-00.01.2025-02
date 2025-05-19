const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Envía el mensaje a todos los clientes conectados
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
