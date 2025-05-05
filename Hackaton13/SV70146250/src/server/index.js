import express from "express";
 import mongoose from "../config/db/index.js";
 
 class Server {
   constructor() {
     this.app = express();
     this.port = process.env.PORT || 3000;
     this.dbUrl = process.env.MONGODB_URL || "mongodb://localhost:27017/test";
 
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
       console.log("MongoDb connected");
     } catch (err) {
       console.log("error in connect");
     }
   };
 
   routes() {}
 
   listen() {
     this.app.listen(this.port, () => {
       console.log(`Listening on port ${this.port} Ready!`);
     });
   }
 }
 export default Server;