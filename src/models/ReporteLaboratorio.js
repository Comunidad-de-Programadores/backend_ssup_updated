import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class ReporteLaboratorio extends Model {}
ReporteLaboratorio.init({
    cod_serv: {
        type: DataTypes.BIGINT
    },
    des_serv: {
        type: DataTypes.STRING(45)
    },
    cantidad: {
        type: DataTypes.INTEGER
    },
    importe: {
        type: DataTypes.NUMBER
    },
    nrovent: {
        type: DataTypes.BIGINT
    },
    ficha: {
        type: DataTypes.BIGINT
    },
    cod_pers: {
        type: DataTypes.BIGINT
    },
    nombres: {
        type: DataTypes.CHAR(50)
    },
    cod_inst: {
        type: DataTypes.INTEGER
    },
    fecha: {
        type: DataTypes.DATE
    }
}, {
    timestamps: false,
    modelName: 'reportelaboratorio',
    tableName:'reportelaboratorio',
    sequelize,
    
});

export default ReporteLaboratorio;