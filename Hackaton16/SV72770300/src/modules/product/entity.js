import { DataTypes } from "sequelize";
import sequelize from "../../config/db/index.js";

const ProductModel = sequelize.define("Product", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        defaultValue: "usd"
    },

    active: {
        type: DataTypes.BOOLEAN,
        default: true,
    }
}, {
    timestamps: true,
    tableName: "products",
});

export default ProductModel;