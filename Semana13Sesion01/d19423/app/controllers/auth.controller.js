const db = require('../models');
const Role = require('../models/role.model');
const bcrypt = require('bcrypt');

const User = db.user;

exports.signup= async(req,res)=>{
    try {
        let arrRoles =[];
        if(req.body.roles){
            await Role.find({
                name: {
                    $in: req.body.roles
                 }
            }).then(roles=>{
                arrRoles = roles.map(role=>role._id);
            })
        }
        else{
            await Role.findOne(
                {
                    name:'user'
                }
            ).then((roles)=>{
                arrRoles = [roles._id];
            })
        }

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,8),
            roles : arrRoles
        });
        user.save((err,user)=>{
            if(err){
                res.status(500).send({message:err});
            }
            res.send({message: 'Usuario Creado Correctamente'})
        })
    } catch (error) {
        res.status(500).send({message:error})
    }
}