// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import fuelPumpImage from '../images/petroconnect-high-resolution-logo-transparent.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage('Please enter your email and password');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        try {
          localStorage.setItem('petroUser', JSON.stringify(data.user));
        } catch (err) {
          // storage unavailable; continue without persisting
        }
        navigate('/main');
      } else {
        setErrorMessage(data.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Server error. Please try again later.');
    } finally {
      setLoading(false);
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
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              style={{ padding: '30px', textAlign: 'center', border: 'none' }}
            >
              <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold', color: '#333' }}>
                Login
              </Typography>

              {errorMessage && (
                <Typography color="error" style={{ marginBottom: '10px' }}>
                  {errorMessage}
                </Typography>
              )}

              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{ style: { color: '#333' } }}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
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
                disabled={loading}
                style={{ marginTop: '20px', backgroundColor: '#4caf50' }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default LoginPage;
