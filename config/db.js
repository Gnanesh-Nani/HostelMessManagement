// config/db.js
const mongoose = require('mongoose');

// Connect to MongoDB
const connectToDB = async () => {
    try {
        const uri = 'mongodb://localhost:27017/hms'; // Adjust if using a different host or MongoDB Atlas
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToDB;