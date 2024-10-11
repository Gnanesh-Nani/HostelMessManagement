const mongoose = require('mongoose');
const Student = require('./models/Student'); // Adjust the path if necessary

// MongoDB connection URL
const mongoURI = 'mongodb://localhost:27017/hms'; // Replace 'hms' with your database name if different

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Create a new student
        const newStudent = new Student({
            name: 'Gnanesh',
            username: 'nani',
            email: 'Gnanesh@example.com',
            age: 20,
            gender: 'Male',
            course: 'Computer Science',
            year: 2,
            contactNumber: '1234567890',
            address: '123 Main St, City'
        });

        // Save the student to the database
        return newStudent.save();
    })
    .then(student => {
        console.log('Student inserted successfully:', student);
        mongoose.connection.close(); // Close the connection after insertion
    })
    .catch(err => {
        console.error('Error inserting student:', err);
        mongoose.connection.close();
    });
