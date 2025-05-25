const Curso = require('./Curso');
class CursoFront extends Curso {
  constructor(id, precio, capacidad, fechaInicio, fechaFin, costo, alumnosInscritos = [], numeroMatriculas = 0,activo,tecnologiasFrontend,requiereExperiencia) {
    super(id, "Curso Frontend", precio, capacidad, fechaInicio, fechaFin, costo, alumnosInscritos, numeroMatriculas, activo);
    this.tecnologiasFrontend = tecnologiasFrontend; // Ej: ["HTML", "CSS", "React"]
    this.requiereExperiencia = requiereExperiencia; // Booleano
  }
}
module.exports = CursoFront;