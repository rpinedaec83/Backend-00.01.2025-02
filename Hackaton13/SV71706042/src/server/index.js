

import express from "express";
import mongoose from "../config/db/index.js";
import userRoutes from "../modules/users/routes.js";

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.dbUrl = process.env.MONGO_URL || "mongodb://27.0.0.1:27017/test";

        this.middlwares();
        this.route();
        this.conectDB();
    }

    middlwares(){
        this.app.use(express.json());

    }
    conectDB = async() => {
        try {
            await mongoose.connect(this.dbUrl);
            console.log("Base de datos conectada correctamente");
        } catch (err) {
            console.log("Error al conectar a la base de datos", err);
        }

    }
    route(){
        this.app.use("/users", userRoutes);
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en el puerto:  ${this.port}`);
        });
    }
    
}
export default Server;