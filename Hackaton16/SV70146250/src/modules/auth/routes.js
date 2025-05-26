import { Router } from "express";
import { login } from "./controllers.js";
import { check } from "express-validator";
const authRoutes = Router();

authRoutes.post("/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").notEmpty(),
  ],
  login);

export default authRoutes;
