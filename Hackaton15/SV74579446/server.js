const express = require('express');
const session = require('express-session');
const passport = require('./passport');
const app = express();

app.use(session({
  secret: 'clave_secreta',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Ruta para iniciar login con Google
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

// Ruta de callback después del login
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/public/login.html' }),
  (req, res) => {
    res.redirect('/chat.html');
  }
);

// Ruta protegida 
app.get('/chat.html', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(__dirname + '/chat.html');
  } else {
    res.redirect('/login.html');
  }
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
