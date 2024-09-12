import React, { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  Tabs,
  Tab,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
import { Search as SearchIcon, FilterList as FilterListIcon, Description as DescriptionIcon } from '@mui/icons-material';

// Mock data for demonstration
const userCrops = ['Wheat', 'Rice', 'Corn', 'Soybean'];

const mockContracts = [
  { id: 1, title: 'Wheat Contract 1', crop: 'Wheat', quantity: 1000, pricePerUnit: 250, startDate: '2023-07-01', endDate: '2023-09-30' },
  { id: 2, title: 'Rice Contract 1', crop: 'Rice', quantity: 2000, pricePerUnit: 300, startDate: '2023-08-01', endDate: '2024-01-31' },
  { id: 3, title: 'Corn Contract 1', crop: 'Corn', quantity: 1500, pricePerUnit: 180, startDate: '2023-07-15', endDate: '2023-11-15' },
  { id: 4, title: 'Soybean Contract 1', crop: 'Soybean', quantity: 800, pricePerUnit: 400, startDate: '2023-09-01', endDate: '2024-02-29' },
  { id: 2, title: 'Rice Contract 1', crop: 'Rice', quantity: 2000, pricePerUnit: 300, startDate: '2023-08-01', endDate: '2024-01-31' },
  { id: 3, title: 'Corn Contract 1', crop: 'Corn', quantity: 1500, pricePerUnit: 180, startDate: '2023-07-15', endDate: '2023-11-15' },
  { id: 4, title: 'Soybean Contract 1', crop: 'Soybean', quantity: 800, pricePerUnit: 400, startDate: '2023-09-01', endDate: '2024-02-29' },
  { id: 2, title: 'Rice Contract 1', crop: 'Rice', quantity: 2000, pricePerUnit: 300, startDate: '2023-08-01', endDate: '2024-01-31' },
  { id: 3, title: 'Corn Contract 1', crop: 'Corn', quantity: 1500, pricePerUnit: 180, startDate: '2023-07-15', endDate: '2023-11-15' },
  { id: 4, title: 'Soybean Contract 1', crop: 'Soybean', quantity: 800, pricePerUnit: 400, startDate: '2023-09-01', endDate: '2024-02-29' },
  // Add more mock contracts as needed
];

const handleNavigate = (path) => {
  window.location.href = path;
};

const ContractCard = ({ title, crop, quantity, pricePerUnit, startDate, endDate }) => (
  <Card sx={{ width: 230 }} onClick={()=>handleNavigate("/contract")}>
    <CardHeader
      avatar={<DescriptionIcon color="primary" fontSize="large" />}
      title={title}
      subheader={crop}
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary">
        Quantity: {quantity} units
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Price: ₹{pricePerUnit}/unit
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Start: {startDate}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        End: {endDate}
      </Typography>
    </CardContent>
  </Card>
);

const ContractCarousel = ({ contracts, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleContracts = contracts.slice(currentIndex, currentIndex + 3);

  return (
    <div style={{ marginBottom: '32px' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Box display="flex" justifyContent="space-evenly" gap={2}>
        {visibleContracts.map((contract) => (
          <ContractCard key={contract.id} {...contract} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        {contracts.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => setCurrentIndex(index)}
            style={{
              backgroundColor:
                index >= currentIndex && index < currentIndex + 3 ? '#1976d2' : '#c4c4c4',
            }}
          />
        ))}
      </Box>
    </div>
  );
};

export default function FindContracts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const filteredContracts = useMemo(() => {
    return mockContracts.filter((contract) => {
      const matchesSearch =
        contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contract.crop.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCrop = selectedCrop ? contract.crop.toLowerCase() === selectedCrop.toLowerCase() : true;
      const contractDuration =
        (new Date(contract.endDate).getTime() - new Date(contract.startDate).getTime()) / (1000 * 3600 * 24 * 30);
      const matchesDuration = selectedDuration
        ? (selectedDuration === 'short' && contractDuration <= 3) ||
          (selectedDuration === 'medium' && contractDuration > 3 && contractDuration <= 6) ||
          (selectedDuration === 'long' && contractDuration > 6)
        : true;
      return matchesSearch && matchesCrop && matchesDuration;
    });
  }, [searchTerm, selectedCrop, selectedDuration]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: "90%", margin: 'auto 10px', padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        Find Contracts
      </Typography>

      {/* Search and Filter Bar */}
      <Box  display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} mb={4}>
        <TextField
          variant="outlined"
          label="Search contracts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: <SearchIcon color="action" />,
          }}
        />
        <FormControl fullWidth>
          <InputLabel>Select crop</InputLabel>
          <Select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            label="Select crop"
          >
            <MenuItem value="">All Crops</MenuItem>
            {userCrops.map((crop) => (
              <MenuItem key={crop} value={crop.toLowerCase()}>
                {crop}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Select duration</InputLabel>
          <Select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            label="Select duration"
          >
            <MenuItem value="">All Durations</MenuItem>
            <MenuItem value="short">Short term (1-3 months)</MenuItem>
            <MenuItem value="medium">Medium term (3-6 months)</MenuItem>
            <MenuItem value="long">Long term (6+ months)</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          onClick={() => {
            setSearchTerm('');
            setSelectedCrop('');
            setSelectedDuration('');
          }}
        >
        </Button>
      </Box>

      {/* Contract Sections */}
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="contract tabs">
        <Tab label="All Contracts" value={0} />
        <Tab label="Recommended" value={1} />
        {userCrops.map((crop) => (
          <Tab key={crop} label={crop} value={crop} />
        ))}
      </Tabs>

      <Box mt={4}>
        {tabValue === 0 && <ContractCarousel contracts={filteredContracts} title="All Contracts" />}
        {tabValue === 1 && <ContractCarousel contracts={filteredContracts.slice(0, 3)} title="Recommended Contracts" />}
        {userCrops.map((crop) =>
          tabValue === crop.toLowerCase() ? (
            <ContractCarousel
              key={crop}
              contracts={filteredContracts.filter((c) => c.crop.toLowerCase() === crop.toLowerCase())}
              title={`${crop} Contracts`}
            />
          ) : null
        )}
      </Box>

      {/* My Contracts Section */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          My Contracts
        </Typography>
        <ContractCarousel contracts={mockContracts.slice(0, 3)} title="Ongoing Contracts" />
        <ContractCarousel contracts={mockContracts.slice(3, 6)} title="Negotiation Contracts" />
      </Box>
    </Box>
    </>
  );
}
