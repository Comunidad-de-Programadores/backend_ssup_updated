import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
//import Persona from './Persona';
import Receta from './Receta';
import Analisis from './Analisis';
import Transferencia from './Transferencia';
import Baja from './Baja';

class Ficha extends Model { }
Ficha.init({
  id_ficha: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    comment: "Esta es la columna principal de la tabla"
  },
  cod_med: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cod_esp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cod_serv: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  dia: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  periodo: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  cod_con: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cod_tit: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  cod_pac: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  fecha_soli: {
    type: DataTypes.DATEONLY
  },
  hora_soli: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  nro_ficha: {
    type: DataTypes.SMALLINT
  },
  hora_pres: {
    type: DataTypes.DATE
  },
  hora_aten: {
    type: DataTypes.DATE
  },
  estado: {
    type: DataTypes.CHAR
  },
  cod_usu: {
    type: DataTypes.SMALLINT
  },
  est_cons: {
    type: DataTypes.CHAR
  }
}, {
  timestamps: false,
  modelName: 'ficha',
  tableName: 'ficha',
  sequelize,
});

Ficha.hasMany(Receta, { primaryKey: 'id_ficha', foreignKey: 'id_ficha', sourceKey: 'id_ficha' });
Ficha.hasMany(Analisis, { primaryKey: 'id_ficha', foreignKey: 'id_ficha' });
Ficha.hasOne(Transferencia, { primaryKey: 'id_ficha', foreignKey: 'id_ficha' });
Ficha.hasOne(Baja, { primaryKey: 'id_ficha', foreignKey: 'id_ficha' });
//Ficha.belongsTo(Persona, { primaryKey: 'cod_pac', foreignKey: 'cod_pers' });

Analisis.belongsTo(Ficha, { primaryKey: 'id_ficha', foreignKey: 'id_ficha', sourceKey: 'id_ficha' });
Receta.belongsTo(Ficha, { primaryKey: 'id_ficha', foreignKey: 'id_ficha', sourceKey: 'id_ficha' });
Transferencia.belongsTo(Ficha, { primaryKey: 'id_ficha', foreignKey: 'id_ficha', sourceKey: 'id_ficha' });
Baja.belongsTo(Ficha, { primaryKey: 'id_ficha', foreignKey: 'id_ficha' });
//Persona.belongsTo(Ficha, { primaryKey: 'cod_pac', foreignKey: 'cod_pers'});

export default Ficha;