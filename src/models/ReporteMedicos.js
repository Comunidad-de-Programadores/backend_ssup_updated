import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class ReporteMedicos extends Model {}
ReporteMedicos.init({
    nro_fila: {
        type: DataTypes.INTEGER
    },
    id_ficha: {
        type: DataTypes.BIGINT
    },
    est_cons: {
        type: DataTypes.CHAR
    },
    fecha_soli: {
        type: DataTypes.DATE
    },
    cod_pers: {
        type: DataTypes.INTEGER
    },
    nombres: {
        type: DataTypes.CHAR(50)
    },
    sexo: {
        type: DataTypes.CHAR(1)
    },
    des_inst: {
        type: DataTypes.CHAR
    },
    des_diag: {
        type: DataTypes.STRING
    },
    receta: {
        type: DataTypes.INTEGER
    },
    laboratorio: {
        type: DataTypes.INTEGER
    },
    rayos: {
        type: DataTypes.INTEGER
    },
    ecografia: {
        type: DataTypes.INTEGER
    },
    endoscopia: {
        type: DataTypes.INTEGER
    },
    electrocardiograma: {
        type: DataTypes.INTEGER
    },
    edad: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    modelName: 'reportemedico',
    tableName:'reportemedico',
    sequelize,
    
});

export default ReporteMedicos;