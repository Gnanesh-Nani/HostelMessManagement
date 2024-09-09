const express = require('express');
const router = express.Router();

// Dashboard route for student
router.get('/dashboard', (req, res) => {
    res.render('dashboard/studentDashboard'); // Adjust for user or admin
});

// Dashboard route for admin
router.get('/admin/dashboard', (req, res) => {
    res.render('dashboard/adminDashboard');
});

module.exports = router;
