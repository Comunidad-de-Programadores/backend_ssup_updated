import { sequelize } from './database/database';
const conn = sequelize.authenticate()
    .then(() => {
        console.log("db conectada");
    })
    .catch(err => {
        console.log('Error\n', err);
    });
export default conn;