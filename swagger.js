const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CSE341 Project 1",
      version: "0.0.2",
    },
  },
  schemes: ["https"],
  apis: [`${path.join(__dirname, "./routers/*.js")}`],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
