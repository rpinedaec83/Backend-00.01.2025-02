import { Router } from "express";
import { login } from "./controllers.js";
import { check } from "express-validator"; 

const authRoutes = Router();

authRoutes.post("/", login);

export default authRoutes;
