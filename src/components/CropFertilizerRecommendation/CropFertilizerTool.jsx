import React, { useState } from 'react';
import { Box, Button, Card, CardContent,CardHeader, TextField, Typography, CircularProgress } from '@mui/material';

const CropAndFertilizerPrediction = () => {
  const [rainfall, setRainfall] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [potassium, setPotassium] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [phLevel, setPhLevel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState(null);

  const handlePredict = () => {
    setIsLoading(true);

    // Simulate data analysis delay
    setTimeout(() => {
      // Dummy predictions data
      const predictedCrops = ['Wheat', 'Rice', 'Maize', 'Cotton'];
      const recommendedFertilizers = ['Urea', 'DAP', 'Potash', 'Zinc'];

      setPredictions({ predictedCrops, recommendedFertilizers });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card sx={{ maxWidth: 400, minHeight: 400, margin: '20px auto', boxShadow: 3, borderRadius: 2 }}>
      <CardHeader
        title="Crop and Fertilizer Prediction Tool"
        sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}
      />
      <CardContent>

        {!isLoading && !predictions && (
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ flex: '1 1 45%' }}>
                <TextField
                  label="Rainfall (mm)"
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Humidity (%)"
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Temperature (°C)"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
              </Box>
              <Box sx={{ flex: '1 1 45%' }}>
                <TextField
                  label="Potassium (K)"
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Nitrogen (N)"
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="Phosphorus (P)"
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <TextField
                  label="pH Level"
                  value={phLevel}
                  onChange={(e) => setPhLevel(e.target.value)}
                  fullWidth
                  sx={{ mt: 2 }}
                />
              </Box>
            </Box>

            <Button variant="contained" color="primary" onClick={handlePredict}>
              Predict
            </Button>
          </Box>
        )}

        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '150px',
            }}
          >
            <CircularProgress />
            <Typography sx={{ ml: 2 }}>Please wait, analyzing the data...</Typography>
          </Box>
        )}

        {predictions && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Predicted Crops:</Typography>
            <ul>
              {predictions.predictedCrops.map((crop, index) => (
                <li key={index}>{crop}</li>
              ))}
            </ul>

            <Typography variant="h6">Recommended Fertilizers:</Typography>
            <ul>
              {predictions.recommendedFertilizers.map((fertilizer, index) => (
                <li key={index}>{fertilizer}</li>
              ))}
            </ul>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CropAndFertilizerPrediction;
