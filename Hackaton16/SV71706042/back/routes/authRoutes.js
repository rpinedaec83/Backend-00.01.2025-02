const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/check', (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.json({ 
      loggedIn: true, 
      user: {
        id: req.user.id,
        nombre: req.user.displayName || req.user.name,
        email: req.user.emails ? req.user.emails[0].value : req.user.email,
        foto: req.user.photos ? req.user.photos[0].value : null
      }
    });
  } else {
    res.json({ loggedIn: false });
  }
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html' }),
  (req, res) => {
    res.redirect('/');
  });

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

module.exports = router;