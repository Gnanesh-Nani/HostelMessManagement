// app.js
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const connectToDB = require('./config/db'); // Adjust the path if needed

const app = express();

// Connect to MongoDB
connectToDB().then(() => {
    // Middleware
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(session({
        secret: 'your-secret-key', // Use a secret key for your session
        resave: false,
        saveUninitialized: true
    }));
    // Middleware to make session data available in all views
    app.use((req, res, next) => {
        res.locals.session = req.session;
        next();
    });
    
    app.use(helmet());
    app.use(morgan('combined'));

    // Set view engine to EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    // Import and use routes
    const authRoutes = require('./routes/authRoutes');
    const dashboardRoutes = require('./routes/dashboardRoutes');
    const feedbackRoutes = require('./routes/feedbackRoutes');  
    const mealPlanRoutes = require('./routes/mealPlanRoutes');

    app.use('/', authRoutes);       
    app.use('/', dashboardRoutes); 
    app.use('/', feedbackRoutes); 
    app.use('/', mealPlanRoutes); 

    // Define a basic route (can be removed if not needed)
    app.get('/', (req, res) => {
        res.send('Hostel & Mess Management System is running!');
    });

    // Error handling middleware
    app.use((req, res, next) => {
        res.status(404).send('<center><h1>Sorry, we could not find that!</h1></center>');
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

    // Set the port and start the server
    const PORT = 3000; // You can hardcode the port if you don't want to use environment variables
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/login`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
});
