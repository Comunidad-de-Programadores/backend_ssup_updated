import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';

class Transferencia extends Model {}
Transferencia.init ({
  id_tran: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  id_ficha:  {
    type: DataTypes.BIGINT
  },
  cod_pac:  {
    type: DataTypes.BIGINT
  },
  cod_medo:  {
    type: DataTypes.INTEGER,
  },
  cod_medd:  {
    type: DataTypes.INTEGER
  },
  cod_esp:  {
    type: DataTypes.INTEGER
  },
  obser:  {
    type: DataTypes.CHAR(300)
  },
}, {
    timestamps: false,
    modelName: 'transferencia',
    tableName: 'transfer',
    sequelize,
});

export default Transferencia;