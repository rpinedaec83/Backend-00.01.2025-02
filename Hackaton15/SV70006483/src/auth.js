const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./db');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      const [rows] = await db.query('SELECT * FROM users WHERE google_id = ?', [profile.id]);
      if (rows.length > 0) {
        return cb(null, rows[0]);
      } else {
        const [result] = await db.query('INSERT INTO users (google_id, name, email) VALUES (?, ?, ?)', 
          [profile.id, profile.displayName, profile.emails[0].value]);
        const [newUser] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
        return cb(null, newUser[0]);
      }
    } catch (error) {
      return cb(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;