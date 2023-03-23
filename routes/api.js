const express = require('express');
const router = express.Router();

// import controllers
const employeeController = require('../controllers/EmployeeController');
const userController = require('../controllers/UserController');

// import middleware
const auth = require('../middleware/auth');

router.post('/login', userController.login);
router.get('/user/:userId', userController.getUserNotCo);
router.get('/user', auth, userController.getUser);
router.get('/employee', auth, employeeController.getEmployees);
router.post('/employee', auth, employeeController.postEmployee);
router.put('/employee', auth, employeeController.updateEmployee);
router.delete('/employee', auth, employeeController.deleteEmployee);

module.exports = router;