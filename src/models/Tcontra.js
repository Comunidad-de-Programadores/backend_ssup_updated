import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Tcontra extends Model {}
Tcontra.init ({
  cod_tcon: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  des_tcon:  {
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
    modelName: 'Tcontra',
    tableName: 't_contra',
    sequelize,
});

export default Tcontra;