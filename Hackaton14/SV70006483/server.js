require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const Message = require('./models/Message');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const deepseekApi = axios.create({
  baseURL: 'https://api.deepseek.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    Message.find().sort({ timestamp: 1 }).limit(50).then(messages => {
        socket.emit('cargar mensajes', messages);
    });

    socket.on('mensaje de chat', async (msg) => {
        const message = new Message(msg);
        await message.save();
        io.emit('mensaje de chat', msg);
    });

    socket.on('borrar historial', async () => {
        await Message.deleteMany({});
        io.emit('historial borrado');
    });

    socket.on('editar mensaje', async (data) => {
        const updatedMessage = await Message.findByIdAndUpdate(data.id, { contenido: data.contenido }, { new: true });
        if (updatedMessage) {
            io.emit('mensaje editado', updatedMessage);
        }
    });

    socket.on('mensaje al bot', async (msg) => {
        try {
            const response = await deepseekApi.post('/chat/completions', {
                model: "deepseek-chat",
                messages: [
                    { role: "user", content: msg }
                ],
                max_tokens: 150
            });
            
            const botResponse = response.data.choices[0].message.content.trim();
            const botMessage = new Message({ usuario: 'Bot', contenido: botResponse });
            await botMessage.save();
            io.emit('mensaje de chat', botMessage);
        } catch (error) {
            console.error('Error con la API de Deepseek:', error.response ? error.response.data : error.message);
            const errorMessage = new Message({ 
                usuario: 'Sistema', 
                contenido: 'Ha ocurrido un error al procesar tu solicitud. Por favor, intenta de nuevo.'
            });
            await errorMessage.save();
            io.emit('mensaje de chat', errorMessage);
        }
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));