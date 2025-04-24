const UserModel = require('../models/user.model');
const crypto = require('crypto');

exports.list = (req,res)=>{
    UserModel.list().then((results)=>{
        res.status(200).send(results)
    }).catch(error=>{
        res.status(500).send({message: error});
    })
}

exports.insert = (req,res)=>{
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt).update(req.body.password).digest('base64');
    req.body.password = salt+'$'+hash;
    UserModel.createUser(req.body).then((result)=>{
        res.status(200).send(result);
    }).catch(error=>{
        res.status(500).send({message:error});
    })
}