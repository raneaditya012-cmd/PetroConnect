import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For the menu icon
import fuelPumpImage from '../images/petroconnect-high-resolution-logo-transparent.png'; // Adjust path if needed

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        {/* Logo on the top left with link to HomePage */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            component="img"
            src={fuelPumpImage}
            alt="PetroConnect Logo"
            sx={{ height: 50, marginRight: '20px' }}
          />
        </Link>

        {/* Navbar Title or App Name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PetroConnect
        </Typography>

        {/* Menu Icon for Mobile View */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Navigation Links */}
        <Link to="/login" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
          <Button color="inherit">Sign Up</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
