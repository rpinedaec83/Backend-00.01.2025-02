const path = require('path');

const express = require('express');
const session = require('express-session');
const passport = require(path.join(__dirname, 'src', 'auth'));
const routes = require(path.join(__dirname, 'src', 'routes'));
const db = require(path.join(__dirname, 'src', 'db'));
const socketIo = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('update_location', async (data) => {
    try {
      await db.query('UPDATE packages SET current_location = ? WHERE id = ?', [data.location, data.packageId]);
      await db.query('INSERT INTO locations (package_id, location) VALUES (?, ?)', [data.packageId, data.location]);
      io.emit('location_updated', data);
    } catch (error) {
      console.error('Error al actualizar la ubicación:', error);
    }
  });

  socket.on('new_message', async (data) => {
    try {
      await db.query('INSERT INTO messages (package_id, content) VALUES (?, ?)', [data.packageId, data.content]);
      io.emit('message_added', data);
    } catch (error) {
      console.error('Error al agregar el mensaje:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
