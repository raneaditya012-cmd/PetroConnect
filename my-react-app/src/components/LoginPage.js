// src/components/LoginPage.js
import React from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import fuelPumpImage from '../images/petroconnect-high-resolution-logo-transparent.png';

const LoginPage = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }} 
    >
      <Paper 
        elevation={10} 
        style={{
          padding: '40px', 
          maxWidth: '900px', 
          width: '100%', 
          borderRadius: '15px', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#ffffff',
          minHeight: '500px', 
        }}
      >
        <Grid container style={{ minHeight: '500px' }}>
          <Grid item xs={12} sm={6} style={{ backgroundColor: '#CDFFB3', position: 'relative', borderRadius: '15px 0 0 15px' }}>
            <Box 
              display="flex"
              alignItems="center"
              justifyContent="center"
              style={{ height: '100%' }}
            >
              <Box style={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={fuelPumpImage} 
                  alt="Fuel Pump Icon"
                  sx={{ 
                    width: 250, 
                    height: 250, 
                    borderRadius: '50%', 
                    backgroundColor: '#CDFFB3', 
                    padding: '30px',
                    border: '5px solid white'
                  }}
                />
                <Typography variant="h4" style={{ marginTop: '20px', color: '#333' }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} container alignItems="center" justifyContent="center">
            <Paper elevation={0} style={{ padding: '30px', textAlign: 'center', border: 'none' }}>
              <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
                Login
              </Typography>

              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#333' } }} 
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#333' } }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#333' } }}
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                style={{ marginTop: '20px', backgroundColor: '#4caf50' }} 
              >
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LoginPage;
