import express from "express";
import { fileURLToPath } from "url";
import { createServer } from "http";
import path, { dirname } from "path";
import { Server as SocketServer } from "socket.io";
import sequelize from "../config/db/index.js";

import authRoutes from "../auth/routes.js";
import userRoutes from "../modules/user/routes.js"
import stripeRoutes from "../services/stripe/routes.js"

class Server {
    constructor() {
        this._dirname = dirname(fileURLToPath(import.meta.url))

        this.port = process.env.PORT || 8080;
        this.app = express();
        this.server = createServer(this.app);
        this.io = new SocketServer(this.server);

        this.middlewares();
        this.routes();
        this.connectDB();
        this.socket();
    }

    middlewares() {
        this.app.use(
            "/api/stripe/webhook",
            express.raw({ type: "application/json" }),
            (req, res, next) => {
                req.rawBody = req.body;
                next();
            }
        );

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use(express.static(path.join(this._dirname, "../public")));
    }

    connectDB = async () => {
        try {
            await sequelize.authenticate();
            await sequelize.sync()
            console.log("Conectado a la BD");
        } catch (error) {
            console.log("Error de conexión a la BD");
        }
    };

    routes() {
        this.app.get("/success", (req, res) => {
            res.send("¡Pago completado con éxito!");
        });
        this.app.use("/api/user", userRoutes);
        this.app.use("/api/auth", authRoutes);
        this.app.use("/api/stripe", stripeRoutes)
    }

    socket() {
        this.io.on("connection", (socket) => {
            socket.on("chat message:client", async (msg) => {
                try {
                    if (!msg.message || msg.message.trim() === "") throw new Error("Mensaje vacío");

                    const savedMessage = await MessageModel.create({
                        email: msg.email,
                        message: msg.message,
                    });

                    this.io.emit("chat message:server", savedMessage);
                } catch (error) {
                    console.error("Error al guardar mensaje:", error);
                    socket.emit("error message:server", { message: error.message });
                }
            });
        });
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Escuchando servidor en el puerto ${this.port}`);
        });
    }
}

export default Server;