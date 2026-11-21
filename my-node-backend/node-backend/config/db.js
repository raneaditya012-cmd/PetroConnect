// db.js or similar file
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const uri = 'mongodb://localhost:27017/petroconnect';
      console.log('MongoDB URI:', uri);
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
      const uri = process.env.MONGODB_URI;
      console.log('MongoDB URI:', uri);
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB; // Export the function
