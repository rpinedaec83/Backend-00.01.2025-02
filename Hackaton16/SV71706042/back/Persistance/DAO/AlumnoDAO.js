/**
 * @typedef {Object} AlumnoDAO
 * @property {(alumno: Alumno) => Promise<number>} insertar - Inserta un Alumno y retorna 1 si fue exitoso, 0 si no.
 * @property {(id: string) => Promise<Alumno | null>} obtenerAlumno - Obtiene un Alumno por ID, o null si no existe.
 * @property {(alumno: Alumno) => Promise<number>} actualizar - Actualiza un Alumno, retorna 1 si fue exitoso, 0 si falló.
 * @property {(id: string) => Promise<number>} eliminar - Elimina (lógicamente) un Alumno por ID, retorna 1 si fue exitoso, 0 si falló.
 */
