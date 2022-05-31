import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import Dpto from './Dpto';
import Ficha from './Ficha';
import Institucion from './Institucion';
import Pais from './Pais';
import Tafil from './Tafil';

class Persona extends Model { }
Persona.init({
    cod_pers: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        comment: "Esta es la llave primaria"
    },
    nombres: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    t_iden: { type: DataTypes.SMALLINT },
    nro_id: { type: DataTypes.CHAR },
    ext_id: { type: DataTypes.CHAR },
    dpto_id: { type: DataTypes.SMALLINT },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pais_nac: { type: DataTypes.SMALLINT },
    sexo: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    e_civil: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    direccion: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    tel_dom: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    grup_san: { type: DataTypes.CHAR },
    obser: { type: DataTypes.CHAR },
    nro_ruc: { type: DataTypes.CHAR },
    nua: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    tit_ben: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    fecha_afil: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    fecha_baja: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_cadu: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo_afil: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    cod_inst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cod_tper: { type: DataTypes.SMALLINT },
    cod_tcon: { type: DataTypes.SMALLINT },
    cod_prof: { type: DataTypes.SMALLINT },
    estado: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    imagen: { type: DataTypes.BLOB('long') },
    usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "Identificador del usuario creadeador de usarios"
    }
}, {
    timestamps: false,
    modelName: 'persona',
    tableName: 'persona',
    sequelize,

});

Persona.hasMany(Ficha, { foreignKey: 'cod_pac', sourceKey: 'cod_pers' });
Persona.hasOne(Institucion, { foreignKey: 'cod_inst', sourceKey: 'cod_inst' });
Persona.hasOne(Tafil, { foreignKey: 'cod_tafi', sourceKey: 'tipo_afil' });
Persona.hasOne(Pais, { foreignKey: 'cod_pais', sourceKey: 'pais_nac' });
Pais.hasOne(Dpto, { foreignKey: 'cod_pais', sourceKey: 'cod_pais' });

Ficha.belongsTo(Persona, { foreignKey: 'cod_pac', sourceKey: 'cod_pers' });
Institucion.belongsTo(Persona, { foreignKey: 'cod_inst', sourceKey: 'cod_inst' });
Tafil.belongsTo(Persona, { foreignKey: 'cod_tafi', sourceKey: 'cod_tafi' });
Pais.belongsTo(Persona, { foreignKey: 'cod_pais', sourceKey: 'pais_nac' });
Dpto.belongsTo(Persona, { foreignKey: 'cod_dpto', sourceKey: 'dpto_id' });

export default Persona;
