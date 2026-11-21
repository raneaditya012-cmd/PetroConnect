import React from 'react';
import Navbar from './Navbar';
import { Box, Typography } from '@mui/material';

const ServicesPage = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Services
        </Typography>
        <Typography variant="body1">Coming soon.</Typography>
      </Box>
    </Box>
  );
};

export default ServicesPage;
