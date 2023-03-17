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
        // await Employee.create({
        //     firstname: 'UserFirstname2',
        //     lastname: 'UserLastname2',
        //     date_of_birth: '1991-02-01',
        //     start_date: '2021-02-01',
        //     street: 'User Street 2',
        //     city: 'User City 2',
        //     state: 'Alaska',
        //     zip_code: '09876',
        //     department: 'Marketing'
        // })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = Employee;