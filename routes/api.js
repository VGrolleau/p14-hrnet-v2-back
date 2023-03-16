const express = require('express');
const router = express.Router();

// import controller
const employeeController = require('../controllers/EmployeeController');

router.get('/employee/test', employeeController.testApi);

module.exports = router;