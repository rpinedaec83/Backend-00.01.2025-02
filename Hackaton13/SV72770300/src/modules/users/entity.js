import mongoose from "../../config/db/index.js";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, minlength: 6, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["moderador", "admin", "usuario"] },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;