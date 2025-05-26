import { Router } from "express";
import { createUser } from "./controllers.js";
import validateJwt from "../../middleware/validate-jwt.js";
import { check } from "express-validator";
import { validateFields } from "../../middleware/validate-field.js";

const userRoutes = Router();

userRoutes.post("/",[
    check("firstName","FirstName es requerido").not().isEmpty(),
    check("email","email es requerido").isEmail(),
    check("password","Password es requerido").not().isEmpty(),
    check("username","username es requerido").not().isEmpty(),
    validateFields

], createUser);
userRoutes.patch("/:userId",[validateJwt,
    check("email", "Email no es válido").optional().isEmail(),
    check("firstName", "El nombre no puede estar vacío").optional().not().isEmpty(),
    check("username", "El username no puede estar vacío").optional().not().isEmpty(),
    validateFields

  ], updateUser);
  
export default userRoutes;
