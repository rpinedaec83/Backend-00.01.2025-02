import mongoose from "../../config/db/index.js";
const Schema = mongoose.Schema;
const UserSchema = new Schema({ 
    firstName: {type: String, required: true}, 
    lastName: {type: String},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    rol: {type:String, enum: ["moderador", "admin","usuario"]},
    password: {type:String, minleght: 6, required: true},
})


const userModel = mongoose.model("User", UserSchema, "users");

export default userModel; // esto hace que userModel este disponible para ser importado en otros archivos