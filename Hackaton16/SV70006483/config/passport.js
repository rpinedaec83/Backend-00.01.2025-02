require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const pool = require('./database');

module.exports = function(passport) {
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const [rows] = await pool.query('SELECT * FROM users WHERE google_id = ?', [profile.id]);
        
        if (rows.length > 0) {
          done(null, rows[0]);
        } else {
          const [result] = await pool.query(
            'INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)',
            [profile.id, profile.emails[0].value, profile.displayName]
          );
          
          const newUser = {
            id: result.insertId,
            google_id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName
          };
          
          done(null, newUser);
        }
      } catch (error) {
        done(error, null);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
      done(null, rows[0]);
    } catch (error) {
      done(error, null);
    }
  });
};