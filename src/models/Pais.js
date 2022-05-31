import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Pais extends Model {}
Pais.init ({
  cod_pais: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  des_pais:  {
    type: DataTypes.STRING(30),
  },
  sigla:  {
    type: DataTypes.STRING(3),
  },
  estado:  {
    type: DataTypes.STRING(1)
  },
}, {
    timestamps: false,
    modelName: 'Pais',
    tableName: 'pais',
    sequelize,
});

export default Pais;