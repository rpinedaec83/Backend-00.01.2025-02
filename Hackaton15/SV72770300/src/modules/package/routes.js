import { Router } from "express";
import { createPackage, updatePackage, getAllPackages, deletePackage } from "./controllers.js";
import validateJwt from "../../middleware/validate-jwt.js"
import { validateFields } from "../../middleware/validate-field.js"
import { check } from "express-validator";

const packageRoutes = Router();

packageRoutes.get("/", validateJwt, getAllPackages);
packageRoutes.post("/", validateJwt, [
    check("origen", "Origen es requerido").not().isEmpty(),
    check("destino", "Destino es requerido").not().isEmpty(),
    check("persona_envio", "Destinatario es requerido").not().isEmpty(),
    validateFields
] ,createPackage);
packageRoutes.patch("/:idPackage", validateJwt, updatePackage);
packageRoutes.delete("/:idPackage", validateJwt, deletePackage)

export default packageRoutes;