
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./database/db');

passport.use(new GoogleStrategy({
    clientID: 'TU_CLIENT_ID',
    clientSecret: 'TU_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    const oauthId = profile.id;
    const nombre = profile.displayName;

    // Verificar si el usuario ya existe
    db.query('SELECT * FROM usuarios WHERE oauth_id = ?', [oauthId], (err, results) => {
      if (err) return done(err);

      if (results.length > 0) {
        return done(null, results[0]); // Usuario ya existe
      } else {
        // Insertar nuevo usuario
        db.query('INSERT INTO usuarios (oauth_id, nombre) VALUES (?, ?)', [oauthId, nombre], (err, result) => {
          if (err) return done(err);
          return done(null, { id: result.insertId, oauth_id: oauthId, nombre: nombre });
        });
      }
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) return done(err);
    done(null, results[0]);
  });
});

module.exports = passport;
