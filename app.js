// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(helmet());
app.use(morgan('combined'));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Import and use routes
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hostel & Mess Management System is running!');
});

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Sorry, we could not find that!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
