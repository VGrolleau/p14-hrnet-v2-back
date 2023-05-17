const { Sequelize } = require('sequelize');

// Init DB server
const database = new Sequelize(
    // 'hrnet', // DB name
    // 'admin', // DB user
    // 'Pa$$w0rd', // DB password
    'lajo3289_hrnetvg', // DB name
    'lajo3289_hrnetvg', // DB user
    'RWSRke5ydxe}F_W', // DB password
    {
        host: 'localhost',
        dialect: 'mariadb'
    }
);

database.sync();

module.exports = database;