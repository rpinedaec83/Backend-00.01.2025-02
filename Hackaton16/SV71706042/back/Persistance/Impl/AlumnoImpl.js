const db = require('../../config/db/index');
const Alumno = require('../../Domain/Alumno');

class AlumnoImpl {
  /**
   * Inserta un alumno en la base de datos.
   * @param {Alumno} alumno
   * @returns {Promise<number>} 1 si fue exitoso, 0 si falló
   */
  insertar(alumno) {
    const query = `
      INSERT INTO alumnos (
        id, nombres, apellidos, correo, telefono, fecha_nacimiento,
        cursos_inscrito, contraseña, activo
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      alumno.id,
      alumno.nombres,
      alumno.apellidos,
      alumno.correo,
      alumno.telefono,
      alumno.fechaNacimiento,
      JSON.stringify(alumno.cursosInscrito),
      alumno.contraseña,
      alumno.activo
    ];

    return new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          console.error('❌ Error al insertar alumno:', err);
          return reject(err);
        }
        return resolve(result.affectedRows === 1 ? 1 : 0);
      });
    });
  }

  /**
   * Busca un alumno por correo electrónico.
   * @param {string} correo
   * @returns {Promise<Object|null>} Objeto con {id, correo} si existe, null si no existe
   */
  buscarPorCorreo(correo) {
    const query = 'SELECT id, correo FROM alumnos WHERE correo = ?';
    
    return new Promise((resolve, reject) => {
      db.query(query, [correo], (err, result) => {
        if (err) {
          console.error('❌ Error al buscar alumno por correo:', err);
          return reject(err);
        }
        
        // Si encuentra resultados, devuelve el primer alumno, sino null
        resolve(result.length > 0 ? result[0] : null);
      });
    });
  }

  /**
   * Verifica si un alumno existe por correo.
   * @param {string} correo
   * @returns {Promise<boolean>} true si existe, false si no existe
   */
  existePorCorreo(correo) {
    return new Promise((resolve, reject) => {
      this.buscarPorCorreo(correo)
        .then(alumno => resolve(alumno !== null))
        .catch(err => reject(err));
    });
  }
}

module.exports = AlumnoImpl;