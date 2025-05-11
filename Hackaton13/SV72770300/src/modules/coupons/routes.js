import { Router } from "express";
import { getAllCoupons, createCoupons, updateCoupons, deleteCoupons } from "./controllers.js";

import validateJwt from "../../middleware/validate-jwt.js";

const couponsRoutes = Router();

couponsRoutes.get("/", validateJwt, getAllCoupons);
couponsRoutes.post("/", validateJwt, createCoupons);
couponsRoutes.patch("/:couponId", validateJwt, updateCoupons);
couponsRoutes.delete("/:couponId", validateJwt, deleteCoupons);

export default couponsRoutes;