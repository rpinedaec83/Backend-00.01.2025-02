import { Router } from "express";
import validatePayment from "../../middleware/payment.js";
import validateJwt from "../../middleware/validate-jwt.js";

const routerPayment = Router();

routerPayment.post("/", validateJwt, validatePayment);

export default routerPayment;