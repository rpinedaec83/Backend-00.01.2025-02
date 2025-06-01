const CursoBack = require('./Domain/CursoBack');
const CursoFront = require('./Domain/CursoFront');
const CursoBackImpl = require('./Persistance/Impl/CursoBackImpl');
const CursoFrontImpl = require('./Persistance/Impl/CursoFrontImpl');
const Alumno = require('./Domain/Alumno');
//node test.js
(async () => {
  const cursoBack = new CursoBack(
    'CB101',                       // id
    'ignorado',                   // nombre (no se usará, el padre fuerza "Curso Backend")
    499.99,                       // precio
    20,                           // capacidad
    '2025-07-01',                 // fechaInicio
    '2025-08-01',                 // fechaFin
    300,                          // costo
    [],                           // alumnosInscritos
    0,                            // numeroMatriculas
    true,                         // activo
    [],                         // tecnologiasBackend (si no se guarda)
    true                          // incluyeProyectoFinal
  );

  const cursoFront = new CursoFront(
    'CF101',                            // id
    399.99,                             // precio
    25,                                 // capacidad
    '2025-06-15',                       // fechaInicio
    '2025-07-15',                       // fechaFin
    250,                                // costo
    [],                                 // alumnosInscritos
    0,                                  // numeroMatriculas
    true,                               // activo
    [],                                 // tecnologiasFrontend
    false                               // requiereExperiencia
  );

  const alumno = new Alumno(
    'A001',                      // id
    'Juan',                     // nombres
    'Pérez',                    // apellidos
    'juan.perez@email.com',     // correo
    '987654321',                // teléfono
    '2000-05-12',               // fechaNacimiento
    ['CB101', 'CF101'],         // cursosInscrito (IDs de cursos)
    'contrasena123',            // contraseña (luego se encripta)
    true                        // activo
  );


  const daoBack = new CursoBackImpl();

  const daoFront = new CursoFrontImpl();

  const resultadoBack = await daoBack.insertar(cursoBack);
  const resultadoFront = await daoFront.insertar(cursoFront);

  console.log(resultadoBack === 1 ? 'Curso Back insertado' : 'Fallo en la inserción del curso Back');
  console.log(resultadoFront === 1 ? 'Curso Front insertado' : 'Fallo en la inserción del curso Front');
  process.exit();
})();
