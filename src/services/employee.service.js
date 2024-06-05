const Employee = require('../models/employee.model');

class EmployeeService {
    async addEmployee(employeeData) {
        try {
            const employee = await Employee.create(employeeData);
            return employee;
        } catch (error) {
            throw new Error('Error adding employee: ' + error.message);
        }
    }

    async getAllEmployees() {
        try {
            const employees = await Employee.findAll();
            return employees;
        } catch (error) {
            throw new Error('Error fetching employees: ' + error.message);
        }
    }

    async getEmployee(id) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            return employee;
        } catch (error) {
            throw new Error('Error fetching employee: ' + error.message);
        }
    }

    async updateEmployee(id, updateData) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await employee.update(updateData);
            return employee;
        } catch (error) {
            throw new Error('Error updating employee: ' + error.message);
        }
    }

    async deleteEmployee(id) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await employee.destroy();
            return employee;
        } catch (error) {
            throw new Error('Error deleting employee: ' + error.message);
        }
    }
}

module.exports = new EmployeeService();
