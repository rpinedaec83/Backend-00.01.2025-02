require('dotenv').config();               // Cargar variables de entorno
require('./config/passport');            // Configurar estrategia de Passport
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const pagoRts = require('./routes/pagoRoutes');
const authRts = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 8000;



const Alumno = require('./Domain/Alumno');
const AlumnoCurso = require('./Domain/AlumnoCurso');
const AlumnoImpl = require('./Persistance/Impl/AlumnoImpl');
const AlumnoCursoImpl = require('./Persistance/Impl/AlumnoCursoImpl');

// ───── MIDDLEWARES ─────
app.use(cors({
  origin: true, // o especifica tu front: 'http://localhost:8000'
  credentials: true
}));
app.use(express.json());

// ───── SESIONES (requerido para Passport) ─────
app.use(session({
  secret: 'clave_secreta_segura', // cámbialo en producción
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// ───── RUTAS API ─────
app.use('/api/pagos', pagoRts);
app.use('/auth', authRts); // Login con Google

// ───── SERVIR FRONTEND ─────
app.use(express.static(path.join(__dirname, '../front')));
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../front/index.html'));
});


// ───── INSCRIPCIÓN ALUMNO ─────
app.post('/inscribir-alumno', async (req, res) => {
  try {
    const { nombres, apellidos, correo, telefono, fechaNacimiento } = req.body;

    // Validar que todos los campos estén presentes
    if (!nombres || !apellidos || !correo || !telefono || !fechaNacimiento) {
      return res.json({
        success: false,
        message: 'Todos los campos son obligatorios'
      });
    }

    const cursoId = 'CB101'; // ID del curso Backend según tu tabla
    const fechaActual = new Date().toISOString().split('T')[0];

    // Crear instancias de los DAOs
    const alumnoDao = new AlumnoImpl();
    const alumnoCursoDao = new AlumnoCursoImpl();

    // 1. VERIFICAR SI EL ALUMNO YA EXISTE POR CORREO
    console.log('🔍 Verificando si el alumno existe con correo:', correo);
    const alumnoExistente = await alumnoDao.buscarPorCorreo(correo);

    let alumnoIdFinal;

    if (alumnoExistente) {
      // 2. EL ALUMNO YA EXISTE - usar su ID
      alumnoIdFinal = alumnoExistente.id;
      console.log('📝 Alumno ya existe con ID:', alumnoIdFinal);
      
      // 3. VERIFICAR SI YA ESTÁ INSCRITO EN ESTE CURSO ESPECÍFICO
      console.log('🔍 Verificando inscripción previa en curso:', cursoId);
      const yaInscrito = await alumnoCursoDao.estaInscrito(alumnoIdFinal, cursoId);

      if (yaInscrito) {
        console.log('⚠️ El alumno ya está inscrito en este curso');
        return res.json({
          success: false,
          message: 'Ya estás inscrito en este curso'
        });
      }

      console.log('✅ El alumno puede inscribirse en este curso');

    } else {
      // 4. EL ALUMNO NO EXISTE - crear uno nuevo
      alumnoIdFinal = 'ALU' + Date.now() + Math.floor(Math.random() * 1000);
      console.log('👤 Creando nuevo alumno con ID:', alumnoIdFinal);
      
      const nuevoAlumno = new Alumno(
        alumnoIdFinal,               // id
        nombres,                     // nombres
        apellidos,                   // apellidos
        correo,                      // correo
        telefono,                    // telefono
        fechaNacimiento,             // fechaNacimiento
        [cursoId],                   // cursosInscrito (array con el curso actual)
        '',                          // contraseña (vacía por ahora)
        true                         // activo
      );

      const resultadoAlumno = await alumnoDao.insertar(nuevoAlumno);
      
      if (resultadoAlumno !== 1) {
        throw new Error('Error al insertar alumno en la base de datos');
      }
      console.log('✅ Nuevo alumno creado con ID:', alumnoIdFinal);
    }

    // 5. CREAR LA INSCRIPCIÓN (tanto para alumnos nuevos como existentes)
    console.log('📝 Creando inscripción al curso para alumno:', alumnoIdFinal);
    
    const nuevaInscripcion = new AlumnoCurso(
      alumnoIdFinal,               // alumnoId
      cursoId,                     // cursoId
      fechaActual,                 // fechaInscripcion
      'inscrito',                  // estado
      null,                        // notaFinal
      true                         // activo
    );

    const resultadoInscripcion = await alumnoCursoDao.insertar(nuevaInscripcion);
    
    if (resultadoInscripcion !== 1) {
      throw new Error('Error al insertar inscripción en la base de datos');
    }

    console.log('🎉 Inscripción completada exitosamente');

    res.json({
      success: true,
      message: 'Inscripción completada exitosamente',
      alumnoId: alumnoIdFinal,
      cursoId: cursoId
    });

  } catch (error) {
    console.error('❌ Error en inscripción:', error);
    
    res.json({
      success: false,
      message: 'Error interno del servidor: ' + error.message
    });
  }
});
// ───── LEVANTAR SERVIDOR ─────
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
