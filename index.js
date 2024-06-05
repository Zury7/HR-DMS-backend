require('dotenv').config();
require('reflect-metadata');

const express = require('express');
const cors = require('cors');

// Database connection
const db = require('./src/configs/db.config');

db.authenticate()
  .then(() => {
    console.log('Database connected...');
  })
  .catch((err) => {
    console.log('Error connecting to the database', err);
  });

// Create express app
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  })
);

require('./src/routes/employee.route').default(app);
require('./src/routes/user.route').default(app);
require('./src/routes/document.route')(app);

// Set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
