import React from 'react';
import { Box, Card, CardContent, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewsCard = () => {
  const navigate = useNavigate();

  const news = [
    {
      title: 'Innovative Farming Techniques for 2024',
      summary: 'Explore the latest farming techniques that are set to revolutionize agriculture in 2024.',
    },
    {
      title: 'Government Schemes for Farmers',
      summary: 'Learn about the new government schemes aimed at supporting farmers in the upcoming season.',
    },
  ];

  const handleViewMore = () => {
    navigate('/news');
  };

  return (
    <Card sx={{
      maxWidth: 900,
      mx: 'auto',
      my: 4,
      p: 2,
      boxShadow: 3,
      backgroundColor: '#f0f8f4', // Light greenish background
      border: '1px solid #d0e3b4', // Light border to resemble agricultural theme
      borderRadius: 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom sx={{ color: '#4a773c' }}> {/* Dark green color */}
          Latest Agriculture News & Expert Insights
        </Typography>
        <Divider sx={{ mb: 2, borderColor: '#c2d8b0' }} /> {/* Light green divider */}
        {news.length ? (
          news.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="h6" component="div" sx={{ color: '#3a6f41' }}> {/* Slightly darker green */}
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {item.summary}
              </Typography>
              {index < news.length - 1 && <Divider sx={{ my: 2, borderColor: '#c2d8b0' }} />}
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No news available at the moment.
          </Typography>
        )}
        <Button variant="contained" color="success" onClick={handleViewMore} sx={{ mt: 2 }}>
          View More
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
