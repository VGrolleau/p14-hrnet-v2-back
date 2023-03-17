//import sequelize
const DataTypes = require('sequelize');
// importing connection database
const database = require('./database');

const User = database.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        await database.authenticate();
        await User.sync({ alter: true });
        // await User.create({
        //     firstname: 'Admin',
        //     lastname: 'Admin',
        //     email: 'admin@admin.fr',
        //     password: 'Pa$$w0rd'
        // });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = User;