import { Router } from "express";
import { getAllCourses, createCourses, updateCourses, deleteCourses } from "./controllers.js";

import validateJwt from "../../middleware/validate-jwt.js";

const coursesRoutes = Router();

coursesRoutes.get("/", validateJwt, getAllCourses); //Realizar la consulta a la base de datos (Read)
coursesRoutes.post("/", validateJwt, createCourses); //Crear un nuevo curso (Create)
coursesRoutes.patch("/:courseId", validateJwt, updateCourses); //Actualizar un curso (Update)
coursesRoutes.delete("/:courseId", validateJwt, deleteCourses); //Eliminar un curso (Delete)

export default coursesRoutes;