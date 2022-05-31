import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';

class Baja extends Model { }
Baja.init({
    nro_bme: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Esta es la columna principal de la tabla"
    },
    id_ficha: {
        type: DataTypes.INTEGER,
        comment: "Esta es la clave foranea de la tabla Ficha"
    },
    cod_med: {
        type: DataTypes.INTEGER,
    },
    cod_pac: {
        type: DataTypes.INTEGER,
    },
    fecha_ini: {
        type: DataTypes.DATE
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    dias: {
        type: DataTypes.FLOAT
    },
    cod_diag: {
        type: DataTypes.INTEGER
    },
    t_afec: {
        type: DataTypes.CHAR(1)
    },
    cod_mot: {
        type: DataTypes.INTEGER
    },
    tipo_baja: {
        type: DataTypes.CHAR(1)
    },
    obser: {
        type: DataTypes.STRING(150)
    },
    fecha_ret: {
        type: DataTypes.DATE
    }
},{
    timestamps: false,
    modelName: 'Baja',
    tableName: 'bajmed',
    sequelize
});
export default Baja;