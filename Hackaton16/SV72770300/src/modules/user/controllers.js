import { request, response } from "express";
import UserModel from "./entity.js";
import bcryptjs from "bcryptjs";

const getAllUsers = async (req = request, resp = response) => {

    try {
        const users = await UserModel.findAll()

        return resp.status(200).json({
            message: "Usuarios obtenidos con éxito",
            users: users
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al obtener los usuarios",
            error: error.message
        });
    }
}



const createUser = async (req = request, resp = response) => {

    try {
        const { firstName, lastName, password, email, role, userName } = req.body;
    
        const userExists = await UserModel.findOne({ where: { email } });

        if (userExists) {
            return resp.status(400).json({ 
                message: "El correo ya está registrado" 
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const newPassword = await bcryptjs.hash(password, salt);

        const newUser = await UserModel.create({
            firstName: firstName,
            lastName: lastName,
            userName : userName,
            email : email,
            password: newPassword,
            role: role ?? "usuario",
        });

        await newUser.save();

        return resp.json({ 
            message: "Usuario creado con éxito",
            user: newUser
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al crear el usuario",
            error: error.message
        });  
    }
    
};

const updateUser = async (req = request, resp = response) => {

    try {

        const { userId } = req.params;
        const { ...rest } = req.body;

        const [rowsUpdated] = await UserModel.update(
            { ...rest },
            { where: { id: userId } }
        );

        if (rowsUpdated === 0) {
            return resp.status(404).json({
                message: "Usuario no encontrado",
            });
        }

        const updatedUser = await UserModel.findByPk(userId);

        return resp.status(200).json({
            message: "Usuario actualizado con éxito",
            user: updatedUser,
        });

    } catch (error) {
        console.error(error);
        return resp.status(500).json({
            message: "Error al actualizar el usuario",
            error: error.message
        });
    }

};


export { getAllUsers, createUser, updateUser };