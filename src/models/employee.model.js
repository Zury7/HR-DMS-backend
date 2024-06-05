const Sequelize = require('sequelize');
const db = require('../configs/db.config');

const Employee = db.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    position: {
        type: Sequelize.STRING,
    },
});

module.exports = Employee;