import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from './Navbar';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../images/back.jpg'; // Path to the uploaded image

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGetStartedClick = () => {
    navigate('/main'); // Navigate to MainPage.js when clicked
  };

  return (
    <div>
      {/* Render the Navbar */}
      <Navbar />

      {/* Main content of the HomePage with a background image */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ 
          height: '90vh', 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#e0e0e0', // Light color for text to contrast with darker background
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Text shadow for better readability
        }}
      >
        <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
          Welcome to PetroConnect
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '30px' }}>
          A seamless experience for fuel transactions and management.
        </Typography>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px' }} 
          onClick={handleGetStartedClick} // Attach click handler
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;
