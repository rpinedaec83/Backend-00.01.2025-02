const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.SECRETID,
  callbackURL: process.env.CALLBACKURL,
  passReqToCallback: true
}, (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
