import dotenv from "dotenv";
dotenv.config();

import Server from "./server/index.js";

// Crea una instancia del servidor
const server = new Server();

// Inicia el servidor
server.listen();