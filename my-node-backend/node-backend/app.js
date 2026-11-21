const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User'); // Ensure you have a User model defined
const logauthRoute = require('./routes/logauth');  // Import the login route file

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json()); // Use the built-in JSON parser

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/petroconnect')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mount the login routes
app.use('/api/login', logauthRoute);

// Test Routes
app.get('/', (req, res) => {
    res.send('Welcome to PetroConnect API!');
});

// API Signup Route with User Model
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user (ensure you hash the password in real applications)
        const newUser = new User({ username, email, password });

        await newUser.save();
        res.status(201).json({ msg: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ msg: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
