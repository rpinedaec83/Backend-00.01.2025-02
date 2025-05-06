import mongoose from "../../config/db/index.js";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["moderador", "admin", "usuario"] },
  password: { type: String, minlength: 6, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
