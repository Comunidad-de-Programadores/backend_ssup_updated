import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Horarios extends Model {}
Horarios.init ({
  cod_med: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  cod_esp:  {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  dia:  {
    type: DataTypes.SMALLINT,
    primaryKey: true
  },
  periodo:  {
    type: DataTypes.SMALLINT,
  },
  horai:  {
    type: DataTypes.DATE
  },
  horaf:  {
    type: DataTypes.DATE
  },
  cod_con:  {
    type: DataTypes.INTEGER
  },
  paci_aten:  {
    type: DataTypes.SMALLINT
  },
  paci_adic:  {
    type: DataTypes.SMALLINT
  },
  estado:  {
    type: DataTypes.CHAR(1)
  },
  tmpo_aten:  {
    type: DataTypes.SMALLINT
  },
}, {
    timestamps: false,
    modelName: 'Horarios',
    tableName: 'horarios',
    sequelize,
});



export default Horarios;