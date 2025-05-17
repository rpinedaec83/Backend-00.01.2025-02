// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas
const authRoutes = require("./app/routes/auth.routes");
app.use("/api/auth", authRoutes);

const cuponRoutes = require("./app/routes/cupon.routes");
app.use("/api/cupones", cuponRoutes);

const cursoRoutes = require("./app/routes/curso.routes");
app.use("/api/cursos", cursoRoutes);

const ordenRoutes = require("./app/routes/orden.routes");
app.use("/api/ordenes", ordenRoutes);

// Rutas base
app.get("/", (req, res) => {
  res.send("API Cursos Online");
});

// Puerto
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Conectado a MongoDB");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
})
.catch(err => console.error("Error de conexión:", err));
