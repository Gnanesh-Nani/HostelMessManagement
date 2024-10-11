const express = require('express');
const router = express.Router();

// Student Dashboard Route
router.get('/dashboard/student', (req, res) => {
    if (!req.session.userId || req.session.userType !== 'student') {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }
    res.render('dashboard/student'); // Render the student dashboard view
});

// Admin Dashboard Route
router.get('/dashboard/admin', (req, res) => {
    if (!req.session.userId || req.session.userType !== 'admin') {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }
    res.render('dashboard/admin'); // Render the admin dashboard view
});

module.exports = router;
