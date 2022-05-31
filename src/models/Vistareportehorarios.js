import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class Vistareportehorarios extends Model {}
Vistareportehorarios.init({
    Nro_fila: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cod_med: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    paci_aten: {
        type: DataTypes.INTEGER
    },
    obs: {
        type: DataTypes.STRING
    },
    tipo_profesional: {
        type: DataTypes.STRING
    },
    LUNES: {
        type: DataTypes.STRING
    },
    MARTES: {
        type: DataTypes.STRING
    },
    MIERCOLES: {
        type: DataTypes.STRING
    },
    JUEVES: {
        type: DataTypes.STRING
    },
    VIERNES: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    modelName: 'vistareportehorarios',
    tableName:'vistareportehorarios',
    sequelize,
    
});

export default Vistareportehorarios;