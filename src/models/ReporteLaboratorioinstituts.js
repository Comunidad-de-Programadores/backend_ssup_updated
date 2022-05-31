import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/database';
class ReporteLaboratorioinstituts extends Model {}
ReporteLaboratorioinstituts.init({
    des_serv: {
        type: DataTypes.STRING(45)
    },
    cantidad: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    modelName: 'reportelaboratorio',
    tableName:'reportelaboratorio',
    sequelize,
    
});

export default ReporteLaboratorioinstituts;