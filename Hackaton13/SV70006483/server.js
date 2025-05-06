const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Conectar a MongoDB
mongoose.connect(process.env.mongoURI)
  .then(() => console.log('MongoDB conectado...'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'storage'
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Función para obtener las rutas de un archivo
function getRoutes(routeModule) {
  if (!routeModule.stack) {
    return [];
  }
  
  return routeModule.stack
    .filter(layer => layer.route)
    .map(layer => {
      const path = layer.route.path;
      const methods = Object.keys(layer.route.methods)
        .filter(method => layer.route.methods[method])
        .map(method => method.toUpperCase());
      
      // Asegúrate de que la descripción se capture correctamente
      const description = layer.route.description || 'No hay descripción disponible';
      
      return {
        path: path,
        methods: methods,
        description: description
      };
    });
}

// Importar rutas
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const orderRoutes = require('./routes/orders');
const couponRoutes = require('./routes/coupons');

// Usar rutas
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupons', couponRoutes);

// Ruta de introducción
app.get('/', (req, res) => {
  const apiInfo = {
    message: "Bienvenido a la API de Cursos Online",
    version: "1.0.0",
    baseUrl: `http://${req.headers.host}`, // Añadimos la URL base
    endpoints: {
      auth: {
        base: "/api/auth",
        description: "Endpoints para autenticación y manejo de usuarios",
        routes: getRoutes(authRoutes)
      },
      courses: {
        base: "/api/courses",
        description: "Gestión de cursos y contenido educativo",
        routes: getRoutes(courseRoutes)
      },
      orders: {
        base: "/api/orders",
        description: "Manejo de órdenes y transacciones",
        routes: getRoutes(orderRoutes)
      },
      coupons: {
        base: "/api/coupons",
        description: "Administración de cupones y descuentos",
        routes: getRoutes(couponRoutes)
      }
    },
    documentation: "/api/docs"
  };

  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API de Cursos Online</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    h1 {
      text-align: center;
    }
    .container {
      background-color: #fff;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .endpoint {
      margin-bottom: 30px;
      border-bottom: 2px solid #eee;
      padding-bottom: 20px;
    }
    .endpoint-description {
      font-style: italic;
      color: #7f8c8d;
      margin-bottom: 15px;
    }
    .route {
      background-color: #ecf0f1;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
    }
    .method {
      font-weight: bold;
      color: #e74c3c;
      margin-right: 10px;
    }
    .path {
      color: #2980b9;
      font-family: monospace;
      font-size: 1.1em;
    }
    .route-description {
      margin-top: 10px;
      font-size: 0.95em;
      color: #34495e;
    }
    .url {
      background-color: #f1f1f1;
      padding: 5px 10px;
      border-radius: 3px;
      font-family: monospace;
      font-size: 0.9em;
      word-break: break-all;
    }
    .copy-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.8em;
      margin-left: 10px;
    }
    .copy-btn:hover {
      background-color: #2980b9;
    }
    .documentation {
      text-align: center;
      margin-top: 30px;
    }
    .documentation a {
      color: #3498db;
      text-decoration: none;
      font-weight: bold;
    }
    .documentation a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${apiInfo.message}</h1>
    <p><strong>Versión:</strong> ${apiInfo.version}</p>
    
    ${Object.entries(apiInfo.endpoints).map(([key, value]) => `
      <div class="endpoint">
        <h2>${key.charAt(0).toUpperCase() + key.slice(1)}</h2>
        <p class="endpoint-description">${value.description}</p>
        <p><strong>Base URL:</strong> ${value.base}</p>
        ${value.routes.map(route => `
          <div class="route">
            <h3>
              <span class="method">${route.methods.join(', ')}</span>
              <span class="path">${value.base}${route.path}</span>
            </h3>
            <p class="route-description">${route.description}</p>
            <div>
              <span class="url">${apiInfo.baseUrl}${value.base}${route.path}</span>
              <button class="copy-btn" onclick="copyToClipboard('${apiInfo.baseUrl}${value.base}${route.path}')">Copiar URL</button>
            </div>
          </div>
        `).join('')}
      </div>
    `).join('')}
    
    <div class="documentation">
      <a href="${apiInfo.documentation}">Ver Documentación Completa</a>
    </div>
  </div>

  <script>
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('URL copiada al portapapeles');
      }, (err) => {
        console.error('Error al copiar: ', err);
      });
    }
  </script>
</body>
</html>
`;

  res.send(html);
});

// Manejador de errores y rutas no encontradas
app.use((req, res, next) => {
  console.log(`Ruta no encontrada: ${req.method} ${req.url}`);
  res.status(404).send('Ruta no encontrada');
});

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  console.error(`Ruta: ${req.method} ${req.url}`);
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));