const Course = require('../models/Course');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Asegurarse de que la carpeta 'storage' exista
const storagePath = path.join(__dirname, '..', 'storage');
if (!fs.existsSync(storagePath)) {
    fs.mkdirSync(storagePath, { recursive: true });
}

// Configuración de Multer
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, storagePath)
    },
    filename(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};

// Create a course
exports.createCourse = [
    upload.single('img'),
    async (req, res) => {
        const { name, description, cover, value } = req.body;

        try {
            let course = new Course({
                name,
                description,
                img: req.file ? `/storage/${req.file.filename}` : '',
                cover,
                value
            });

            await course.save();
            res.json(course);
        } catch (err) {
            console.error(err.message);
            if (req.file) {
                fs.unlinkSync(path.join(storagePath, req.file.filename));
            }
            res.status(500).send('Error del servidor');
        }
    }
];

// Update a course
exports.updateCourse = [
    upload.single('img'),
    async (req, res) => {
        const { name, description, cover, value } = req.body;

        try {
            let course = await Course.findById(req.params.id);

            if (!course) {
                return res.status(404).json({ msg: 'Curso no encontrado' });
            }

            // Si hay una nueva imagen, eliminar la antigua
            if (req.file && course.img) {
                const oldImagePath = path.join(__dirname, '..', course.img);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            course.name = name;
            course.description = description;
            if (req.file) {
                course.img = `/storage/${req.file.filename}`;
            }
            course.cover = cover;
            course.value = value;

            await course.save();
            res.json(course);
        } catch (err) {
            console.error(err.message);
            if (req.file) {
                fs.unlinkSync(path.join(storagePath, req.file.filename));
            }
            res.status(500).send('Error del servidor');
        }
    }
];

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ msg: 'Curso no encontrado' });
    }

    // Eliminar la imagen asociada si existe
    if (course.img) {
      const imagePath = path.join(__dirname, '..', course.img);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Course.deleteOne({ _id: req.params.id });

    res.json({ msg: 'Curso eliminado' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
};