import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Tafil extends Model {}
Tafil.init ({
  cod_tafi: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  des_tafi:  {
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
    modelName: 'Tafil',
    tableName: 't_afil',
    sequelize,
});

export default Tafil;