const Curso = require('./Curso');
class CursoBack extends Curso {
  constructor(id, nombre, precio, capacidad, fechaInicio, fechaFin, costo, alumnosInscritos = [], numeroMatriculas = 0,activo,tecnologiasBackend,incluyeProyectoFinal) {
    super(id, "Curso Backend", precio, capacidad, fechaInicio, fechaFin, costo, alumnosInscritos, numeroMatriculas,activo);
    this.tecnologiasBackend = tecnologiasBackend; // Ej: ["Node.js", "Express"]
    this.incluyeProyectoFinal = incluyeProyectoFinal; // Booleano
  }
}
module.exports = CursoBack;