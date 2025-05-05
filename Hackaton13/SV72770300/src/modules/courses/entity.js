import mongoose from "../../config/db/index.js";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    nombre: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    portada: { type: Boolean },
    valor: { type: Number, required: true },
});

const CoursesModel = mongoose.model("Courses", CourseSchema);

export default CoursesModel;