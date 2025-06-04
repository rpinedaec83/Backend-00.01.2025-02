const express = require('express');
const session = require('express-session');
const passport = require('../config/oauth');
const app = express();

app.use(express.json());
app.use(express.static('src/public'));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

test
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => res.redirect('/'));

module.exports = app;
