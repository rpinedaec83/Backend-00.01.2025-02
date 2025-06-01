app.use(express.static('public'));
app.get('/admin/pagos', (req, res) => {
  const query = `
    SELECT pagos.*, usuarios.correo, productos.nombre AS producto_nombre
    FROM pagos
    JOIN usuarios ON pagos.usuario_id = usuarios.id
    JOIN productos ON pagos.producto_id = productos.id
    ORDER BY pagos.fecha DESC
  `;
  db.query(query, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});
