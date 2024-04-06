const { Sequelize } = require('sequelize');

// Init DB server
const database = new Sequelize(
    'hrnet', // DB name
    'admin', // DB user
    'Pa$$w0rd', // DB password
    {
        host: 'localhost',
        dialect: 'mariadb'
    }
);

database.sync();

module.exports = database;