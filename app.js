// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express');

// Initialize the Express application
const app = express();

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hostel & Mess Management System is running!');
});

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
