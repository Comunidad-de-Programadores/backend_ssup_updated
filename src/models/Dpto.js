import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Dpto extends Model {}
Dpto.init ({
  cod_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  cod_dpto:  {
    type: DataTypes.INTEGER,
  },
  des_dpto:  {
    type: DataTypes.STRING(30),
  },
  sigla:  {
    type: DataTypes.STRING(1),
  },
  estado:  {
    type: DataTypes.STRING(1)
  },
}, {
    timestamps: false,
    modelName: 'Dpto',
    tableName: 'dpto',
    sequelize,
});



export default Dpto;