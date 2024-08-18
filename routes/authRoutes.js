const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for login page
router.get('/login', (req, res) => {
    res.render('auth/login'); // Ensure you have views/auth/login.ejs
});

// Route for handling login form submission
router.post('/login', authController.login);

// Test route for dashboard
router.get('/dashboard', (req, res) => {
    res.send('This is the dashboard (test page).');
});

module.exports = router;