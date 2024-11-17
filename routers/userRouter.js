const express = require("express");
const usersRouter = express.Router();
const userController = require("../controllers/usersController");

usersRouter.get("/getall", userController.getAll);
/*
 * swagger
 * /user/getall:
 *    get:
 *      summary: Obtain a list of all users.
 *    tags:
 *      - get all user
 *    responses:
 *      200:
 *        description: List of all user registrated in the collection user.
 *      500:
 *        description: Internal server error
 *
 */

/**
 * @swagger
 * /user/getall:
 *   get:
 *     summary: Obtain a list of all users.
 *     tags:
 *       - users
 *     responses:
 *       200:
 *         description: List of all users registered in the collection user.
 *       500:
 *         description: Internal server error
 */

usersRouter.get("/getid/:id", userController.getSimgle);
/**
 * @swagger
 * /user/getid/{id}:
 *   get:
 *     summary: Obtain a user by ID.
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: string
 *           example: "6726c0b47a3ff02423980436"
 *     responses:
 *       200:
 *         description: User details retrieved successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */

usersRouter.post("/add", userController.createUser);
/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: Create a new user.
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "juanito"
 *               name:
 *                 type: string
 *                 example: "juanito perez"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "juanito@entel.cl"
 *               ipaddress:
 *                 type: string
 *                 example: "192.168.1.x"
 *     responses:
 *       204:
 *         description: User created successfully. *
 *       404:
 *         description: Bad request, invalid input.
 *       500:
 *         description: Internal server error.
 */

usersRouter.put("/:id", userController.updateUser);
/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update an existing user.
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to update.
 *         schema:
 *           type: string
 *           example: "673a4ad3a7aec6a819a7bfcd"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "kkck"
 *               name:
 *                 type: string
 *                 example: "karlos kleiton cool kole"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "kkck@entel.cl"
 *               ipaddress:
 *                 type: string
 *                 example: "192.168.2.10"
 *     responses:
 *       204:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */

usersRouter.delete("/:id", userController.deleteUser);
/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by ID.
 *     tags:
 *       - users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete.
 *         schema:
 *           type: string
 *           example: "673a4aeaa7aec6a819a7bfce"
 *     responses:
 *       204:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
module.exports = usersRouter;
