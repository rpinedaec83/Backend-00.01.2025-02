import { DataTypes } from "sequelize";
import sequelize from "../../config/db/index.js";

const PaymentModel = sequelize.define("Payment", {
    stripeSessionId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    productId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    },
    amount_total: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    tableName: "payments",
});

export default PaymentModel;