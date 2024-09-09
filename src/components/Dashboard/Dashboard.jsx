import React from 'react';
import ContractProgress from './ProgressBar';
import InstallmentProgress from './InstallmentBar';
import WeatherCard from './WeatherCad';
import UpdatesSection from './UpdatesSection';
import { Card, CardContent, Typography, Grid, autocompleteClasses } from '@mui/material';

const styles = {
    dashboard: {
        backgroundColor:'aliceblue',
        display: 'flex',
        justifyContent: 'space-between', 
        padding: '20px',
        gap: '20px',
        margin: '20px auto',
        width:'90%',
        borderRadius: '10px',
       
    },
    contractDetails: {
        flex: 2,
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    sidebar: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    card: {
        marginBottom: '20px'
    },
};

const ContractDashboard = () => {

    const milestones = [
        { name: 'Contract Signed', completed: true },
        { name: 'Advance Payment Sent', completed: true },
        { name: 'Advance Payment Received', completed: false },
        { name: 'Crops Transported', completed: false },
        { name: 'Crops Received', completed: false },
        { name: 'Remaining Payment', completed: false },
        { name: 'Contract Completed', completed: false },
    ];

    const installments = [
        { date: '2024-09-01', status: 'Pending', paid: false },
        { date: '2024-10-01', status: 'Pending', paid: false },
        { date: '2024-11-01', status: 'Pending', paid: false },
    ];

    return (
        <>
        <Typography variant="h2" align="center" sx={{marginTop:'10px'}}>
            Contract Dashboard
        </Typography>
        <Grid container style={styles.dashboard}>

            <Grid item style={styles.contractDetails}>
                <Card style={styles.card}>
                    <CardContent>
                        <Typography variant="h5">Contract Details</Typography>
                        <Typography>Crop: Wheat</Typography>
                        <Typography>Duration: 6 months</Typography>
                        <Typography>Paid Amount: ₹50,000</Typography>
                        <Typography>Remaining Amount: ₹30,000</Typography>
                    </CardContent>
                </Card>

                <ContractProgress milestones={milestones} />
                <InstallmentProgress installments={installments} />
            </Grid>

            
            <Grid item style={styles.sidebar}>
                <WeatherCard />
                <UpdatesSection />
                <Card style={styles.card}>
                    <CardContent>
                        <Typography>Assigned To: Farmer A</Typography>
                        <Typography>Assigned By: Contractor B</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    );
};

export default ContractDashboard;
