function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login.html');
}
module.exports = ensureAuthenticated;
