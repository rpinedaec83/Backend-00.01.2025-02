
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '123456', 
  database: 'curierdb'             
});

connection.connect((err) => {
  if (err) {
    console.error(' No es posible conectar a la Base de datos:', err);
    return;
  }
  console.log(' Conexión a MySQL con exito');
});

module.exports = connection;
