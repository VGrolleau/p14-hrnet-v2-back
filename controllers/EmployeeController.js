const controller = {};

// import model
const Employee = require('../models/Employee');

controller.testApi = async (req, res) => {
    const response = await Employee.findAll()
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

module.exports = controller;