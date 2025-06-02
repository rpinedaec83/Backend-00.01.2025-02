// Middleware para proteger rutas si no hay sesión
function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next(); // todo OK
  }

  // Si no está logueado, redirige al login o retorna error
  return res.status(401).json({ message: 'No autenticado' });
}

module.exports = { isAuthenticated };
