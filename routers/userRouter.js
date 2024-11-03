const express = require('express');
const usersRouter = express.Router();
const userController = require('../controllers/usersController');
 

usersRouter.get('/getall',  userController.getAll) ;

usersRouter.get('/getid/:id',  userController.getSimgle) ;


module.exports = usersRouter;