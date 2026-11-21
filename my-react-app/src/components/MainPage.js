import React from 'react';
import Navbar from './Navbar';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Home, Build, LocalGasStation, AccountBalanceWallet, Info } from '@mui/icons-material'; // Importing icons

const cardData = [
  {
    icon: <Home />,
    title: 'Home',
    description: 'Go back to the home page',
    buttonText: 'Go Home',
  },
  {
    icon: <Build />,
    title: 'Services',
    description: 'Explore our fuel services',
    buttonText: 'View Services',
  },
  {
    icon: <LocalGasStation />,
    title: 'Transactions',
    description: 'Manage your fuel transactions',
    buttonText: 'View Transactions',
  },
  {
    icon: <AccountBalanceWallet />,
    title: 'Wallet',
    description: 'Check your wallet balance',
    buttonText: 'Check Balance',
  },
  {
    icon: <Info />,
    title: 'About Us',
    description: 'Learn more about PetroConnect',
    buttonText: 'Learn More',
  },
];

const MainPage = () => {
  return (
    <Box sx={{ padding: 0, background: ' #d1e7b7', paddingTop: '0px' }}>
      {/* Render the Navbar */}
      <Navbar sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }} />
      
      {/* Add padding above the cards */}
      <Box sx={{ padding: 4, paddingTop: '10px' }}> {/* Adjust paddingTop as needed */}
        
        <Grid container spacing={4}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  boxShadow: 3, // Shadow effect
                  borderRadius: 2,
                  height: '350px',
                  transition: '0.3s', // Smooth transition for hover effect
                  '&:hover': {
                    boxShadow: 6, // Increase shadow on hover
                  },
                }}
              >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Box sx={{ fontSize: '50px', color: 'white', backgroundColor: '#4caf50', borderRadius: '8px 8px 0 0', padding: 2 }}>
                    {card.icon}
                  </Box>
                  <Box sx={{ padding: 2 }}>
                    <Typography variant="h5" sx={{ marginTop: 2, color: '#333' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ margin: '10px 0', color: '#555' }}>
                      {card.description}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#4caf50', color: '#fff', padding: '8px 16px' }}>
                      {card.buttonText}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MainPage;
