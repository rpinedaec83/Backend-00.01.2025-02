const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables 

const conectarDB = () => {
  return mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado'))
    .catch(err => {
      console.error('Error:', err);
      process.exit(1);
    });
};
module.exports = conectarDB;
