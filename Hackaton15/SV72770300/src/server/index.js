import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import  path, { dirname } from "path";
import { Server as SocketServer } from "socket.io";
import { sequelize } from "../config/db/index.js";
import "../config/db/models.js";

import userRoutes from "../modules/user/routes.js";
import authRoutes from "../modules/auth/routes.js";
import packageRoutes from "../modules/package/routes.js";

import MessageModel from "../modules/message/entity.js";


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
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(this._dirname, "../public")))
    }

    connectDB = async () => {
        try {
            await sequelize.authenticate();
            await sequelize.sync()
        console.log("Éxito al conectarse a la base de datos");
        } catch (error) {
            console.log("Error al conectarse a la base de datos");
        }
    };

    routes() {
        this.app.use("/user", userRoutes);
        this.app.use("/auth", authRoutes);
        this.app.use("/package", packageRoutes);
        this.app.get('/api/messages/:email', async (req, res) => {
            const { email } = req.params;
            try {
                const messages = await MessageModel.findAll({
                    where: { email },
                    order: [['createdAt', 'ASC']]
                });
                res.json(messages);
            } catch (error) {
                res.status(500).json({ error: 'Error al obtener mensajes' });
            }
        });
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