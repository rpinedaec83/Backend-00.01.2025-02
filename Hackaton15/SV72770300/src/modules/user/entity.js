import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index.js";

const UserModel = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING
    },
    userName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    role:{
        type: DataTypes.STRING,
        defaultValue: "usuario"
    }
}, {
    timestamps: true,
    tableName: "users",
});

export default UserModel;