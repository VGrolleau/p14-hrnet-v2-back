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
        /**
         * Uncomment the following to allow the creation of a user who can connect to site when database will be created
         * and don't forget to recomment after database creating otherwise this user will be recreated when you'll restart server
         * This part is required otherwise you won't be able to connect site
         */
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