import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Pais extends Model {}
Pais.init ({
  cod_prof: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  des_prof:  {
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
    modelName: 'Profesion',
    tableName: 'profesion',
    sequelize,
});

export default Pais;