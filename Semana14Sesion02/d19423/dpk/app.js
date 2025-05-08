require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 8080;
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL;



app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Nuevo Usuario conectado");
    const historialConversacion = [];
    const max_tokens = 1024;
    socket.on("disconnect", () => { console.log("Usuario desconectado"); })
    socket.on("sendMessage", async (message, callback) => {
        historialConversacion.push({
            role: 'system',
            content: `Eres un chatbot de atencion a los estudiantes de la carrera de 
            fotografia y tu nombre es 'Deeppy', tu mision es darles informacion de lentes y configuraciones  para sus camaras
            Tambien debes sugerir los siguientes cursos 'Fotografia de Moda' y 'Fotografia en exteriores' trata de hacer maximo 5 iteraciones con el usuario`
        })
        try {
            console.log(message);
            historialConversacion.push({
                role: 'user',
                content: message
            });
            const response = await axios.post(
                'https://api.deepseek.com/v1/chat/completions',
                {
                  model: DEEPSEEK_MODEL,
                  messages: historialConversacion,
                  max_tokens,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                  },
                }
              );
console.log(response.data.choices[0].message?.content);
            const respuesta = response.data.choices[0].message?.content;
            historialConversacion.push({role:'assistant', content: respuesta})
            socket.emit("message",respuesta);
            callback();
            // switch (message) {
            //     case "clima":
            //         let config = {
            //             method: 'get',
            //             maxBodyLength: Infinity,
            //             url: 'https://the-weather-api.p.rapidapi.com/api/weather/lima',
            //             headers: {
            //                 'X-RapidAPI-Key': '73d70d2c28msh7f79106bce6c25ep19a96ajsn943644966186',
            //                 'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
            //             }
            //         };
            //         axios.request(config)
            //             .then((response) => {
            //                 console.log(JSON.stringify(response.data));
            //                 socket.emit("message", JSON.stringify(response.data));
            //             })
            //             .catch((error) => {
            //                 console.log(error);
            //             });
            //         break;

            //     default:
            //         socket.emit("message", message);
            //         break;
            // }
            callback();
        } catch (error) {
            console.error(error);
        }
    })
})


server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})