import React from 'react';
import { Box, Card, CardContent, Typography, Button, Divider, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AIFeaturesCard = () => {
  const navigate = useNavigate();

  const handleViewAI = () => {
    navigate('/ai');
  };

  return (
    <Card sx={{
      maxWidth: 900,
      mx: 'auto',
      my: 4,
      p: 2,
      boxShadow: 3,
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: 2,
      textAlign: 'center',
      position: 'relative'
    }}>
      <CardMedia
        component="img"
        height="200"
        image="https://th.bing.com/th/id/OIG3.Tjqj3yzizQYYUMYQh.SE?pid=ImgGn" // Replace with the path to your image
        alt="AI Features"
        sx={{
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: '#333', mb: 2 }}>
          AI Features
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Discover how our AI-powered tools enhance your experience with personalized recommendations, disease detection, and more. Our advanced AI algorithms are designed to provide you with the most relevant insights and support.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleViewAI} sx={{ mt: 2 }}>
          Explore AI Features
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIFeaturesCard;
