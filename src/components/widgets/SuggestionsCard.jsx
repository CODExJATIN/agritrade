import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContractCorousel from './ContractCorousel'

const ContractsCard = () => {
  const navigate = useNavigate();

  const handleNavigateToContracts = () => {
    navigate('/find'); // Path to the contracts page
  };

  return (
    <Card sx={{
      maxWidth: 1200,
      mx: 'auto',
      my: 4,
      p: 2,
      boxShadow: 3,
      backgroundColor: '#f9f9f9',
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      textAlign: 'center',
    }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: '#2c5f2d', mb: 2 }}>
          Contracts You Might Like
        </Typography>

        <Box sx={{ mb: 3 }}>
          <ContractCorousel />
        </Box>

        <Button variant="contained" color="primary" onClick={handleNavigateToContracts}>
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContractsCard;
