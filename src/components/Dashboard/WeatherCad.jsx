import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            
            const response = {
                temperature: '25°C',
                condition: 'Sunny',
                location: 'Farm Location',
            };
            setWeather(response);
        };

        fetchWeather();
    }, []);

    return (
        <Card style={styles.card}>
            <CardContent>
                <Typography variant="h6">Weather Updates</Typography>
                {weather ? (
                    <>
                        <Typography>Temperature: {weather.temperature}</Typography>
                        <Typography>Condition: {weather.condition}</Typography>
                        <Typography>Location: {weather.location}</Typography>
                    </>
                ) : (
                    <Typography>Loading weather data...</Typography>
                )}
            </CardContent>
        </Card>
    );
};

const styles = {
    card: {
        marginBottom: '20px',
    },
};

export default WeatherCard;
