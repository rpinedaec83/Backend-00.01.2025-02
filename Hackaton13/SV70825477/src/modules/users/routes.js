import { Router } from "express";
import { createUser,updateUser } from "./controllers.js";

const userRoutes = Router();

userRoutes.post("/", createUser);
userRoutes.patch('/:userId',updateUser)

export default userRoutes