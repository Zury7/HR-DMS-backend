require('dotenv').config();
require('reflect-metadata');

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// initiate admins
const adminInit = require('./src/init/admin.init');

// Set port, listen for requests
const PORT = process.env.PORT;
const SWAGGER_PORT = process.env.SWAGGER_PORT;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Employee Document Management API',
      version: '1.0.0',
      description: 'API documentation for Employee Document Management System',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Initialize admin
(async () => {
  try {
      await adminInit();
  } catch (error) {
      console.error('Error initializing admin:', error);
  }
})();

// Create express app
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

require('./src/routes/employee.route')(app);
require('./src/routes/user.route')(app);
require('./src/routes/document.route')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation is available at http://localhost:${SWAGGER_PORT}/api-docs`
  );
});
