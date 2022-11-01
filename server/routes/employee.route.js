var express = require('express');
var router = express.Router();
const EmployeeController = require("../controllers/employee.controller")
const cors = require('cors');

router.use(cors());

router.route('/employee').get(EmployeeController.getAllEmployees)
router.route('/employee').post(EmployeeController.createEmployees)
router.route('/employee/:id').put(EmployeeController.updateEmployees)
router.route('/employee/:id').delete(EmployeeController.deleteEmployees)
router.route('/employee/:id').get(EmployeeController.getSingleEmployee)


module.exports = router;