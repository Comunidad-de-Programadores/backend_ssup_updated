import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class Institucion extends Model {}
Institucion.init({
    cod_inst: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        comment: "Llave primaria de la tabla"
    },
    des_inst: {
        type: DataTypes.CHAR
    },
    zona: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.CHAR
    },
    cod_categ: {
        type: DataTypes.INTEGER
    },
    fono: {
        type: DataTypes.CHAR
    },
    fecha_afi: {
        type: DataTypes.DATE
    },
    fecha_baj: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.CHAR
    },
    nit: {
        type: DataTypes.STRING
    },
    mat_fund: {
        type: DataTypes.STRING
    },
    año_regfund: {
        type: DataTypes.STRING
    },
    activ_econ: {
        type: DataTypes.STRING
    },
    t_organiz: {
        type: DataTypes.STRING
    },
    nro_patronal: {
        type: DataTypes.CHAR
    }
}, {
    timestamps: false,
    modelName: 'Institucion',
    tableName:'institucion',
    sequelize,
    
});

export default Institucion;