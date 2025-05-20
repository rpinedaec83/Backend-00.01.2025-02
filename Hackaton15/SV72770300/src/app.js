import dotenv from "dotenv";
dotenv.config();

import Server from "./server/index.js";

// Crea una instancia del servidor
const newServer = new Server();

// Inicia el servidor
newServer.listen();