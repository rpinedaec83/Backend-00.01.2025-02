require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Nuevo Usuario conectado");
    socket.on("disconnect", () => { console.log("Usuario desconectado"); })
    socket.on("sendMessage", (message, callback) => {
        try {
            console.log(message);
            switch (message) {
                case "clima":
                    let config = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: 'https://the-weather-api.p.rapidapi.com/api/weather/lima',
                        headers: {
                            'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
                            'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
                        }
                    };
                    axios.request(config)
                        .then((response) => {
                            console.log(JSON.stringify(response.data));
                            socket.emit("message", JSON.stringify(response.data));
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                    break;

                default:
                    socket.emit("message", message);
                    break;
            }
            callback();
        } catch (error) {
            console.error(error);
        }
    })
})


server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})