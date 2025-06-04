const { Server } = require('socket.io');
function setupSocket(server) {
  const io = new Server(server);
  io.on('connection', socket => {
    console.log('Usuario conectado');
    socket.on('mensaje', data => {
      io.emit('mensaje', data);
    });
  });
}
module.exports = setupSocket;