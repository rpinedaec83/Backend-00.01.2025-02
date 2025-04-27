const mongoose = require('../../common/services/mongoose.service').mongoose;

const Schema = mongoose.Schema;

//es el esquema de la coleccion
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
});

//creamos la propiedad id
userSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

//sobreescribimos el metodo find by id para que reciba 
//el nuevo parametro id que creamos en la linea anterior
userSchema.findById = function(){
    return this.model('User').find({id:this.id});
}

//crea la funcion toJSON para que devuelva el objeto en formato json
userSchema.set('toJSON',{
    virtuals:true
})

// creamos el modelo de datos con el esquema
const User = mongoose.model('User',userSchema);


//funcion para traer toda la lista de usuarios
exports.list = ()=>{
    let users = User.find();
    return users;
}

//funcion para crear u nuevo usuario
exports.createUser=(userData)=>{
    const user = new User(userData);
    return user.save();
}

//funcion para traer uns solo usuario por medio de su id
exports.findById = (id)=>{
    console.log(id);
    return User.findById(id).then((result)=>{
        result = result.toJSON();
        //borramos campos no requeridos
        delete result.__v;
        delete result._id;
        delete result.password;
        return result;
    }).catch(error=>{
        console.log(error);
    })
}