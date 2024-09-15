import React, { useState, useRef } from 'react';
import { Box, Button, Grid,Dialog, MenuItem, Select, TextField, Typography, Tabs, Tab, CircularProgress } from '@mui/material';
import CropPricePrediction from '../CropPricePrediction/PricePrediction';
import CropAndFertilizerPrediction from '../CropFertilizerRecommendation/CropFertilizerTool';

export default function AIAgricultureAssistant() { 
  const [diseaseImage, setDiseaseImage] = useState(null);
  const [diseaseResult, setDiseaseResult] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const canvasRef = useRef(null);

  const [currentTab, setCurrentTab] = useState(0);

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing the camera: ", err));
  };
  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setDiseaseImage(canvas.toDataURL('image/png'));
    setIsCameraOpen(false);
  
    // Stop camera stream after capturing
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
  };
  
  



  const detectDisease = () => {
    setIsDetecting(true);
    setTimeout(() => {
      setDiseaseResult({
        disease: 'Leaf Blight',
        details: 'Leaf blight is a fungal disease that affects various crops.',
        steps: '1. Remove affected leaves. 2. Apply fungicide. 3. Improve air circulation.',
        cures: 'Copper-based fungicides',
        fertilizers: 'Low nitrogen, high potassium fertilizers'
      });
      setIsDetecting(false);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setDiseaseImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    setDiseaseImage(canvas.toDataURL('image/jpeg'));
    setIsCameraOpen(false);
    videoRef.current.srcObject.getTracks().forEach(track => track.stop());
  };

  return (
    <Box sx={{ minWidth:'100%',minHeight: '100vh', backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', p: 4 }}>
      <Box sx={{ backgroundColor: '#f4fff9', borderRadius: '8px', p: 4, mx: 'auto', width: '90%', maxWidth: '1200px', boxShadow: 3, border: '1px solid #e0f2e9' }}>
        <Typography sx={{fontWeight:'bold'}} variant="h3" gutterBottom textAlign="center" color="green">AgriTrade AI features</Typography>

        <Grid container spacing={4}>
          <Grid item lg={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box component="img" src="https://th.bing.com/th/id/OIG4.97EenZXSo.VQgev6q98B?pid=ImgGn" alt="Agriculture" width="100%" sx={{ borderRadius: '8px', boxShadow: 3 }} />
          </Grid>

          <Grid item lg={6}>
            <Tabs value={currentTab} onChange={(e, newValue) => setCurrentTab(newValue)} aria-label="AI Assistant Tabs">
              <Tab label="Price Prediction" />
              <Tab label="Crop & Fertilizer" />
              <Tab label="Disease Detection" />
            </Tabs>

            {currentTab === 0 && (
              <CropPricePrediction/>
            )}

            {currentTab === 1 && (
              <CropAndFertilizerPrediction/>
            )}

            {currentTab === 2 && (
              <Box sx={{ p: 4, backgroundColor: '#e9f5e8', borderRadius: '8px', mt: 2 }}>
                <Button
                  onClick={() => fileInputRef.current.click()}
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Upload Image
                </Button>

                <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileUpload} />

                <Button
                  onClick={handleOpenCamera}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2 }}
                >
                  Open Camera
                </Button>

                <Dialog open={isCameraOpen} onClose={() => setIsCameraOpen(false)} maxWidth="sm" fullWidth>
  <Box sx={{ textAlign: 'center', p: 2 }}>
    <video ref={videoRef} autoPlay style={{ width: '100%' }} />
    <Button variant="contained" color="primary" onClick={handleCapture} sx={{ mt: 2 }}>
      Capture
    </Button>
  </Box>
</Dialog>


              

                {diseaseImage && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1">Uploaded Image:</Typography>
                    <Box component="img" src={diseaseImage} alt="Uploaded Disease" sx={{ width: '100%', borderRadius: '8px', boxShadow: 3 }} />
                    <Button
                      onClick={detectDisease}
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ mt: 2 }}
                      disabled={isDetecting}
                    >
                      {isDetecting ? <CircularProgress size={24} /> : "Detect Disease"}
                    </Button>
                  </Box>
                )}



                {isDetecting && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                    <CircularProgress />
                    <Typography sx={{ mt: 2 }}>Please wait, analyzing data...</Typography>
                  </Box>
                )}

                {diseaseResult && (
                  <Box sx={{ mt: 2, backgroundColor: '#d4edda', p: 3, borderRadius: '8px', textAlign: 'center', boxShadow: 3 }}>
                    <Typography variant="h6" color="green">Disease: {diseaseResult.disease}</Typography>
                    <Typography variant="body1">{diseaseResult.details}</Typography>
                    <Typography variant="body1"><strong>Prevention Steps:</strong> {diseaseResult.steps}</Typography>
                    <Typography variant="body1"><strong>Cures:</strong> {diseaseResult.cures}</Typography>
                    <Typography variant="body1"><strong>Recommended Fertilizers:</strong> {diseaseResult.fertilizers}</Typography>
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
