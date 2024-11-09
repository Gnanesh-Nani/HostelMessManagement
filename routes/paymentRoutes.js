const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// Route for the payment page
router.get('/payment', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login'); // Redirect to login if not authenticated
    }

    try {
        // Fetch payment details for the logged-in student using their username
        const payments = await Payment.find({ studentUsername: req.session.username });

        // Initialize amounts
        let messAmount = 0;
        let hostelAmount = 0;
        let hasPendingPayments = false; // Flag to check for pending payments

        // Map through the payments to separate the amounts
        payments.forEach(payment => {
            if (payment.type === 'mess' && payment.status === 'pending') {
                messAmount += payment.amount;
                hasPendingPayments = true; // Found a pending mess payment
            } else if (payment.type === 'hostel' && payment.status === 'pending') {
                hostelAmount += payment.amount;
                hasPendingPayments = true; // Found a pending hostel payment
            }
        });

        // Render the payment page with payment details
        res.render('payment/payment', {
            username: req.session.username, // Pass username explicitly
            payments: payments,
            messAmount: messAmount,
            hostelAmount: hostelAmount,
            hasPendingPayments: hasPendingPayments // Pass the flag to the template
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
