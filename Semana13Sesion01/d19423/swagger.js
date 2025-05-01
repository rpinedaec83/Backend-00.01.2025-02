const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config();

const doc = {
    info: {
        title: 'API de Login',
        description: 'Documentación de la API para la gestión de login',
    },
    host: `localhost:${process.env.PORT}`,
    schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js']; // Cambia este archivo según el punto de entrada de tu API

swaggerAutogen(outputFile, endpointsFiles,doc).then(() => {
    require('./server'); // Inicia el servidor automáticamente
});