const express = require('express');
const path = require('path');
const app = express();

const server = require('http').Server(app);
const webSocketServer = require('websocket').server;
const wsServer = new webSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

app.use(express.static(path.join(__dirname,'./public')));
app.set("port",8000);

server.listen(8000,()=>{
    console.log("Escuchando el puerto "+app.get("port"));
})