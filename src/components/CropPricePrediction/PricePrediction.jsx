import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent, CardHeader, Box, MenuItem } from '@mui/material';
import {toast} from 'react-toastify'
const CropPricePrediction = () => {
  const [cropType, setCropType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [month, setMonth] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const cropMSP = {
    wheat: 2000,
    rice: 2500,
    maize: 1500,
    millets: 1800,
    barley: 1700,
    pulses: 4500,
    sugarcane: 3000,
    cotton: 3500,
    jute: 2400,
    groundnut: 3800,
    mustard: 4000,
    soybean: 3700,
    sunflower: 4200,
    tea: 20000,
    coffee: 15000,
    rubber: 13000,
    coconut: 10000,
    tobacco: 12000,
    banana: 6000,
    mango: 8000,
    papaya: 5000,
    grapes: 7000,
    orange: 8000,
    apple: 10000,
    potato: 1000,
    tomato: 1500,
    onion: 800,
    garlic: 6000,
    ginger: 10000,
    turmeric: 9000,
    pepper: 15000,
    cardamom: 100000,
    coriander: 15000,
    cumin: 20000,
    chili: 15000,
    clove: 80000,
    cinnamon: 90000,
    bayleaf: 40000,
    fennel: 15000,
    peas: 3000,
    lentils: 6000,
    chickpeas: 4500,
    tur: 6000,
    urad: 7000,
    moong: 8000,
    sesame: 15000,
    linseed: 13000,
    safflower: 14000,
    ragi: 2500,
    jowar: 2000,
    bajra: 1900,
    watermelon: 1000,
    pineapple: 5000,
    guava: 6000,
    lychee: 15000,
    custardapple: 10000,
    pomegranate: 12000,
    jackfruit: 8000,
    sapodilla: 7000,
    strawberry: 20000,
    pear: 10000,
    plum: 8000,
    peach: 8000,
    lemon: 4000,
    lime: 4000,
    tangerine: 7000,
    dragonfruit: 20000,
    zucchini: 6000,
    cabbage: 2000,
    cauliflower: 3000,
    broccoli: 5000,
    spinach: 2500,
    lettuce: 4000,
    brinjal: 1500,
    okra: 2000,
    bittergourd: 2500,
    bottlegourd: 1500,
    snakegourd: 1800,
    ashgourd: 2000,
    cucumber: 2000,
    pumpkin: 2000,
    carrot: 3000,
    beetroot: 2500,
    radish: 1500,
    turnip: 1500,
    sweetpotato: 2000,
    yam: 4000,
    colocasia: 5000,
    amaranth: 4000,
    methi: 4500,
    mint: 6000,
    basil: 7000,
    parsley: 8000,
    drumstick: 9000,
    aloevera: 10000,
    bamboo: 15000,
    rosemary: 9000,
    thyme: 8000,
    lavender: 15000,
    oregano: 10000,
    sage: 11000,
    curryleaf: 12000,
    neem: 3000,
    eucalyptus: 5000,
    lemongrass: 8000,
    citronella: 9000,
    chamomile: 7000,
    hibiscus: 6000,
    jasmine: 8000,
    marigold: 5000,
    rose: 10000,
    lotus: 15000,
    sunflowerseeds: 12000,
    poppyseeds: 18000,
    saffron: 100000,
    tamarind: 7000,
    amla: 6000,
    sandalwood: 50000,
    mahua: 3000,
    betelleaf: 15000,
    arecanut: 18000,
    palmyrapalm: 8000,
    datepalm: 12000,
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const handlePredict = () => {
    if (!quantity || isNaN(quantity) || !cropType || !month) {
      toast.error('Please select a crop type, month, and enter a valid quantity.');
      return;
    }

    const msp = cropMSP[cropType.toLowerCase()];

    if (!msp) {
      toast.error('MSP for the selected crop is not available.');
      return;
    }

    const price = quantity * msp;
    setPredictedPrice(price);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto', boxShadow: 3, borderRadius: 2 }}>
      <CardHeader
        title="Crop Price Prediction Tool"
        sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}
      />
      <CardContent>
        <TextField
          label="Crop Type"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
        >
          {Object.keys(cropMSP).map((crop, index) => (
            <MenuItem key={index} value={crop}>
              {crop.charAt(0).toUpperCase() + crop.slice(1)}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Month"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {months.map((month, index) => (
            <MenuItem key={index} value={month}>
              {month}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Quantity (in tons)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handlePredict}
        >
          Predict
        </Button>

        {predictedPrice !== null && (
          <Box sx={{ marginTop: 4, textAlign: 'center' }}>
            <Typography variant="h6">Prediction Results:</Typography>
            <Typography variant="body1">Crop Type: {cropType.charAt(0).toUpperCase() + cropType.slice(1)}</Typography>
            <Typography variant="body1">Month: {month}</Typography>
            <Typography variant="body1">Quantity: {quantity} tons</Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Minimum Price: ₹{predictedPrice}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CropPricePrediction;
