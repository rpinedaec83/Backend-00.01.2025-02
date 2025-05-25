const db = require('../../config/db/index'); // tu conexión existente
const CursoBack = require('../../Domain/CursoBack'); // tu clase de dominio

class CursoBackImpl {
  /**
   * Inserta un CursoBack en la base de datos.
   * @param {CursoBack} cursoBack
   * @returns {Promise<number>} 1 si fue exitoso, 0 si falló
   */
  async insertar(cursoBack) {
    const query = `
      INSERT INTO cursos_back (
        id, nombre, precio, capacidad, fecha_inicio, fecha_fin, costo,
        numero_matriculas,  incluye_proyecto_final
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      cursoBack.id,
      cursoBack.nombre,
      cursoBack.precio,
      cursoBack.capacidad,
      cursoBack.fechaInicio,
      cursoBack.fechaFin,
      cursoBack.costo,
      cursoBack.numeroMatriculas,
      cursoBack.incluyeProyectoFinal
    ];

    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('Error al insertar CursoBack:', err);
          return reject(err); 
        }

        return resolve(result.affectedRows === 1 ? 1 : 0);
      });
    });

  }
}

module.exports = CursoBackImpl;
