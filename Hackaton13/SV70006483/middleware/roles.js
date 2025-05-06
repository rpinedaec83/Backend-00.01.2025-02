const isModerator = (req, res, next) => {
  if (req.user && req.user.role === 'moderator') {
    next();
  } else {
    res.status(403).json({ msg: 'Acceso denegado. Se requiere rol de moderador.' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ msg: 'Acceso denegado. Se requiere rol de administrador.' });
  }
};

module.exports = { isModerator, isAdmin };
