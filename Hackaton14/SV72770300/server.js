import app from "./app.js";
import http from "http";
import { Server as webSocketServer } from "socket.io";
import dotenv from "dotenv";
import axios from 'axios';
import { config } from "./db/config.js";
import { connectDB } from "./db/connect.js";
import { Message } from "./models/Messages.js";

dotenv.config();
connectDB();

const server = http.createServer(app);
const io = new webSocketServer(server);

io.on("connection", (socket) => {
    console.log("Se ha conectado el usuario");

    socket.on("disconnect", () => {
        console.log("Se ha desconectado el usuario");
    });

    socket.on('server:chatevent', async data => {
        try {
            const isBotMessage = data.message.includes("@botIdat");
            console.log(isBotMessage);
            const cleanMessage = data.message.replace("@botIdat", "").trim();

            if (isBotMessage) {

                const newMessage = new Message({
                    user: data.username,
                    message: cleanMessage
                });

                const savedMessage = await newMessage.save();
                io.emit('server:newMessage', savedMessage);

                io.emit("server:respuesta", {
                    username: "DeepSeekIA",
                    message: "Procesando respuesta"
                });

                const response = await axios.post(
                    'https://api.deepseek.com/v1/chat/completions',
                    {
                        model: "deepseek-chat",
                        messages: [
                            { role: "system", content: "Eres un asistente útil." },
                            { role: "user", content: cleanMessage }
                        ]
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                const botMessage = response.data.choices[0].message.content;

                io.emit("server:respuesta", {
                    username: "DeepSeekIA",
                    message: botMessage
                });
            } else {
                io.emit("server:respuesta", {
                    username: "DeepSeekIA",
                    message: "Tu mensaje debe contener @botIdat para interactuar con el bot."
                });
            }
        } catch (error) {
            console.error("Error al procesar el mensaje", error);
            io.emit("server:respuesta", {
                username: "DeepSeekIA",
                message: "Ocurrió un error procesando tu mensaje"
            });
        }
    });

    socket.on("client:deleteMessage", async (id) => {
        await Message.findByIdAndDelete(id);
    });

    socket.on("client:updateMessage", async (updateMessage) => {
        const updatedMessage = await Message.findByIdAndUpdate(
            updateMessage.id,
            { message: updateMessage.message },
            { new: true }
        );

        socket.emit("server:updatedMessage", updatedMessage);

        if (updateMessage.respuesta) {
            io.emit("server:respuesta", {
                username: "DeepSeekIA",
                message: "Procesando nueva respuesta..."
            });

            try {
                const response = await axios.post(
                    'https://api.deepseek.com/v1/chat/completions',
                    {
                        model: "deepseek-chat",
                        messages: [
                            { role: "system", content: "Eres un asistente útil." },
                            { role: "user", content: updateMessage.message }
                        ]
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                const botMessage = response.data.choices[0].message.content;

                io.emit("server:respuesta", {
                    username: "DeepSeekIA",
                    message: botMessage
                });
            } catch (error) {
                console.error("Error al obtener respuesta del bot tras edición:", error);
                io.emit("server:respuesta", {
                    username: "DeepSeekIA",
                    message: "Ocurrió un error procesando el mensaje editado"
                });
            }
        }
    }
    );
});

server.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${config.PORT}`);
});
