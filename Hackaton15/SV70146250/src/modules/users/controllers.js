import { request, response } from "express";
import UserModel from "./entity.js";
import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

const createUser = async (req = request, resp = response) => {
  const { firstName, lastName, password, email, role, username } = req.body;

  console.log("creating user");

  const salt = await bcryptjs.genSalt(10);

  const newPassword = await bcryptjs.hash(password, salt);

  const newUser = await UserModel.create({
    firstName,
    lastName,
    password: newPassword,
    email,
    username,
    role: role ?? "usuario",
  });

  await newUser.save();

  const token = jwt.sign(
    { id: newUser.dataValues.id },
    process.env.SECRET_TOKEN
  );
  return resp.json({ user: newUser, token });
};

export { createUser };
