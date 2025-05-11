import express from "express";
import mongoose from "../config/db/index.js";

import userRoutes from "../modules/users/routes.js";
import authRoutes from "../modules/auth/routes.js";
import coursesRoutes from "../modules/courses/routes.js";
import purchaseOrdersRoutes from "../modules/orders/routes.js";
import couponsRoutes from "../modules/coupons/routes.js";
import routerPayment from "../modules/payment/routes.js";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.dbUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/test";

        this.middlewares();
        this.routes();
        this.connectDB();
    }

    middlewares() {
        this.app.use(express.json());
    }

    connectDB = async () => {
        try {
            await mongoose.connect(this.dbUrl);
            console.log("Conectado a la base de datos MongoDB");
        } catch (err) {
            console.log("Error al conectar a la base de datos MongoDB");
        }
    };

    routes() {
        this.app.use("/api/users", userRoutes);
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/users/courses", coursesRoutes);
        this.app.use("/api/users/courses/purchase-orders", purchaseOrdersRoutes);
        this.app.use("/api/users/courses/coupons", couponsRoutes);
        this.app.use("/api/users/courses/payments", routerPayment);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando servidor en el puerto ${this.port}`);
        });
    }
}

export default Server;