const UserModel = require('../models/user.model');
const crypto = require('crypto');

//controller para traer todos los usuarios
exports.list = (req,res)=>{
    UserModel.list().then((results)=>{
        res.status(200).send(results)
    }).catch(error=>{
        res.status(500).send({message: error});
    })
}


//controller para insertar un usuario
exports.insert = (req,res)=>{
    //metodos para encriptar la contrasena
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest('base64');
    //reemplazamos la contrasena con el nuevo encriptado
    req.body.password = salt+'$'+hash;

    //llamamos al model para insertar el nuevo usuario
    UserModel.createUser(req.body).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send({message:error});
    })
}

exports.getById = (req,res)=>{
    //buscamos el usuario por id y lo devolvemos
    UserModel.findById(req.params.userId).then(data=>{
        res.status(200).send(data);
    }).catch(error=>{
        res.status(500).send({message:error});
    })
}