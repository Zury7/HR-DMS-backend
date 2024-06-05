const Sequelize = require('sequelize');
const db = require('../configs/db.config');
const Employee = require('./employee.model');

const Document = db.define('document', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    content: {
        type: Sequelize.TEXT,
    },
    type: {
        type: Sequelize.STRING,
    },
    employeeId: {
        type: Sequelize.INTEGER,
        references: {
            model: Employee,
            key: 'id',
        },
    },
});

module.exports = Document;
