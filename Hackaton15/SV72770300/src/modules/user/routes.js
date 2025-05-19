import { Router } from "express";
import { getAllUsers, createUser, updateUser } from "./controllers.js";
import { check } from "express-validator";
import { validateFields } from "../../middleware/validate-field.js"
import validateJwt from "../../middleware/validate-jwt.js";

const userRoutes = Router();

userRoutes.get("/", validateJwt, getAllUsers);
userRoutes.post("/", [
    check("firstName", "FirstName es requerido").not().isEmpty(),
    check("email", "Email es requerido").not().isEmpty(),
    check("password", "Password es requerido").not().isEmpty(),
    validateFields

], createUser);
userRoutes.patch("/:userId", validateJwt, updateUser);

export default userRoutes;