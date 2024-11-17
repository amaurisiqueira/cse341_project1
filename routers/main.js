const express = require("express");
const mainRouter = express.Router();
const utils = require("../utils/util");

mainRouter.get("/", (req, res) => {
  res.send("Hola, Express!");
});

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtain a greating.
 *     tags:
 *       - hello express
 *     responses:
 *       200:
 *         description: greating hello express.
 *       500:
 *         description: Internal server error.
 */

mainRouter.get("/professional", (req, res) => {
  res.json(utils.callProfessional());
});

module.exports = mainRouter;
