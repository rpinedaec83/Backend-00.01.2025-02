require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// modelo de Compra
const purchaseSchema = new mongoose.Schema({
  product: String,
  description: String,
  amount: Number,
  unit: String,
  date: String,
  completed: { type: Boolean, default: false }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

// Obtener todas las compras
app.get('/api/purchases', async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json({ purchases });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener compras' });
  }
});

// Registrar nueva compra
app.post('/api/purchases', async (req, res) => {
  try {
    const { product, description, amount, unit, date } = req.body;
    const newPurchase = new Purchase({ product, description, amount, unit, date });
    await newPurchase.save();
    res.status(201).json({ message: 'Compra registrada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar la compra' });
  }
});

// Marcar compra como completada
app.patch('/api/purchases/update', async (req, res) => {
  try {
    const { id } = req.body;
    await Purchase.findByIdAndUpdate(id, { completed: true });
    res.json({ message: 'Compra marcada como completada' });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la compra' });
  }
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
