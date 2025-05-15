import express from "express";
import { createServer } from "node:http";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on('chat event', (data) => {
    console.log( data);

    // guardar en la base de datos (mensaje, usuario) message
    if(data.message.includes("@botIdat")){
        
        data.username = "OpenIA"
        // metion a openIA para obtener una respuesta
        data.message="Estoy trabajando en tu respuesta"

        // emit evento en lugar de reemplazar
    }

    io.emit('respuesta',data)
    console.log("hpolaa")
    console.log( data);

  });
});

server.listen(3000, () => {
  console.log("server running in port 3000");
});