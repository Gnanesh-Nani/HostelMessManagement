const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 


// Route for displaying the login page
router.get('/login', (req, res) => {
    console.log("login page requested");
    res.render('auth/login'); // Ensure this view exists: views/auth/login.ejs
});

// Route for handling the login form submission
router.post('/login', authController.login);

module.exports = router;
