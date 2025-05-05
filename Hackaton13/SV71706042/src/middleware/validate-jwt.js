import jsonwebtoken from "jsonwebtoken";
import UserModel from "../modules/users/entity.js";

const validateJwt = async (req, resp, next) => {
  try {
    if (!req.headers.authorization) {
      return resp.status(401).json({
        message: "Acceso denegado",
      });
    }
    const token = req.headers.authorization.split(" ");
    const decoded = jsonwebtoken.decode(token[1], process.env.SECRET_TOKEN);

    const userFound = await UserModel.findById(decoded.id);
    if (!userFound) {
      return resp.status(401).json({
        message: "Acceso denegado",
      });
    }

    req.user = userFound.toJSON();
    next();
  } catch (err) {
    return resp.status(401).json({
      message: "Acceso denegado",
    });
  }
};

export default validateJwt;