import { Router } from "express";
import { login } from "./controllers.js";
// agregar express validator
const authRoutes = Router();

authRoutes.post("/", login);

export default authRoutes;
