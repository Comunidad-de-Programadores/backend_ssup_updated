import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
import Medesp from './Medesp';
class Usuario extends Model { }
Usuario.init({
  cod_med: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    comment: "Clave primaria de la tabla"
  },
  nombre: {
    type: DataTypes.CHAR,
    allowNull: false,
    commnet4: "Nombre completo del usuario a registrar"
  },
  ci: {
    type: DataTypes.CHAR
  },
  dir_dom: {
    type: DataTypes.CHAR
  },
  tel_dom: {
    type: DataTypes.CHAR
  },
  dir_ofi: {
    type: DataTypes.CHAR
  },
  celu: {
    type: DataTypes.CHAR
  },
  reg_med: {
    type: DataTypes.CHAR
  },
  cod_cat: {
    type: DataTypes.INTEGER
  },
  cod_prof: {
    type: DataTypes.INTEGER
  },
  cod_serv: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.CHAR
  },
  cargo: {
    type: DataTypes.INTEGER
  },
  // fotografia:{
  //   type: DataTypes.CHAR //revisar tipo de dato
  // },
  contraseña: {
    type: DataTypes.CHAR
  },
  cod_area: {
    type: DataTypes.INTEGER
  },
  grupoid: {
    type: DataTypes.INTEGER
  },
  nuser: {
    type: DataTypes.CHAR,
    allowNull: false,
    comment: "Identificador de un usuario con roles para registrar otros usuarios"
  }
}, {
  timestamps: false,
  modelName: 'Usuario',
  tableName: 'Usuario',
  sequelize: sequelize,
});

Medesp.hasMany(Usuario, { foreignKey: 'cod_med', sourceKey: 'cod_med' });

Usuario.belongsTo(Medesp, { foreignKey: 'cod_med', sourceKey: 'cod_med' });



export default Usuario;