import { Router } from "express";
import { getAllPurchaseOrders, createPurchaseOrders, updatePurchaseOrders, deletePurchaseOrders } from "./controllers.js";

import validateJwt from "../../middleware/validate-jwt.js";

const purchaseOrdersRoutes = Router();

purchaseOrdersRoutes.get("/", validateJwt, getAllPurchaseOrders); //Realizar la consulta a la base de datos (Read)
purchaseOrdersRoutes.post("/", validateJwt, createPurchaseOrders); //Crear una orden de compra (Create)
purchaseOrdersRoutes.patch("/:purchaseOrderId", validateJwt, updatePurchaseOrders); //Actualizar una orden de compra (Update)
purchaseOrdersRoutes.delete("/:purchaseOrderId", validateJwt, deletePurchaseOrders); //Eliminar una orden de compra (Delete)

export default purchaseOrdersRoutes;