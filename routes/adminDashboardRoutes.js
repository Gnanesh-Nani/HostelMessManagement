const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Assuming a Student model exists

// Route to render admin dashboard page
router.get('/admin-dashboard', async (req, res) => {
    try {
        const students = await Student.find(); // Fetch all student records from the database
        res.render('dashboard/admin', { students, isEditing: false, editingStudent: null }); // Pass students and set isEditing to false
    } catch (error) {
        console.error('Error fetching student records:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to add a new student
router.post('/add-student', async (req, res) => {
    const { name, username, email, age, gender, course, year, contactNumber, address } = req.body;

    try {
        const newStudent = new Student({
            name,
            username,
            email,
            age,
            gender,
            course,
            year,
            contactNumber,
            address
        });
        await newStudent.save();
        res.redirect('/admin-dashboard');
    } catch (error) {
        console.error('Error adding new student:', error);
        res.status(500).send('Failed to add student');
    }
});

// Route to render the edit student form
router.get('/edit-student/:id', async (req, res) => {
    const studentId = req.params.id;

    try {
        const editingStudent = await Student.findById(studentId);
        const students = await Student.find();
        if (!editingStudent) {
            return res.status(404).send('Student not found');
        }
        // Render the admin dashboard with student data to edit
        res.render('dashboard/admin', { students, isEditing: true, editingStudent });
    } catch (error) {
        console.error('Error fetching student data for edit:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update a student (POST request)
router.post('/edit-student/:id', async (req, res) => {
    const studentId = req.params.id;
    const { name, username, email, age, gender, course, year, contactNumber, address } = req.body;

    try {
        await Student.findByIdAndUpdate(studentId, {
            name,
            username,
            email,
            age,
            gender,
            course,
            year,
            contactNumber,
            address
        });
        res.redirect('/admin-dashboard');
    } catch (error) {
        console.error('Error updating student data:', error);
        res.status(500).send('Failed to update student');
    }
});

// Route to delete a student
router.post('/delete-student/:id', async (req, res) => {
    const studentId = req.params.id;

    try {
        await Student.findByIdAndDelete(studentId);
        res.redirect('/admin-dashboard');
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).send('Failed to delete student');
    }
});

module.exports = router;
