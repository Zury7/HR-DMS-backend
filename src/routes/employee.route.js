/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Employee management
 */

/**
 * @swagger
 * /api/employee:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The created employee.
 *   get:
 *     summary: Get all employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of employees.
 */

/**
 * @swagger
 * /api/employee/{id}:
 *   get:
 *     summary: Get an employee by ID
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The employee description by ID.
 *   put:
 *     summary: Update an employee by ID
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The updated employee.
 *   delete:
 *     summary: Delete an employee by ID
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The deleted employee.
 */

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