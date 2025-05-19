import { Router } from "express";
import { check } from "express-validator";
import { validateFields } from "../../middleware/validate-field.js";
import { login } from "./controllers.js";

const authRoutes = Router();

authRoutes.post("/login", [
    check("email", "El email es requerido").isEmail(),
    check("password", "La contraseña es requerida").not().isEmpty(),
    validateFields
], login);

export default authRoutes;