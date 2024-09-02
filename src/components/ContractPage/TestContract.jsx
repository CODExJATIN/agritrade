import React, { useState } from 'react';
import ContractView from './ContractPage';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {driver} from 'driver.js';
import "driver.js/dist/driver.css";


// Sample contract data
const sampleContract = {
    contractId: 'C002',
    title: 'Rice Contract',
    contractorName: 'Amit Shah',
    contractorAddress: 'Surat, Gujarat',
    cropType: 'Rice',
    quantity: 200,
    pricePerUnit: 7000,
    startDate: '2024-08-01',
    endDate: '2025-02-01',
    transportationCost: 'Farmer',
    additionalTerms: ['High-quality seeds only', 'Monthly progress report'],
    includeAdditionalTerms: true,
    advancePayment: 100000,
    paymentPreferences: 'full',
    remainingAmount: 1300000,
    installmentAmount: null,
    contractStatus: 'Open', // Open for negotiation
    assignedTo: null, // Not assigned yet
    postedBy: 'CTR002', // Contractor ID
    bids: [
        {
            farmerName: 'Farmer A',
            bidAmount: 1200000,
            date: '2024-09-01',
            comments: 'Willing to negotiate on the price.',
            contractorOffer: '',
            accepted: false,
        },
        {
            farmerName: 'Farmer B',
            bidAmount: 1250000,
            date: '2024-09-02',
            comments: 'Offer includes transportation.',
            contractorOffer: '',
            accepted: false,
        },
    ],
};


const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Ensure this property is defined
      },
      secondary: {
        main: '#dc004e',
      },
      // Define other colors as needed
    },
  });

function TestContractView() {
    const [view, setView] = useState('farmer');

    const handleViewChange = (userType) => {
        setView(userType);
    };

    const startWalkthrough = () => {
        const driverObj = driver({
            showProgress: true,
            overlayColor: 'green',

        steps:[
            {
                element: '#contract-testing-title',
                popover: {
                    title: 'Contract Testing',
                    description: 'This is the title of the contract testing page.',
                    position: 'bottom',
                },
            },
            {
                element: '#test-as-farmer',
                popover: {
                    title: 'Test as Farmer',
                    description: 'Click here to test the contract view as a farmer.',
                    position: 'bottom',
                },
            },
            {
                element: '#test-as-contractor',
                popover: {
                    title: 'Test as Contractor',
                    description: 'Click here to test the contract view as a contractor.',
                    position: 'bottom',
                },
            },
            {
                element: '#contract-view',
                popover: {
                    title: 'Contract View',
                    description: 'This is the detailed view of the contract.',
                    position: 'right',
                },
            },
        ]
        });
    
        driverObj.drive();
    };
    

    return (
        <div>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color="default" style={{ width: '100%' }}>
            <Toolbar
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '10px 20px',
                }}
            >
                <Typography
                    id="contract-testing-title"
                    variant="h6"
                    style={{
                        flexGrow: 1,
                        marginBottom: '10px',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    Contract Testing
                </Typography>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <Button
                        id="test-as-farmer"
                        onClick={() => handleViewChange('farmer')}
                        style={{
                            borderBottom: view === 'farmer' ? '2px solid' : 'none',
                            borderRadius: '0',
                            marginRight: '10px',
                        }}
                    >
                        Test as Farmer
                    </Button>
                    <Button
                        id="test-as-contractor"
                        onClick={() => handleViewChange('contractor')}
                        style={{
                            borderBottom: view === 'contractor' ? '2px solid' : 'none',
                            borderRadius: '0',
                        }}
                    >
                        Test as Contractor
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
            <div id="contract-view">
                {view === 'farmer' ? (
                    <>
                        <h2>Testing as Farmer</h2>
                        <ContractView contract={sampleContract} userID="Farmer A" userType="farmer" />
                    </>
                ) : (
                    <>
                        <h2>Testing as Contractor</h2>
                        <ContractView contract={sampleContract} userID="CTR002" userType="contractor" />
                    </>
                )}
            </div>
            <Button
    onClick={startWalkthrough}
    variant="contained"
    color="primary"
    style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
    }}
>
    Start Walkthrough
</Button>

            </ThemeProvider>
        </div>
    );
}

export default TestContractView;

