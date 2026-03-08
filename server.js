const express = require('express');
const cors = require('cors');
require('dotenv').config();

const logger = require('./middleware/logger');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/', courseRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
