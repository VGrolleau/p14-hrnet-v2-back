const controller = {};

const { where } = require('sequelize');
// import model
const Employee = require('../models/Employee');

controller.getEmployees = async (req, res) => {
    const response = await Employee.findAll({
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'UserId'] }
    })
        .then(function (data) {
            const res = { success: true, data: data };
            return res;
        })
        .catch(error => {
            const res = { success: false, error: error };
            return res;
        })
    res.json(response);
};

controller.postEmployee = async (req, res) => {
    try {
        const response = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dateOfBirth: req.body.dateOfBirth,
            startDate: req.body.startDate,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            department: req.body.department,
            UserId: req.body.userId
        });
        res.json({ success: true, data: response });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

controller.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            where: {
                dateOfBirth: req.body.dateOfBirth,
                startDate: req.body.startDate
            }
        });

        if (!employee) {
            return res.status(404).json({ success: false, error: 'Employee not found' });
        }

        const response = await Employee.update(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                dateOfBirth: req.body.dateOfBirth,
                startDate: req.body.startDate,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipCode: req.body.zipCode,
                department: req.body.department
            },
            { where: { id: employee.id } }
        );

        res.json({ success: true, data: response });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

controller.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findOne({
            where: {
                dateOfBirth: req.body.dateOfBirth,
                startDate: req.body.startDate
            }
        });

        if (!employee) {
            return res.status(404).json({ success: false, error: 'Employee not found' });
        }

        const response = await Employee.destroy({ where: { id: employee.id } });

        res.json({ success: true, data: response });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

module.exports = controller;