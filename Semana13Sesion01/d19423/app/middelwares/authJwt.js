const { Router } = require('express');
const db = require('../models');
const jwt = require('jsonwebtoken');

const User = db.user;
const Role = db.role;


verifyToken = (req,res,next)=>{
    let token = req.session.token;
    if(!token){
        return res.status(401).send({message: 'No estas enviando el token'});
    }
    jwt.verify(token,
        process.env.jwtSecret,
        (err, decoded)=>{
            if(err){
                return res.status(500).send({message:err});
            }
            req.userId = decoded.id;
            next(); 
        }
    )
}

isModerator = (req,res,next)=>{
    User.findById(req.userId).exec((err,user)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        Role.find({_id:{
            $in: user.roles
        }}, (err, roles)=>{
            if(err){
                return res.status(500).send({message:err});
            }
            roles.forEach(element => {
                if(element.name === 'moderator'){
                    next();
                    //return;
                }
            });
            res.status(403).send({message: `Se requiere el rol de moderator`});
        })
    })
};

isAdmin = (req,res,next)=>{
    User.findById(req.userId).exec((err,user)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        Role.find({_id:{
            $in: user.roles
        }}, (err, roles)=>{
            if(err){
                return res.status(500).send({message:err});
            }
            roles.forEach(element => {
                if(element.name === 'admin'){
                    next();
                    //return;
                }
            });
            res.status(403).send({message: `Se requiere el rol de admin`});
        })
    })
};

const authJwt = {
    verifyToken, isModerator, isAdmin
}
module.exports = authJwt;