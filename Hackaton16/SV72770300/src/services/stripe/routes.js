import express from "express";
import { Router } from "express";
import {
    getAllCustomerStripe,
    createCustomerStripe,
    updateCustomerStripe,
    deleteCustomerStripe
} from "./clients/controllers.js"

import {
    getAllProductStripe,
    createProductStripe,
    updateProductStripe,
    deleteProductStripe
} from "./products/controllers.js"

import {
    createPaymentStripe,
    getAllPaymentsStripe,
    checkoutSessioFound,
    getAllCheckoutSessionsStripe,
    createRefundsStripe,
    getAllRefundsStripe,
    stripeWebhook
} from "./payments/controllers.js";

// import { check } from "express-validator";
// import { validateFields } from "../../middleware/validate-field.js"
import validateJwt from "../../middleware/validate-jwt.js";

const stripeRoutes = Router();

stripeRoutes.get("/customers", validateJwt, getAllCustomerStripe);
stripeRoutes.post("/customers", createCustomerStripe);
stripeRoutes.patch("/customers/:idCustomer", validateJwt, updateCustomerStripe);
stripeRoutes.delete("/customers/:idCustomer", validateJwt, deleteCustomerStripe);


stripeRoutes.get("/products", validateJwt, getAllProductStripe);
stripeRoutes.post("/products", validateJwt, createProductStripe);
stripeRoutes.patch("/products/:idProduct", validateJwt, updateProductStripe);
stripeRoutes.delete("/products/:idProduct", validateJwt, deleteProductStripe);


stripeRoutes.get("/payments", validateJwt, getAllPaymentsStripe);
stripeRoutes.post("/payments", validateJwt, createPaymentStripe);
stripeRoutes.get("/payments/refunds", validateJwt, getAllRefundsStripe);
stripeRoutes.post("/payments/refunds", validateJwt, createRefundsStripe);
stripeRoutes.post("/webhook", stripeWebhook);


stripeRoutes.get("/checkout-session", validateJwt, getAllCheckoutSessionsStripe);
stripeRoutes.post("/checkout-session", validateJwt, checkoutSessioFound);


export default stripeRoutes;