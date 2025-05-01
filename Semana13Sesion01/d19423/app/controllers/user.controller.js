const db = require('../models');
const User = db.user;

exports.allAccess = (req,res)=>{
    res.status(200).send('Contenido Public');
}

exports.onlyUser = (req,res)=>{
    let username = '';
     User.findById(req.userId).then(data=>{
        username = data.username;
        res.status(200).send({message: `Hola ${username}`});
    });
}

exports.onlyModerator = (req,res)=>{
    res.status(200).send('Contenido del Moderador');
}

exports.onlyAdmin = (req,res)=>{
    res.status(200).send('Contenido de Admin');
}