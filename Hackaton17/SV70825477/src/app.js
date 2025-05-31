
import dotenv  from "dotenv";
dotenv.config();

import Server from "./server/index.js"


const newServer = new Server();

newServer.listen();