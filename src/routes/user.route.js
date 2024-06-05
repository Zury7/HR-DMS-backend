/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The created user.
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users.
 */

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The user description by ID.
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The updated user.
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The deleted user.
 */

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