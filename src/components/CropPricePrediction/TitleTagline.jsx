import React from 'react';
import { Typography } from '@mui/material';

const TitleAndTagline = () => {
    return (
        <div style={styles.container}>
            <Typography variant="h4" component="h1" style={styles.title}>
                Crop Price Prediction
            </Typography>
            <Typography variant="h6" component="p" style={styles.tagline}>
                Estimate the minimum price of crops based on current MSP values.
            </Typography>
        </div>
    );
};

const styles = {
    container: {
        flex: '1',
        maxWidth: '600px',
        padding: '20px'
    },
    title: {
        marginBottom: '10px'
    },
    tagline: {
        color: '#666',
        maxWidth: '300px'
    }
};

export default TitleAndTagline;
