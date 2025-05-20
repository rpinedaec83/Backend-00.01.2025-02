  import { request, response } from "express";
  import UserModel from "./entity.js";
  import bcryptjs from "bcryptjs";

  const getAllUsers = async (req = request, resp = response) => {

    try {

      const users = await UserModel.find();

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

      // Validamos que todos los datos esten completos
      if (!username || !password || !email) {
        return resp.status(400).json({
          message: "Todos los campos son obligatorios",
        });
      }

      // Desestructuramos los datos que llegan por body
      const { username, password, email, role } = req.body;

      // Generamos un salt para el hash de la contraseña.
      // El salt es un número aleatorio que se utiliza para generar un hash de la contraseña
      const salt = await bcryptjs.genSalt(10);
      const newPassword = await bcryptjs.hash(password, salt);

      const newUser = await UserModel.create({
        username: username,
        password: newPassword,
        email: email,
        role: role ?? "usuario",
      });

      const savedUser = await newUser.save();

      return resp.status(200).json({
        message: "Usuario creado con éxito",
        coupon: savedUser,
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

      const updateUser = await UserModel.findByIdAndUpdate(userId, { ...rest });

      if (!updateUser) {
        return resp.status(400).json({
          message: "Usuario no encontrado"
        });
      }

      return resp.status(200).json({
        message: "Usuario actualizado con éxito",
        coupon: updateUser,
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