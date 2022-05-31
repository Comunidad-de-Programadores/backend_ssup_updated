import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Analisis extends Model {}
Analisis.init ({
  id_ficha: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cod_aran:  {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cant:  {
    type: DataTypes.SMALLINT
  },
  estado:  {
    type: DataTypes.CHAR(1),
  },
  orden:  {
    type: DataTypes.SMALLINT
  },
}, {
    timestamps: false,
    modelName: 'Analisis',
    tableName: 'analisis',
    sequelize,
});



export default Analisis;