/**
 * @typedef {Object} CursoBackDAO
 * @property {(cursoBack: CursoBack) => Promise<number>} insertar - Inserta un CursoBack y retorna 1 si fue exitoso, 0 si no.
 * @property {(id: string) => Promise<CursoBack | null>} obtenerCurso - Obtiene un CursoBack por ID, o null si no existe.
 * @property {(cursoBack: CursoBack) => Promise<number>} actualizar - Actualiza un CursoBack, retorna 1 si fue exitoso, 0 si falló.
 * @property {(id: string) => Promise<number>} eliminar - Elimina un CursoBack por ID, retorna 1 si fue exitoso, 0 si falló.
 */
