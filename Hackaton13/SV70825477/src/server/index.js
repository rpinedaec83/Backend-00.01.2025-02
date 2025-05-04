import express from "express";
import mongoose from "../config/db/index.js";
import userRoutes from "../modules/users/routes.js";
import authRoutes from "../modules/auth/routes.js";

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
    //configurar de json

    this.app.use(express.json());
  }

  connectDB = async () => {
    try {
      await mongoose.connect(this.dbUrl);
      console.log("MongoDb connected");
    } catch (err) {
      console.log("error in connect");
    }
  };

  routes() {
    this.app.use("/users", userRoutes);
    this.app.use("/auth", authRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port} 🚀`);
    });
  }
}
export default Server;
