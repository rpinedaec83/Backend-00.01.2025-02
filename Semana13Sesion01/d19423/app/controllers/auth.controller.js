const db = require('../models');
const Role = require('../models/role.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = db.user;

exports.signup = async (req, res) => {
    // #swagger.tags = ['AUTH']
    try {
        let arrRoles = [];
        if (req.body.roles) {
            await Role.find({
                name: {
                    $in: req.body.roles
                }
            }).then(roles => {
                arrRoles = roles.map(role => role._id);
            })
        }
        else {
            await Role.findOne(
                {
                    name: 'user'
                }
            ).then((roles) => {
                arrRoles = [roles._id];
            })
        }

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            roles: arrRoles
        });
        user.save((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
            }
            res.send({ message: 'Usuario Creado Correctamente' })
        })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

exports.signin = async (req, res) => {
    // #swagger.tags = ['AUTH']
    User.findOne({ username: req.body.username })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                res.status(404).send({ message: "Usuario no encontrado" });
                return;
            }
            let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) {
                return res.status(401).send({ message: "Password Invalido" })
            }
            const token = jwt.sign(
                {
                    id: user.id
                },
                process.env.jwtSecret,
                {
                    algorithm: "HS256",
                    allowInsecureKeySizes: true,
                    expiresIn: 86400
                }
            );
            let authorities = [];
            user.roles.forEach(element => {
                authorities.push(element);
            });
            req.session.token = token;
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities
            });
        });
}

exports.signout = async (req, res) => {
    // #swagger.tags = ['AUTH']
    try {
        req.session = null;
        return res.status(200).send({ message: "Haz salido de la sesion" })
    } catch (error) {
        this.next(error);
    }
}