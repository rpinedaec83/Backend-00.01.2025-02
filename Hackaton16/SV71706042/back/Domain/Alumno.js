class Alumno {
  constructor(id, nombres, apellidos, correo, telefono, fechaNacimiento, cursosInscrito = [], contraseña = '',activo) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
    this.cursosInscrito = cursosInscrito; // array de IDs de cursos
    this.contraseña = contraseña; // string (encriptada más adelante)
    this.activo = activo;
  }
}

module.exports = Alumno;
