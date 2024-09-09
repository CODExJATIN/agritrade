import React from 'react';
import { LinearProgress, Typography } from '@mui/material';

const styles = {
    container: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
    },
    installment: {
        marginBottom: '10px',
    },
    progress: {
        height: '10px',
    },
};

const InstallmentProgress = ({ installments }) => {
    return (
        <div style={styles.container}>
            <Typography variant="h6" style={styles.title}>
                Payment Installments
            </Typography>
            {installments.map((installment, index) => (
                <div key={index} style={styles.installment}>
                    <Typography variant="body2">
                        Installment {index + 1} - {installment.date} - {installment.status}
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={installment.paid ? 100 : 0}
                        style={styles.progress}
                    />
                </div>
            ))}
        </div>
    );
};

export default InstallmentProgress;
