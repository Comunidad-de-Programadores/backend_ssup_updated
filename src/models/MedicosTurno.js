import { DataTypes, Model } from 'sequelize';
import { sequelize }  from '../database/database';
import Horarios from './Horarios';
import Medesp from './Medesp';
import Usuario from './Usuario';

class MedicosTurno extends Model {}
MedicosTurno.init ({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cod_med:  {
    type: DataTypes.INTEGER,
  },
  tipo:  {
    type: DataTypes.INTEGER
  },
  area:  {
    type: DataTypes.STRING(50),
  },
  obs:  {
    type: DataTypes.STRING(50)
  },
  estado:  {
    type: DataTypes.BOOLEAN
  },
  turno:  {
    type: DataTypes.SMALLINT
  },
}, {
    timestamps: false,
    modelName: 'MedicosTurno',
    tableName: 'medicos_turno',
    sequelize,
});

MedicosTurno.hasOne(Usuario, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});
MedicosTurno.hasMany(Horarios, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});
MedicosTurno.hasOne(Medesp, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});

Usuario.belongsTo(MedicosTurno, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});
Horarios.belongsTo(MedicosTurno, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});
Medesp.belongsTo(MedicosTurno, {primaryKey: 'cod_med', foreignKey: 'cod_med', sourceKey: 'cod_med'});
export default MedicosTurno;