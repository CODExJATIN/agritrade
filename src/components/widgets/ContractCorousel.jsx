import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sampleContracts = [
    {
        contractID: '1',
        title: 'CONTRACT',
        cropType: 'Wheat',
        quantity: 100,
        pricePerUnit: 5000,
        startDate: '2024-09-01',
        endDate: '2025-03-01',
    },
    {
        contractID: '2',
        title: 'CONTRACT',
        cropType: 'Rice',
        quantity: 200,
        pricePerUnit: 7000,
        startDate: '2024-08-01',
        endDate: '2025-02-01',
    },
    {
        contractID: '3',
        title: 'CONTRACT',
        cropType: 'Maize',
        quantity: 150,
        pricePerUnit: 6000,
        startDate: '2024-10-01',
        endDate: '2025-04-01',
    },
    // Add more sample contracts as needed
];

const ContractCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const openContractView = (contractID) => {
        // Implement view opening logic
    };

    return (
        <div style={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
            <Slider {...settings}>
                {sampleContracts.map((contract) => (
                    <div
                        key={contract.contractID}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0 10px', // Adds spacing around each card
                        }}
                    >
                        <div
                            style={{
                                width: '350px', // Fixed width for the card container
                                height: '350px', // Fixed height for the card container
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Card
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                                onClick={() => openContractView(contract.contractID)}
                            >
                                <CardContent>
                                    <div style={{ fontSize: '100px', marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M8 8.2h16v1.6H8zm0 8h8.086v1.6H8zm15.378-4H8v1.6h13.779zM12.794 29.072a2.47 2.47 0 0 0 2.194.824h7.804a.7.7 0 0 0 0-1.4h-7.804c-.911-.016-.749-.807-.621-1.052a4 4 0 0 0 .387-.915a1.18 1.18 0 0 0-.616-1.322a1.9 1.9 0 0 0-2.24.517c-.344.355-.822.898-1.28 1.426c.283-1.109.65-2.532 1.01-3.92a1.315 1.315 0 0 0-.755-1.626a1.425 1.425 0 0 0-1.775.793c-.432.831-3.852 6.562-3.886 6.62a.7.7 0 1 0 1.202.718c.128-.215 2.858-4.788 3.719-6.315c-.648 2.5-1.362 5.282-1.404 5.532a.87.87 0 0 0 .407.969a.92.92 0 0 0 1.106-.224c.126-.114.362-.385.957-1.076a62 62 0 0 1 1.703-1.921c.218-.23.35-.128.222.098a2.29 2.29 0 0 0-.33 2.274"/><path fill="currentColor" d="M28 21.695V32H4V4h24v4.993l1.33-1.33a4.3 4.3 0 0 1 .67-.54V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V21.427a2.9 2.9 0 0 1-2 .268"/><path fill="currentColor" d="m34.128 11.861l-.523-.523a1.9 1.9 0 0 0-.11-2.423a1.956 1.956 0 0 0-2.75.162L18.22 21.6l-.837 3.142a.234.234 0 0 0 .296.294l3.131-.847l11.692-11.692l.494.495a.37.37 0 0 1 0 .525l-4.917 4.917a.8.8 0 0 0 1.132 1.131l4.917-4.917a1.97 1.97 0 0 0 0-2.788"/></svg>
                                    </div>
                                    <Typography variant="h6" gutterBottom>
                                        {contract.title}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Crop Type: {contract.cropType}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Quantity: {contract.quantity} tons
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Price Per Unit: ₹{contract.pricePerUnit}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary">
                                        {contract.startDate} to {contract.endDate}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ContractCarousel;
