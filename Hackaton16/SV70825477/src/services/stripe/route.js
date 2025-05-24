import { Router } from "express";
import { createCustomerStripe, createProducts,createPayment,foundCheckoutSession } from "./controller.js";

const stripeRoutes = Router();

stripeRoutes.post("/customers", createCustomerStripe);
stripeRoutes.post("/products", createProducts);
stripeRoutes.post("/payments", createPayment);
stripeRoutes.post("/checkout", foundCheckoutSession);



// stripeRoutes.patch("/:stripeId", validateJwt, updatestripe);

export default stripeRoutes;
