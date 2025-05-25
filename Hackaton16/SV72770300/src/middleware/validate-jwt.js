import jsonwebtoken from "jsonwebtoken";
import UserModel from "../modules/user/entity.js";

const validateJwt = async (req, resp, next) => {
    try {
        if (!req.headers.authorization) {
            return resp.status(401).json({
                message: "Acceso denegado",
            });
        }
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_TOKEN);

        const userFound = await UserModel.findByPk(decoded.id)
        ;
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