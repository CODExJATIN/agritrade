import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  LinearProgress,
  Box,
  Avatar,
} from "@mui/material";
import {
  Cloud as CloudIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Payment as PaymentIcon,
  Agriculture as AgricultureIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  CalendarToday as CalendarIcon,
  LocalShipping as TruckIcon,
  Farm as FarmIcon,
  Close as CloseIcon,
  Add as AddIcon,
} from "@mui/icons-material";

// Sample contract data
const contractData = {
  details: {
    cropType: "Wheat",
    duration: "6 months",
    paidAmount: 5000,
    remainingAmount: 15000,
    totalAmount: 20000,
  },
  stages: [
    { text: "Contract signed", icon: CheckCircleIcon, completed: true },
    { text: "Advance payment sent", icon: PaymentIcon, completed: true },
    { text: "Advance payment received", icon: PaymentIcon, completed: true },
    { text: "Crops transported", icon: TruckIcon, completed: false },
    { text: "Crops received", icon: AgricultureIcon, completed: false },
    { text: "Remaining payment completed", icon: CheckCircleIcon, completed: false },
  ],
  installments: [
    { date: "2023-07-01", amount: 5000, completed: true },
    { date: "2023-08-01", amount: 5000, completed: false },
    { date: "2023-09-01", amount: 5000, completed: false },
    { date: "2023-10-01", amount: 5000, completed: false },
  ],
  weather: {
    temperature: 25,
    condition: "Cloudy",
    rainAlert: true,
  },
  assignedTo: "John Doe (Farmer)",
  assignedBy: "Jane Smith (Contractor)",
};

export default function ContractDashboard() {
  const [progress, setProgress] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(
      () => setProgress((contractData.details.paidAmount / contractData.details.totalAmount) * 100),
      500
    );
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, contractData.installments.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleDialogClose = () => setOpenDialog(false);
  const handleDialogOpen = () => setOpenDialog(true);

  return (
    <>
    <Box sx={{ width: "90%", mx: "auto", p: 4 }}>
      <Typography sx={{color:"white",fontWeight:"bold"}} variant="h4" align="center" gutterBottom>
        Contract Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height:'350px',
              borderRadius:'20px'
            }}
          >
            <CardHeader
              avatar={<AgricultureIcon sx={{
                fontSize:"50px",
              }}/>}
              title="Contract Details"
              subheader="Overview of contract"
            />
            <CardContent>
              <Typography><strong>Crop Type:</strong> {contractData.details.cropType}</Typography>
              <Typography><strong>Duration:</strong> {contractData.details.duration}</Typography>
              <Typography><strong>Paid Amount:</strong> ₹{contractData.details.paidAmount}</Typography>
              <Typography><strong>Remaining Amount:</strong> ₹{contractData.details.remainingAmount}</Typography>
              <LinearProgress variant="determinate" value={progress} 
                   sx={{
                    my:2,
                    height: 10, 
                    borderRadius: '5px', 
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'green', 
                      borderRadius: '5px', 
                    },
                  }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{
            height:'350px',
            borderRadius:'20px'
          }}>
            <CardHeader
              title="Contract Progress"
              subheader="Stage-by-stage updates"
            />
            <CardContent>
              {contractData.stages.map((stage, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <stage.icon sx={{ mr: 1 }} color={stage.completed ? "success" : "disabled"} />
                  <Typography color={stage.completed ? "success.main" : "text.secondary"}>
                    {stage.text}
                  </Typography>
                </Box>
              ))}
              <LinearProgress variant="determinate" value={(contractData.stages.filter(stage => stage.completed).length / contractData.stages.length) * 100}
                 sx={{
                  height: 10, // Adjust height if you want thicker progress bar
                    borderRadius: '5px', // Rounded edges for the track
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'green', // Color of the progress bar
                      borderRadius: '5px', // Rounded edges for the progress bar
                    },
                 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              avatar={<CalendarIcon />}
              title="Payment Installments"
              subheader="Track payments"
              sx={{
                borderRadius:'20px'
              }}
            />
            <CardContent>
              {contractData.installments.map((installment, index) => (
                <Box key={index} display="flex" alignItems="center" justifyContent="space-evenly" mb={1}>
                  <Typography>{installment.date}</Typography>
                  <LinearProgress variant="determinate"
                  value={installment.completed ? 100 : 0} sx={{ 
                    width: "60%",
                    height: 5, 
                    borderRadius: '5px', 
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: 'green', 
                      borderRadius: '5px',
                    },

                   }} />
                  <Typography>₹{installment.amount}</Typography>
                  {installment.completed ? <CheckCircleIcon color="success" /> : <CloseIcon color="error" />}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card
           sx={{
            borderRadius:'20px'
           }}
          >
            <CardHeader
              avatar={<CloudIcon />}
              title="Weather Updates"
              subheader="Current weather conditions"
            />
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center">
                  <Avatar sx={{ bgcolor: contractData.weather.condition === "Cloudy" ? "grey.500" : "blue.500", mr: 2 }}>
                    <CloudIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{contractData.weather.temperature}°C</Typography>
                    <Typography>{contractData.weather.condition}</Typography>
                  </Box>
                </Box>
                {contractData.weather.rainAlert && (
                  <Box display="flex" alignItems="center" color="warning.main">
                    <WarningIcon sx={{ mr: 1 }} />
                    <Typography>Rain Alert</Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Card
           sx={{
            borderRadius:'20px'
           }}
          >
            <CardHeader
              avatar={<AddIcon />}
              title="Updates"
              action={
                <>
                  <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton onClick={handleNext} disabled={currentIndex >= contractData.installments.length - 1}>
                    <ChevronRightIcon />
                  </IconButton>
                </>
              }
            />
            <CardActions>
              <Button onClick={handleDialogOpen}>Provide Update</Button>
            </CardActions>
          </Card>

          <Dialog open={openDialog} onClose={handleDialogClose}>
            <DialogTitle>Add New Update</DialogTitle>
            <DialogContent>
              <DialogContentText>Provide details about the current status of the contract.</DialogContentText>
              <TextField autoFocus margin="dense" id="updateText" label="Update Text" fullWidth variant="outlined" />
              <TextField margin="dense" id="updateImage" label="Image File" type="file" fullWidth variant="outlined" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">Cancel</Button>
              <Button onClick={handleDialogClose} color="primary">Add Update</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
