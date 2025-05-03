const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db ={};

db.mongoose = mongoose;
db.user = require('./user.model');
db.role = require('./role.model');

db.ROLES = ['admin', 'moderator','user'];

db.init = ()=>{
    db.role.estimatedDocumentCount((err,count)=>{
        if(!err & count === 0){
            db.ROLES.forEach(element=>{
                new db.role({
                    name: element
                }).save(error=>{
                    if(error){
                        console.log(`Error al crear el Rol: ${element}`);
                    }
                    console.log(`Role ${element} creado`);
                })
            })
        }
    })
}

module.exports = db;