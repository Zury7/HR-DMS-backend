const EmployeeService = require('../services/employee.service');

class EmployeeController {
    async addEmployee(req, res) {
        try {
            const employee = await EmployeeService.addEmployee(req.body);
            res.status(201).json(employee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllEmployees(req, res) {
        try {
            const employees = await EmployeeService.getAllEmployees();
            res.status(200).json(employees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getEmployee(req, res) {
        try {
            const employee = await EmployeeService.getEmployee(req.params.id);
            res.status(200).json(employee);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateEmployee(req, res) {
        try {
            const employee = await EmployeeService.updateEmployee(req.params.id, req.body);
            res.status(200).json(employee);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deleteEmployee(req, res) {
        try {
            await EmployeeService.deleteEmployee(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new EmployeeController();
