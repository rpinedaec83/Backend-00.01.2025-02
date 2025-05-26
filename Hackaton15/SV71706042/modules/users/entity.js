import { DataTypes } from "sequelize";

import { sequelize } from "../../config/db/index.js";

const UserModel = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
  }
);

export default UserModel;