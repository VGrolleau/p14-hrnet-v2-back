const controller = {};

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
    console.log(req);
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

module.exports = controller;