import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // For completed milestones

const ContractProgress = ({ milestones }) => {
    // Calculate the progress percentage based on completed milestones
    const completedMilestones = milestones.filter(m => m.completed).length;
    const progress = (completedMilestones / milestones.length) * 100;

    // Inline styles
    const styles = {
        progressContainer: {
            margin: '16px 0',
        },
        progress: {
            height: '10px',
            borderRadius: '5px',
        },
        milestones: {
            display: 'flex',
            justifyContent: 'space-between',
            top: '-30px',
            width: '100%',
        },
        milestoneItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        milestoneIcon: {
            fontSize: '16px',
            color: '#1976d2', // Default icon color
        },
        completedIcon: {
            color: '#4caf50', // Green color for completed milestones
        },
    };

    return (
        <Box style={styles.progressContainer}>
            <LinearProgress
                variant="determinate"
                value={progress}
                style={styles.progress}
            />
            {/* Milestone Numbers/Dots */}
            <Box style={styles.milestones}>
                {milestones.map((milestone, index) => (
                    <Box key={index} style={styles.milestoneItem}>
                        {milestone.completed ? (
                            <CheckCircleIcon style={{ ...styles.milestoneIcon, ...styles.completedIcon }} />
                        ) : (
                            <Typography variant="body2" style={styles.milestoneIcon}>
                                {index + 1}
                            </Typography>
                        )}
                        <Typography variant="caption" style={{textAlign:'center'}}>{milestone.name}</Typography>
                    </Box>
                ))}
            </Box>

            {/* Progress Bar */}
            
        </Box>
    );
};

export default ContractProgress;

