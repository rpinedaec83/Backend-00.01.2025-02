import bcryptjs from "bcryptjs";
import { request, response } from "express";

import jsonwebtoken from "jsonwebtoken";
import UserModel from "../users/entity.js";

const login = async (req = request, resp = response) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return resp.status(400).json({ message: "se requiere credenciales" });
  }

  const userFound = await UserModel.findOne({ where: { email } });

  if (!userFound) {
    return resp.status(400).json({ message: "User not found" });
  }

  const match = bcryptjs.compareSync(password, userFound.password);

  if (!match) {
    return resp.status(401).json({ message: "Credenciales incorrectas" });
  }
  const token = jsonwebtoken.sign(
    { id: userFound._id },
    process.env.SECRET_TOKEN
  );

  const responseData = {
    user: userFound.toJSON(),
    token,
  };

  return resp.json(responseData);
};

export { login };