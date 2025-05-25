class Curso {
  constructor(id, nombre, precio, capacidad, fechaInicio, fechaFin, costo, alumnosInscritos = [], numeroMatriculas = 0,activo) {
    this.alumnosInscritos = alumnosInscritos; // Array de IDs de alumnos inscritos
    this.numeroMatriculas = numeroMatriculas;
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.capacidad = capacidad;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.costo = costo;
    this.activo=activo;
  }
}	
module.exports = Curso;