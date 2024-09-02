
import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import FarmBox from '../widgets/FarmBox';
import Navbar from '../widgets/Navbar';
import Sidebar from '../widgets/Sidebar';

const HomePage = () => {
  const farmDetails = [
    {
      status: 'Occupied',
      duration: 'January 2024 - December 2026',
      receivedAmount: 50000,
      dueAmount: 20000,
      cropType: 'Wheat',
      backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
    },
    {
      status: 'Available',
      duration: '',
      receivedAmount:0,
      dueAmount: 0,
      cropType: '',
      backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
    },
    {
        status: 'Occupied',
        duration: 'January 2024 - December 2026',
        receivedAmount: 20000,
        dueAmount: 60000,
        cropType: 'Corn',
        backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
      },

      {
        status: 'Available',
        duration: '',
        receivedAmount:0,
        dueAmount: 0,
        cropType: '',
        backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
      },

      {
        status: 'Available',
        duration: '',
        receivedAmount:0,
        dueAmount: 0,
        cropType: '',
        backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
      },

      {
        status: 'Available',
        duration: '',
        receivedAmount:0,
        dueAmount: 0,
        cropType: '',
        backgroundImage: 'https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg',
      },


  ];

  return (
    <>
      <Navbar />
      <Sidebar/>
      <Box
        sx={{
          marginLeft: '70px', // Respect the sidebar width
          padding: '20px',
          width: '100%',
        }}
      >
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        padding: '40px',
      }}
    >
      <Grid container spacing={4}>
        {farmDetails.map((farm, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontFamily: 'SUSE',
                  color: '#333',
                }}
              >
                Farm {index + 1}
              </Typography>
            </Box>
            <FarmBox {...farm} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
    </>
  );
};

export default HomePage;
