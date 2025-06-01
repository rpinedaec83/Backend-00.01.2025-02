import bcryptjs from "bcryptjs";
import { request, response } from "express";

import jsonwebtoken from "jsonwebtoken";
import UserModel from "../modules/user/entity.js";

const login = async (req = request, res = response) => {
    
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Se requiere el password y el email"
        });
    }

    const userFound = await UserModel.findOne({ where: { email } });

    if (!userFound) {
        return res.status(400).json({
            message: "Usuario no encontrado"
        });
    }

    const match = bcryptjs.compareSync(password, userFound.password);

    if (!match) {
        return res.status(401).json({
            message: "Datos incorrectos"
        });
    }

    const token = jsonwebtoken.sign(
        { id: userFound.id },
        process.env.SECRET_TOKEN
        // {expiresIn: "12h"}
    );

    const responseData = {
        user: userFound.toJSON(),
        token,
    };

    return res.json(responseData);
};

export { login };

