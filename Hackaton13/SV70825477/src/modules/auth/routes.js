import { Router } from "express";
import { login } from "./controllers.js";

const authRoutes = Router();

authRoutes.post("/", login);

export default authRoutes;
