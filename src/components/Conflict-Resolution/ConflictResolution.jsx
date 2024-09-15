import React, { useState,useEffect } from 'react';
import { 
  Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel, Card, CardContent, CardHeader, Tabs, Tab ,Typography, List, ListItem, ListItemText
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChatIcon from '@mui/icons-material/Chat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function ConflictResolution() {
  const [guidelinesAccepted, setGuidelinesAccepted] = useState(false);
  const [issueSubmitted, setIssueSubmitted] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    window.scrollTo({
        top:0,
        behaviour:'smooth'
    })
  }, [guidelinesAccepted]);

  

  const handleAcceptGuidelines = () => {
    setGuidelinesAccepted(true);
  };

  const handleSubmitIssue = (e) => {
    e.preventDefault();
    setIssueSubmitted(true);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 5) {
      alert("You can upload a maximum of 5 files.");
    } else {
      setUploadedFiles(files);
    }
  };

  if (!guidelinesAccepted) {
    return (
      <Box sx={{ maxWidth: "100%", mx: 'auto', p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <GavelIcon sx={{ mr: 2, fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h4" component="h1" gutterBottom>
            Guidelines for Conflict Resolution
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Welcome to the Conflict Resolution page. This platform aims to provide a fair, transparent, and efficient way for farmers and contractors to resolve disputes. Please review the following guidelines before reporting any issues.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          1. Code of Conduct
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Communicate Respectfully: Maintain respectful and professional behavior throughout the process. Any form of abusive language, threats, or harassment will not be tolerated." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Provide Accurate Information: Submit only truthful and accurate information. False claims or evidence may result in penalties." />
          </ListItem>
        </List>
        <Typography variant="h6" component="h2" gutterBottom>
          2. Conditions for Raising a Conflict
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="You are a Registered User: Only users who have entered into a formal contract through our platform can report an issue." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Timing: Conflicts must be raised within 30 days of the contract's breach or completion." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Evidence: You are required to provide relevant supporting documents (e.g., contract agreements, communication records, photographs)." />
          </ListItem>
        </List>
        <Typography variant="h6" component="h2" gutterBottom>
          3. Conflict Resolution Process
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Issue Review: Our team will review the reported issue and the submitted evidence." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mediation: Both parties will participate in mediation, where our platform will facilitate discussions to reach a mutual agreement." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Escalation: If mediation fails, the issue will be escalated to arbitration for final resolution." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Finality: Any decision reached through arbitration is binding for both parties." />
          </ListItem>
        </List>
        <Typography variant="h6" component="h2" gutterBottom>
          4. Non-Compliance and Penalties
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Temporary Suspension: Your account may be suspended if you do not comply with the process." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Permanent Termination: Repeated or serious violations may result in permanent account termination." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Legal Action: In unresolved cases, parties may take legal action outside of the platform after the internal process is completed." />
          </ListItem>
        </List>
        <Typography variant="h6" component="h2" gutterBottom>
          5. Confidentiality
        </Typography>
        <Typography variant="body1" paragraph>
          All conflict resolution proceedings will remain confidential. The platform will not disclose any details of the dispute to third parties unless required by law.
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          6. Commitment to Resolution
        </Typography>
        <Typography variant="body1" paragraph>
          By participating in the conflict resolution process, both parties agree to engage in good faith to find a mutually acceptable solution.
        </Typography>
        <Button variant="contained" color="success" onClick={handleAcceptGuidelines} sx={{ mt: 2 }}>
          Accept
        </Button>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          By clicking Accept, you agree to follow the guidelines and engage in the conflict resolution process in good faith.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minWidth:"80%", mx: 'auto', p: 4, bgcolor: 'aliceblue' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <GavelIcon sx={{ mr: 2, fontSize: 32, color: 'green.800' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'green.800' }}>
          Dispute Resolution Center
        </h1>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Report Issue" />
        <Tab label="Track Issues" />
      </Tabs>

      {tabValue === 0 && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardHeader title="Report an Agricultural Dispute" subheader="Fill out the form below to report a new agricultural dispute" />
          <CardContent>
            <form onSubmit={handleSubmitIssue}>
              <Box sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <TextField
                    required
                    label="Contract Reference ID"
                    placeholder="Enter Contract ID"
                  />
                </FormControl>
              </Box>

              <Box sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Dispute Category</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="payment">Payment Dispute</MenuItem>
                    <MenuItem value="breach">Contract Breach</MenuItem>
                    <MenuItem value="quality">Crop Quality Issue</MenuItem>
                    <MenuItem value="communication">Miscommunication</MenuItem>
                    <MenuItem value="delivery">Harvest Delivery Issues</MenuItem>
                    <MenuItem value="other">Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Dispute Description"
                  multiline
                  rows={4}
                  placeholder="Describe your agricultural dispute in detail"
                  required
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Desired Outcome"
                  multiline
                  rows={4}
                  placeholder="How do you wish the dispute to be resolved?"
                  required
                />
              </Box>

              <Box
                sx={{
                  mb: 2,
                  p: 2,
                  border: '2px dashed gray',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'gray.100',
                  },
                }}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Typography variant="body1" color="textPrimaty">
                    Click or drag files here to upload as evidance (Max 5 files)
                  </Typography>
                </label>
              </Box>

              {uploadedFiles.length > 0 && (
                <List sx={{ mb: 2 }}>
                  {uploadedFiles.map((file, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={file.name} />
                    </ListItem>
                  ))}
                </List>
              )}

              <FormControlLabel
                control={<Checkbox required />}
                label="I confirm that all information provided is accurate and true."
              />

              <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" color="success">
                  Submit Dispute
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      )}

      {tabValue === 1 && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardHeader title="Track Your Agricultural Disputes" subheader="View and manage your reported agricultural disputes." />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <IssueCard
                id="AGRI-001"
                category="Payment Dispute"
                status="Under Investigation"
                date="2023-06-15"
                description="Late payment for wheat harvest delivery"
              />
              <IssueCard
                id="AGRI-002"
                category="Crop Quality Issue"
                status="Mediation Scheduled"
                date="2023-06-10"
                description="Delivered corn not meeting agreed quality standards"
              />
              <IssueCard
                id="AGRI-003"
                category="Contract Breach"
                status="Resolved"
                date="2023-06-05"
                description="Failure to deliver soybean harvest on agreed date"
              />
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}

function IssueCard({ id, category, status, date, description }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Payment Dispute':
        return <GavelIcon sx={{ mr: 1 }} />;
      case 'Crop Quality Issue':
        return <AgricultureIcon sx={{ mr: 1 }} />;
      case 'Contract Breach':
        return <FileCopyIcon sx={{ mr: 1 }} />;
      case 'Miscommunication':
        return <ChatIcon sx={{ mr: 1 }} />;
      case 'Harvest Delivery Issues':
        return <LocalShippingIcon sx={{ mr: 1 }} />;
      default:
        return null;
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {getCategoryIcon(category)}
          <h3>{id}</h3>
        </Box>
        <p><strong>Status:</strong> {status}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Description:</strong> {description}</p>
      </CardContent>
    </Card>
  );
}
