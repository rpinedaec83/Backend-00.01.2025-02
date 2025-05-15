const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token)
    return res.status(403).json({ message: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.userRole !== "admin") {
    return res.status(403).json({ message: "Requiere rol de administrador" });
  }
  next();
};

const isModerator = (req, res, next) => {
  if (req.userRole !== "moderador" && req.userRole !== "admin") {
    return res.status(403).json({ message: "Requiere rol de moderador o administrador" });
  }
  next();
};

module.exports = {
  verifyToken,
  isAdmin,
  isModerator
};
