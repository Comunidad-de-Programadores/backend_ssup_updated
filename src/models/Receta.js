import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import Ficha from './Ficha';
class Receta extends Model { }
Receta.init({
    id_ficha: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        comment: "Llave secundaria"
    },
    cod_vade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        comment: "Llave secundaria"
    },
    cant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cant_dosis: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    cod_uni: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    peri_dosis: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    ut: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    indicacion: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    estado: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    orden: {
        type: DataTypes.INTEGER,
        comment: "Nº de Orden de la receta"
    }
}, {
    timestamps: false,
    modelName: 'receta',
    tableName: 'Receta',
    sequelize,

});

export default Receta;