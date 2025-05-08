const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

const server = require('http').Server(app);
const webSocketServer = require('websocket').server;
const wsServer = new webSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

app.use(express.static(path.join(__dirname, './public')));
app.set("port", 8000);


function originIsAllowed(origin) {
    if (origin === 'http://localhost:8000')
        return true;
    else
        return false;
}

wsServer.on("request", (request) => {
    if (!originIsAllowed(request.origin)) {
        request.reject();
        console.log(
            `${new Date()} La conexion del origen ${request.origin} ha sido rechazada`
        );
        return;
    }
    const connection = request.accept(null, request.origin);
    connection.on("message", (message) => {
        console.log(message.utf8Data);
        let objMensaje = JSON.parse(message.utf8Data);
        objMensaje.answer = "Consultando"
        switch (objMensaje.message) {
            case "clima":
                
                connection.sendUTF(objMensaje);
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: `https://the-weather-api.p.rapidapi.com/api/weather/${objMensaje.query}`,
                    headers: {
                        'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
                        'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
                    }
                };
                axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));
                        objMensaje.answer = response.data.data
                        connection.sendUTF(JSON.stringify(objMensaje))
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                break;

            default:
                connection.sendUTF(JSON.stringify(objMensaje));
                break;
        }
    })
})




server.listen(8000, () => {
    console.log("Escuchando el puerto " + app.get("port"));
})