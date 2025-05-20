import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db/index.js";

const PackageModel = sequelize.define("Package", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    origen: { 
        type: DataTypes.STRING, allowNull: false 
    },
    destino: { 
        type: DataTypes.STRING, allowNull: false 
    },
    estado: { 
        type: DataTypes.STRING, defaultValue: "pendiente" 
    },
    ruta_actual: { 
        type: DataTypes.STRING
    },
    lon: { 
        type: DataTypes.FLOAT 
    },
    lat: { 
        type: DataTypes.FLOAT 
    },
    persona_envio: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    persona_recojo: { 
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
});

export default PackageModel;