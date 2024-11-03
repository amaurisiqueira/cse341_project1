const express = require('express');
const mainRouter = express.Router();
const utils = require('../utils/util');

mainRouter.get('/', (req, res) => {
  res.send('Hola, Express!');
});


mainRouter.get('/professional', (req, res) => {
  res.json( utils.callProfessional());

});




module.exports = mainRouter;