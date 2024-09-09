import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField, Card, CardContent } from '@mui/material';

const styles = {
    updateContainer: {
        marginTop: '20px',
        display: 'flex',
        overflowX: 'scroll',
    },
    card: {
        width: '300px',
        height:'400px',
        marginRight: '20px',
    },
    image: {
        width: '100%',
        height: 'auto',
    },
};

const UpdatesSection = () => {
    const [open, setOpen] = useState(false);
    const [updates, setUpdates] = useState([]);
    const [newUpdate, setNewUpdate] = useState({ text: '', image: '' });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdateSubmit = () => {
        setUpdates([...updates, newUpdate]);
        setNewUpdate({ text: '', image: '' });
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Provide Update
            </Button>

            {/* Dialog for providing updates */}
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TextField
                        label="Update Text"
                        fullWidth
                        value={newUpdate.text}
                        onChange={(e) => setNewUpdate({ ...newUpdate, text: e.target.value })}
                        style={{ marginBottom: '20px' }}
                    />
                    <input
                        type="file"
                        onChange={(e) =>
                            setNewUpdate({ ...newUpdate, image: URL.createObjectURL(e.target.files[0]) })
                        }
                    />
                    <Button variant="contained" color="primary" onClick={handleUpdateSubmit}>Submit</Button>
                </DialogContent>
            </Dialog>

            {/* Carousel to show updates */}
            <div style={styles.updateContainer}>
                {updates.map((update, index) => (
                    <Card key={index} style={styles.card}>
                        <CardContent>
                            <p>{update.text}</p>
                            {update.image && <img src={update.image} alt="Update" style={styles.image} />}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};



export default UpdatesSection;
