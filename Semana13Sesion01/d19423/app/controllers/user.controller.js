const db = require('../models');
const User = db.user;

exports.allAccess = (req,res)=>{
    // #swagger.tags = ['Test']
    // #swagger.summary = 'Trae el Contenido Publico'
    // #swagger.description = 'Some description...'
    // #swagger.deprecated = true

    res.status(200).send('Contenido Public');
}

exports.onlyUser = (req,res)=>{
     // #swagger.tags = ['Test']
    let username = '';
     User.findById(req.userId).then(data=>{
        username = data.username;
        res.status(200).send({message: `Hola ${username}`});
    });
}

exports.onlyModerator = (req,res)=>{
     // #swagger.tags = ['Test']
    res.status(200).send('Contenido del Moderador');
}

exports.onlyAdmin = (req,res)=>{
     // #swagger.tags = ['Test']
    res.status(200).send('Contenido de Admin');
}