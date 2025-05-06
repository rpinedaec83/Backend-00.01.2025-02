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


function originIsAllowed(origin){
    if(origin === 'http://localhost:8000')
        return true;
    else
        return false;
}

wsServer.on("request", (request)=>{
    if(!originIsAllowed(request.origin)){
        request.reject();
        console.log(
            `${new Date()} La conexion del origen ${request.origin} ha sido rechazada`
        );
        return;
    }
    const connection = request.accept(null,request.origin);
    connection.on("message", (message)=>{
        console.log(message.utf8Data);

        connection.sendUTF(message.utf8Data);
    })
})




server.listen(8000,()=>{
    console.log("Escuchando el puerto "+app.get("port"));
})