import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import fuelPumpImage from '../images/petroconnect-high-resolution-logo-transparent.png';

const SignUpPage = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are not empty
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User signed up successfully');
        // Reset the form after successful sign-up
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        setErrorMessage('');
      } else {
        const data = await response.text(); // Get response as text for debugging
        try {
          const json = JSON.parse(data); // Try parsing as JSON
          setErrorMessage(json.msg || 'Failed to sign up');
        } catch (err) {
          setErrorMessage('Failed to sign up: Invalid response');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Server error. Please try again later.');
    }
  };

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
                SignUp
              </Typography>

              {errorMessage && (
                <Typography color="error" style={{ marginBottom: '10px' }}>
                  {errorMessage}
                </Typography>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#333' } }}
                  required
                />
                <TextField
                  label="Email Id"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#333' } }}
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#333' } }}
                  required
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
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SignUpPage;
