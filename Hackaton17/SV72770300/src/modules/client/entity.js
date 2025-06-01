import { DataTypes } from "sequelize";
import sequelize from "../../config/db/index.js";

const ClientModel = sequelize.define("Client", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
        default: true,
    }
}, {
    timestamps: true,
    tableName: "clients",
});

export default ClientModel;