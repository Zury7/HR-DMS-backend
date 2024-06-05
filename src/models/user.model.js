const Sequelize = require('sequelize');
const db = require('../configs/db.config');

const User = db.define('user', {
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
    username: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.STRING,
    },
});

module.exports = User;