const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { isModerator, isAdmin } = require('../middleware/roles');
const courseController = require('../controllers/courseController');

router.get('/', courseController.getAllCourses);

router.post('/', [auth, isModerator], courseController.createCourse);

router.put('/:id', [auth, isModerator], courseController.updateCourse);

router.delete('/:id', [auth, isAdmin], courseController.deleteCourse);

module.exports = router;