import dotenv from "dotenv";
dotenv.config();

import Server from "./server/index.js";

const server = new Server();

server.listen();