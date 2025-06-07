const express = require('express');
const Joi = require('joi');
const Course = require('../models/Course');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();

// Esquema de validación
const courseSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  img: Joi.string().uri().required(),
  portada: Joi.string().uri().required(),
  valor: Joi.number().min(0).required()
});

// Obtener todos los cursos (público) - VISTA
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const query = { isActive: true };

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const courses = await Course.find(query)
      .populate('createdBy', 'firstName lastName')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Course.countDocuments(query);

    res.render('courses/list', {
      title: 'Listado de Cursos',
      courses,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
      user: req.user // Pasamos el usuario si está autenticado
    });
  } catch (error) {
    res.render('error', { 
      error: error.message,
      message: 'Error al cargar los cursos'
    });
  }
});

// Obtener curso por ID (público) - VISTA
router.get('/:id/detalle', async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id, isActive: true })
      .populate('createdBy', 'firstName lastName');

    if (!course) {
      return res.status(404).render('error', { 
        error: 'Curso no encontrado',
        message: 'El curso solicitado no existe o ha sido eliminado'
      });
    }

    res.render('courses/detail', {
      title: course.name,
      course,
      user: req.user
    });
  } catch (error) {
    res.render('error', { 
      error: error.message,
      message: 'Error al cargar el curso'
    });
  }
});

// Mostrar formulario de creación (solo moderadores) - VISTA
router.get('/nuevo', auth, requireRole(['moderador', 'admin']), (req, res) => {
  res.render('courses/create', {
    title: 'Crear Nuevo Curso',
    user: req.user
  });
});

// Procesar creación de curso (solo moderadores)
router.post('/', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { error, value } = courseSchema.validate(req.body);
    if (error) {
      req.flash('error', error.details[0].message);
      return res.redirect('/courses/nuevo');
    }

    const course = new Course({
      ...value,
      createdBy: req.user._id
    });

    await course.save();
    req.flash('success', 'Curso creado exitosamente');
    res.redirect(`/courses/${course._id}/detalle`);
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/courses/nuevo');
  }
});

// Mostrar formulario de edición (solo moderadores) - VISTA
router.get('/:id/editar', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id, isActive: true });

    if (!course) {
      req.flash('error', 'Curso no encontrado');
      return res.redirect('/courses');
    }

    res.render('courses/edit', {
      title: `Editar ${course.name}`,
      course,
      user: req.user
    });
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/courses');
  }
});

// Procesar actualización de curso (solo moderadores)
router.put('/:id', auth, requireRole(['moderador', 'admin']), async (req, res) => {
  try {
    const { error, value } = courseSchema.validate(req.body);
    if (error) {
      req.flash('error', error.details[0].message);
      return res.redirect(`/courses/${req.params.id}/editar`);
    }

    const course = await Course.findOneAndUpdate(
      { _id: req.params.id, isActive: true },
      value,
      { new: true, runValidators: true }
    );

    if (!course) {
      req.flash('error', 'Curso no encontrado');
      return res.redirect('/courses');
    }

    req.flash('success', 'Curso actualizado exitosamente');
    res.redirect(`/courses/${course._id}/detalle`);
  } catch (error) {
    req.flash('error', error.message);
    res.redirect(`/courses/${req.params.id}/editar`);
  }
});

// Eliminar curso (solo admins) - VISTA DE CONFIRMACIÓN
router.get('/:id/eliminar', auth, requireRole(['admin']), async (req, res) => {
  try {
    const course = await Course.findOne({ _id: req.params.id, isActive: true });

    if (!course) {
      req.flash('error', 'Curso no encontrado');
      return res.redirect('/courses');
    }

    res.render('courses/confirm-delete', {
      title: `Eliminar ${course.name}`,
      course,
      user: req.user
    });
  } catch (error) {
    req.flash('error', error.message);
    res.redirect('/courses');
  }
});

// Procesar eliminación de curso (solo admins)
router.delete('/:id', auth, requireRole(['admin']), async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: req.params.id, isActive: true },
      { isActive: false },
      { new: true }
    );

    if (!course) {
      req.flash('error', 'Curso no encontrado');
      return res.redirect('/courses');
    }

    req.flash('success', 'Curso eliminado exitosamente');
    res.redirect('/courses');
  } catch (error) {
    req.flash('error', error.message);
    res.redirect(`/courses/${req.params.id}/eliminar`);
  }
});

module.exports = router;