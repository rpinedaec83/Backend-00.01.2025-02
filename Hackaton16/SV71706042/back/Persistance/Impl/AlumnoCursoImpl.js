const db = require('../../config/db');
const AlumnoCurso = require('../../Domain/AlumnoCurso');

class AlumnoCursoImpl {
  /**
   * Inserta una inscripción de alumno a curso en la base de datos.
   * @param {AlumnoCurso} alumnoCurso
   * @returns {Promise<number>} 1 si fue exitoso, 0 si falló
   */
  insertar(alumnoCurso) {
    const query = `
      INSERT INTO alumnos_cursos (
        alumno_id, curso_id, fecha_inscripcion, estado
      ) VALUES (?, ?, ?, ?)
    `;

    const values = [
      alumnoCurso.alumnoId,
      alumnoCurso.cursoId,
      alumnoCurso.fechaInscripcion,
      alumnoCurso.estado
    ];

    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('❌ Error al insertar inscripción:', err);
          return reject(err);
        }
        return resolve(result.affectedRows === 1 ? 1 : 0);
      });
    });
  }

  /**
   * Verifica si un alumno ya está inscrito en un curso específico.
   * @param {string} alumnoId 
   * @param {string} cursoId 
   * @returns {Promise<boolean>} true si ya está inscrito, false si no
   */
  estaInscrito(alumnoId, cursoId) {
    const query = 'SELECT COUNT(*) as count FROM alumnos_cursos WHERE alumno_id = ? AND curso_id = ?';
    
    return new Promise((resolve, reject) => {
      db.query(query, [alumnoId, cursoId], (err, result) => {
        if (err) {
          console.error('❌ Error al verificar inscripción:', err);
          return reject(err);
        }
        resolve(result[0].count > 0);
      });
    });
  }
}

module.exports = AlumnoCursoImpl;