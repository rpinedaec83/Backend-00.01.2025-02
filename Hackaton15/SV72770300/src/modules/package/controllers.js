import { request, response } from "express";
import PackageModel from "./entity.js";

const getAllPackages = async (req = request, resp = response) => {
    try {
        const packages = await PackageModel.findAll();
        return resp.status(200).json({
            message: "Paquetes obtenidos con éxito",
            users: packages
        });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al obtener los paquetes",
            error: error.message
        });
    }
};

const createPackage = async (req = request, resp = response) => {
    try {

        if (req.user.role !== 'admin') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const newPackage = await PackageModel.create(req.body);
        await newPackage.save();
        resp.status(201).json({
            message: "Paquete creado con éxito",
            user: newPackage
        });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al crear el paquete",
            error: error.message
        });
    }
};

const updatePackage = async (req = request, resp = response) => {
    try {

        if (req.user.role !== 'admin') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { idPackage } = req.params;
        const [updated] = await PackageModel.update(req.body, { 
            where: { id: idPackage } 
        });

        if (updated === 0) 
            return resp.status(404).json({ 
                message: "No encontrado" 
            });

        const updatedPackage = await PackageModel.findByPk(idPackage);

        resp.json({ 
            message: "Paquete actualizado con éxito",
            user: updatedPackage,
        });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al actualizar el paquete",
            error: error.message
        });
    }
};

const deletePackage = async (req = request, resp = response) => {
    try {
        if (req.user.role !== 'admin') {
            return resp.status(401).json({
                message: "No tiene permisos para realizar esta acción"
            });
        }

        const { idPackage } = req.params;
        const deleted = await PackageModel.destroy({
            where: { id: idPackage }
        });

        if (deleted === 0) {
            return resp.status(404).json({
                message: "Paquete no encontrado"
            });
        }

        resp.json({
            message: "Paquete eliminado con éxito"
        });
    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al eliminar el paquete",
            error: error.message
        });
    }
};

export {
    getAllPackages,
    createPackage,
    updatePackage,
    deletePackage
}