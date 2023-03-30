//import sequelize
const DataTypes = require('sequelize');
// importing connection database
const database = require('./database');
const User = require('./User');

const Employee = database.define('Employee', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Employee.belongsTo(User);

// IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        await database.authenticate();
        await Employee.sync({ alter: true });
        /** 
         * Uncomment the following to allow the creation of a first employee when BDD will be created
         * and don't forget to recomment after database creating otherwise this employee will be recreated when you'll restart server
         * But this part is not required if you want an empty employee list to start project
         */
        // await Employee.create({
        //     firstname: 'UserFirstname',
        //     lastname: 'UserLastname',
        //     date_of_birth: '1991-02-01',
        //     start_date: '2021-02-01',
        //     street: 'User Street',
        //     city: 'User City',
        //     state: 'Alaska',
        //     zip_code: '12345',
        //     department: 'Marketing'
        // })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = Employee;