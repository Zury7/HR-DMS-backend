module.exports = (app) => {
    const employeeController = require('../controllers/employee.controller');

    const router = require('express').Router();

    router.post('/employee', employeeController.addEmployee);
    router.get('/employee', employeeController.getAllEmployees);
    router.get('/employee/:id', employeeController.getEmployee);
    router.put('/employee/:id', employeeController.updateEmployee);
    router.delete('/employee/:id', employeeController.deleteEmployee);

    app.use('/api', router);
}