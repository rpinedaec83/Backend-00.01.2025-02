class AlumnoCurso {
  constructor(alumnoId, cursoId, fechaInscripcion, estado = 'inscrito', notaFinal = null, activo = true) {
    this.alumnoId = alumnoId;           // ✅ Debe ser el ID del alumno
    this.cursoId = cursoId;             // ✅ Debe ser el ID del curso  
    this.fechaInscripcion = fechaInscripcion; // ✅ Fecha
    this.estado = estado;               // ✅ Estado
    this.notaFinal = notaFinal;         // ✅ Nota final (opcional)
    this.activo = activo;               // ✅ Activo
  }
}

module.exports = AlumnoCurso;