import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class Documento extends Model {}
Documento.init({
    id_doc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "Clave primaria de la tabla"
    },
    asunto: {
        type: DataTypes.STRING
    },
    fecha_reg: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    proce_pers: {
        type: DataTypes.STRING
    },
    proce_inst: {
        type: DataTypes.STRING
    },
    lug_recep: {
        type: DataTypes.INTEGER
    },
    id_usu: {
        type: DataTypes.INTEGER
    },
    fecha_sys: {
        type: DataTypes.DATE
    },
    estado: {
        type: DataTypes.CHAR
    },
    proce_pers2: {
        type: DataTypes.STRING
    },
    regint: {
        type: DataTypes.INTEGER
    },
    numprint: {
        type: DataTypes.INTEGER
    },
    tipo: {
        type: DataTypes.CHAR
    },
    fech_doc: {
        type: DataTypes.DATE
    },
    des_cite: {
        type: DataTypes.CHAR
    },
    gestion: {
        type: DataTypes.CHAR
    }
}, {
    timestamps: false,
    modelName: 'documento',
    tableName:'documento',
    sequelize,
    
});

export default Documento;