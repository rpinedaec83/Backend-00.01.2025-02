import bcryptjs from "bcryptjs";
import { request, response } from "express";

import jsonwebtoken from "jsonwebtoken";
import UserModel from "../users/entity.js";

const login = async (req = request, resp = response) => {

  const { password, email } = req.body;

  if (!password || !email) {
    return resp.status(400).json({ message: "Se requiere el password y el email" });
  }

  const userFound = await UserModel.findOne({ email });

  if (!userFound) {
    return resp.status(400).json({ message: "Usuario no encontrado" });
  }

  const match = await bcryptjs.compare(password, userFound.password);

  if (!match) {
    return resp.status(401).json({ message: "Contraseña incorrecta" });
  }

  const token = jsonwebtoken.sign(
    { id: userFound._id },
    process.env.SECRET_TOKEN,
    { expiresIn: "12h" }
  );

  const responseData = {
    user: userFound.toJSON(),
    token,
  };

  return resp.json(responseData);
};

const logout = async (req = request, resp = response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return resp.status(400).json({ message: "Se requiere el email" });
    }

    const userFound = await UserModel.findOne({ email });

    if (!userFound) {
      return resp.status(400).json({ message: "Usuario no encontrado" });
    }
    
    return resp.status(200).json({ message: "Haz salido de la sesión"});

  } catch (error) {
    return resp.status(500).json({ message: "Error al cerrar la sesión" });
  }
};


export { login, logout };
