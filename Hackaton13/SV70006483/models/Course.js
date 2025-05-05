const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  cover: {
    type: String
  },
  value: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Course', CourseSchema);