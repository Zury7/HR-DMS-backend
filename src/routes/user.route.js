module.exports = (app) => {
    const userController = require('../controllers/user.controller');

    const router = require('express').Router();

    router.post('/user', userController.addUser);
    router.get('/user', userController.getAllUsers);
    router.get('/user/:id', userController.getUser);
    router.put('/user/:id', userController.updateUser);
    router.delete('/user/:id', userController.deleteUser);

    app.use('/api', router);
};