const express = require('express');
const router = express.Router();

// import controller
const employeeController = require('../controllers/EmployeeController');

router.get('/employee/get', employeeController.getEmployees);
router.post('/employee/create', employeeController.postEmployee);

module.exports = router;