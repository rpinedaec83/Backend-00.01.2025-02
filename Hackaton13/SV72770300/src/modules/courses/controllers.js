import { request, response } from "express";
import CoursesModel from "./entity.js";

const getAllCourses = async (req = request, resp = response) => {

    try {
        
        const courses = await CoursesModel.find();
        return resp.status(200).json({
            message: "Cursos obtenidos con éxito",
            coupons: courses
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al obtener los cursos",
            error: error.message
        });
    }
}

const createCourses = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { nombre, descripcion, img, portada, valor } = req.body;

        if (!nombre || !valor) {
            return resp.status(400).json({
                message: "Todos los campos son obligatorios",
            });
        }

        const newCourse = await CoursesModel.create({
            nombre: nombre,
            description: descripcion,
            img: img,
            portada: portada,
            valor: valor,
        });

        const savedCourse = await newCourse.save();

        return resp.status(200).json({
            message: "Curso creado con éxito",
            coupon: savedCourse
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al crear el curso",
            error: error.message
        });
    }
};

const updateCourses = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'moderador') {
            return resp.status(401).json({ 
                message: "No tiene permisos para realizar esta acción" 
            });
        }

        const { courseId } = req.params;
        const { ...rest } = req.body;

        const updateCourse = await CoursesModel.findByIdAndUpdate(courseId, { ...rest });

        if (!updateCourse) {
            return resp.status(400).json({
                message: "Curso no encontrado"
            });
        }

        return resp.status(200).json({
            message: "Curso actualizado con éxito",
            coupon: updateCourse,
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al actualizar el curso",
            error: error.message
        });
    }
};

const deleteCourses = async (req = request, resp = response) => {

    try {

        if (req.user.role !== 'admin') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { courseId } = req.params;

        const deleteCourse = await CoursesModel.findByIdAndDelete(courseId);

        if (!deleteCourse) {
            return resp.status(400).json({
                message: "Curso no encontrado"
            });
        }

        return resp.status(200).json({
            message: "Curso eliminado con éxito"
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al eliminar el curso",
            error: error.message
        });
    }
}

export {
    getAllCourses,
    createCourses,
    updateCourses,
    deleteCourses,
};