const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Add the following lines to import and use the drawing routes
const drawingRoutes = require('./routes/drawingRoutes');

// Add this line after app.use('/api/auth', authRoutes);
app.use('/api/drawings', drawingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});