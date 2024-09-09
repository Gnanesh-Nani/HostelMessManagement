const express = require('express');
const router = express.Router();

// Feedback page route
router.get('/feedback', (req, res) => {
    // Mock user data
    const user = {
        name: 'John Doe',
        details: 'Some details about the user'
    };

    res.render('feedback/feedback', { user }); // Pass the user object to the EJS template
});

module.exports = router;
