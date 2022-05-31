import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Tpers extends Model {}
Tpers.init ({
  cod_tper: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  des_tper:  {
    type: DataTypes.STRING(30),
  },
  sigla:  {
    type: DataTypes.STRING(3),
  },
  estado:  {
    type: DataTypes.STRING(1),
  },
}, {
    timestamps: false,
    modelName: 'Tpers',
    tableName: 't_pers',
    sequelize,
});

export default Tpers;