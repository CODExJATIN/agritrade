import React from 'react';
import { Box, Typography } from '@mui/material';

const FarmBox = ({ status, duration, receivedAmount, dueAmount, cropType, backgroundImage }) => {
  const isOccupied = status === 'Occupied';

  const containerStyle = {
    position: 'relative',
    borderRadius: '8px',
    height: '250px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#ffffff',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: isOccupied ? 'grayscale(100%)' : 'none',
    zIndex: 1,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    zIndex: 2,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 3,
    padding: '20px',
  };

  const statusStyle = {
    color: isOccupied ? '#FF0000' : '#00FF00',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    fontFamily: "New Amsterdam",
    //border: `2px solid ${isOccupied ? '#FF0000' : '#00FF00'}`,
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    backdropFilter: 'blur(8px)', 
    WebkitBackdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  const availableStyle = {
    color: '#00FF00',
    fontWeight: 'bold',
    fontSize: '2rem',
    fontFamily: "New Amsterdam",
    padding: '5px 10px',
    borderRadius: '5px',
    backdropFilter: 'blur(8px)', 
    WebkitBackdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display:'grid',
    placeItems:'center',
    height: '100%', // Full height of the box
    textAlign: 'center',
  };

  return (
    <Box style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        {
            isOccupied && (
                <>
                  <Typography style={statusStyle}>{status}</Typography>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>Duration:</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>{duration}</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>Crop Type: {cropType}</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>Received Amount: ₹{receivedAmount}</Typography>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>Due Amount: ₹{dueAmount}</Typography>
                </>
            )
        }
        {
            !isOccupied && (
                <>
                  <Typography style={availableStyle}>{status}</Typography>
                </>
            )

        }
        
      </div>
    </Box>
  );
};

export default FarmBox;
