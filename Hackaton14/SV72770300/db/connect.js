import { connect } from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
    try {
        await connect(config.MONGODB_URI)
        console.log("MongoDB conectado");
    } catch (error) {
        console.log(error, "MongoDB no conectado");
    }
}
