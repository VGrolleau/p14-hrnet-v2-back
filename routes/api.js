const express = require('express');
const router = express.Router();

// import controllers
const employeeController = require('../controllers/EmployeeController');
const userController = require('../controllers/UserController');

// import middleware
const auth = require('../middleware/auth');

router.get('/employee/get', auth, employeeController.getEmployees);
router.post('/employee/create', auth, employeeController.postEmployee);
router.post('/user/login', userController.login);

module.exports = router;