/**
 * @typedef {Object} AlumnoCursoDAO
 * @property {(ac: AlumnoCurso) => Promise<number>} insertar - Inserta una inscripción.
 * @property {(id: string) => Promise<AlumnoCurso | null>} obtenerPorId - Busca inscripción por ID.
 * @property {(alumnoId: string) => Promise<AlumnoCurso[]>} listarCursosDeAlumno - Devuelve cursos por alumno.
 * @property {(cursoId: string) => Promise<AlumnoCurso[]>} listarAlumnosDelCurso - Devuelve alumnos por curso.
 * @property {(ac: AlumnoCurso) => Promise<number>} actualizar - Actualiza inscripción.
 * @property {(id: string) => Promise<number>} eliminar - Baja lógica de inscripción.
 */
