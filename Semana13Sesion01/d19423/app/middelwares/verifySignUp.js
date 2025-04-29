const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateEmail = (req,res,next)=>{
    User.findOne({
        email: req.body.email
    }).exec((err,user)=>{
        if(err){
            res.status(500).send({message:err});
        }
        if(user){
            res.status(400).send({message:"El email ya esta en uso"});
        }
        next();
    })
};

checkRolesExisted =(req,res,next)=>{
    if(req.body.roles){
        for (let index = 0; index < req.body.roles.length; index++) {
            const element = req.body.roles[index];
            if(!ROLES.includes(element)){
                res.status(400).send({
                    message: `El rol ${element} no existe en la lista de roles`
                });
            }
        }
        
    }
    next();
}

const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExisted
};

module.exports = verifySignUp;