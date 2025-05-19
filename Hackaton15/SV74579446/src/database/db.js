
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '12345', 
  database: 'curierdb'             
});

connection.connect((err) => {
  if (err) {
    console.error(' Error al conectar a la BD:', err);
    return;
  }
  console.log(' Conexión a MySQL exitosa');
});

module.exports = connection;
