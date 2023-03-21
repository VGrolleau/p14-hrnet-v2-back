const DataTypes = require('sequelize');
const database = require('./database');
// const bcrypt = require('bcrypt');

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
        // const hashedPassword = await bcrypt.hash('Pa$$w0rd', 10);
        // await User.create({
        //     firstname: 'Admin',
        //     lastname: 'Admin',
        //     email: 'admin@admin.fr',
        //     password: hashedPassword
        // });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = User;