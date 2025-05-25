/**
 * @typedef {Object} CursoFrontDAO
 * @property {(cursoFront: CursoFront) => Promise<number>} insertar - Inserta un CursoFront y retorna 1 si fue exitoso, 0 si no.
 * @property {(id: string) => Promise<CursoFront | null>} obtenerCurso - Obtiene un CursoFront por ID, o null si no existe.
 * @property {(cursoFront: CursoFront) => Promise<number>} actualizar - Actualiza un CursoFront, retorna 1 si fue exitoso, 0 si falló.
 * @property {(id: string) => Promise<number>} eliminar - Elimina un CursoFront por ID, retorna 1 si fue exitoso, 0 si falló.
 */
