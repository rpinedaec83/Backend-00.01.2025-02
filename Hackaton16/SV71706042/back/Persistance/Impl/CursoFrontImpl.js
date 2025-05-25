const db = require('../../config/db/index'); // conexión existente
const CursoFront = require('../../Domain/CursoFront'); // clase de dominio

class CursoFrontImpl {
  /**
   * Inserta un CursoFront en la base de datos.
   * @param {CursoFront} cursoFront
   * @returns {Promise<number>} 1 si fue exitoso, 0 si falló
   */
  insertar(cursoFront) {
    const query = `
      INSERT INTO cursos_front (
        id, nombre, precio, capacidad, fecha_inicio, fecha_fin, costo,
        numero_matriculas, activo, requiere_experiencia
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      cursoFront.id,
      cursoFront.nombre,
      cursoFront.precio,
      cursoFront.capacidad,
      cursoFront.fechaInicio,
      cursoFront.fechaFin,
      cursoFront.costo,
      cursoFront.numeroMatriculas,
      cursoFront.activo,
      cursoFront.requiereExperiencia
    ];

    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Error al insertar CursoFront:', err);
          return reject(err);
        }

        return resolve(result.affectedRows === 1 ? 1 : 0);
      });
    });
  }
}

module.exports = CursoFrontImpl;
