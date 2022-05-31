import Sequelize from 'sequelize';
require('dotenv').config();

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    // Z here means current timezone, _not_ UTC
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = new Sequelize(
    process.env.DBNAME || 'NAMEDB',
    process.env.DBUSERNAME || 'dbusername',
    process.env.DBPASSWORD || 'dbpassword',
    {
        host: process.env.DBHOST || '192.168.1.246',
        dialect: process.env.DBDIALECT || 'mysql',
        enableArithAbort: true,
        charset: 'utf8',
        language: 'es',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        loggin: false
    }
);
//sequelize.options.enableArithAbort = true