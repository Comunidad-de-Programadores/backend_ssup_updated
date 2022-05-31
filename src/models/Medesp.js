import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class Medesp extends Model { }
Medesp.init({
    cod_med: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cod_esp: {
        type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.CHAR(1)
    }
}, {
    timestamps: false,
    modelName: 'Medesp',
    tableName: 'med_esp',
    sequelize,
});

export default Medesp;