import React, { useState } from 'react';
import { Button, Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, DialogActions, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ContractView({ contract, userID, userType }) {
    const [openBidDialog, setOpenBidDialog] = useState(false);
    const [bidAmount, setBidAmount] = useState('');
    const [openBidsView, setOpenBidsView] = useState(false);
    const [bidComments, setBidComments] = useState('');
    const [bids, setBids] = useState(contract.bids || []);
    const [openOfferDialog, setOpenOfferDialog] = useState(false);
    const [selectedBidIndex, setSelectedBidIndex] = useState(null);
    const [counterAmount, setCounterAmount] = useState(0);

    const handleBidDialogOpen = () => setOpenBidDialog(true);
    const handleBidDialogClose = () => {
        setBidAmount('');
        setBidComments('');
        setOpenBidDialog(false);
    };

    const submitBid = () => {
        const newBid = {
            farmerName: userID,  // Replace with actual farmer's name or ID
            bidAmount,
            date: new Date().toISOString().split('T')[0],
            comments: bidComments,
            contractorOffer: ''
        };
        setBids([...bids, newBid]);
        handleBidDialogClose();
    };

    const handleViewBidsOpen = () => setOpenBidsView(true); 
    const handleViewBidsClose = () => setOpenBidsView(false);

    const handleOfferDialogOpen = (index) => {
        setSelectedBidIndex(index);
        setOpenOfferDialog(true);
    };

    const handleOfferDialogClose = () => {
        setCounterAmount(0);
        setOpenOfferDialog(false);
    };

    const submitOffer = () => {
        const updatedBids = [...bids];
        updatedBids[selectedBidIndex].contractorOffer = counterAmount;
        setBids(updatedBids);
        handleOfferDialogClose();
    };

    const acceptDeal = (index) => {
        const updatedBids = [...bids];
        updatedBids[index].accepted = true;
        setBids(updatedBids);
    };

    const incrementBid = () => setBidAmount((prev) => prev + 1);
    const decrementBid = () => setBidAmount((prev) => (prev > 0 ? prev - 1 : 0));


    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
            <Typography variant="h4" gutterBottom>
                Contract Details
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Contract ID:</Typography>
                    <Typography variant="body1">{contract.contractId}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Contract Status:</Typography>
                    <Typography variant="body1">{contract.contractStatus}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Assigned To:</Typography>
                    <Typography variant="body1">{contract.assignedTo || 'Not Assigned'}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Posted By:</Typography>
                    <Typography variant="body1">{contract.postedBy}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Contractor Name:</Typography>
                    <Typography variant="body1">{contract.contractorName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Contractor Address:</Typography>
                    <Typography variant="body1">{contract.contractorAddress}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Crop Type:</Typography>
                    <Typography variant="body1">{contract.cropType}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Quantity:</Typography>
                    <Typography variant="body1">{contract.quantity} tons</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Price Per Unit:</Typography>
                    <Typography variant="body1">₹{contract.pricePerUnit}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Start Date:</Typography>
                    <Typography variant="body1">{contract.startDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">End Date:</Typography>
                    <Typography variant="body1">{contract.endDate}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Transportation Cost:</Typography>
                    <Typography variant="body1">{contract.transportationCost}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Advance Payment:</Typography>
                    <Typography variant="body1">₹{contract.advancePayment}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Payment Preferences:</Typography>
                    <Typography variant="body1">{contract.paymentPreferences}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Remaining Amount:</Typography>
                    <Typography variant="body1">₹{contract.remainingAmount}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1">Installment Amount:</Typography>
                    <Typography variant="body1">₹{contract.installmentAmount !== null && contract.installmentAmount  !== undefined ? contract.installmentAmount.toFixed(2) : 'N/A'}</Typography>
                </Grid>
            </Grid>

            <div style={{ marginTop: '20px', display: 'flex', gap:'10px' }}>
                {userType === 'farmer' && !contract.assignedTo && (
                    <Button variant="contained" color="primary" onClick={handleBidDialogOpen}>
                        Negotiate
                    </Button>
                )}
                <Button variant="outlined" color="secondary" onClick={handleViewBidsOpen}>
                    View Bids
                </Button>
            </div>

            {/* Bid Dialog (For Farmers) */}
            <Dialog open={openBidDialog} onClose={handleBidDialogClose}>
            <DialogTitle>Place a Bid</DialogTitle>
            <DialogContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={3}>
                        <IconButton onClick={decrementBid}>
                            <RemoveIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Bid Amount"
                            fullWidth
                            variant="outlined"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(Number(e.target.value))}
                            margin="normal"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton onClick={incrementBid}>
                            <AddIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <TextField
                    label="Comments"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    value={bidComments}
                    onChange={(e) => setBidComments(e.target.value)}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={submitBid} color="primary" variant="contained">
                    Submit Bid
                </Button>
                <Button onClick={handleBidDialogClose} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>

            {/* Bids Table Dialog (View for Both Farmers and Contractors) */}
            <Dialog open={openBidsView} onClose={handleViewBidsClose} maxWidth="md" fullWidth>
                <DialogTitle>Negotiation Bids</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Farmer Name</TableCell>
                                    <TableCell>Bid Amount</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Comments</TableCell>
                                    <TableCell>Contractor's Offer</TableCell>
                                    {userType === 'contractor' && <TableCell>Actions</TableCell>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bids.length > 0 ? (
                                    bids.map((bid, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{bid.farmerName}</TableCell>
                                            <TableCell>₹{bid.bidAmount}</TableCell>
                                            <TableCell>{bid.date}</TableCell>
                                            <TableCell>{bid.comments}</TableCell>
                                            <TableCell>{bid.contractorOffer ? `₹${bid.contractorOffer}` : '—'}</TableCell>
                                            {userType === 'contractor' && (
                                                <TableCell>
                                                    {bid.accepted ? (
                                                        <Typography style={{ color: 'green' }}>Accepted</Typography>
                                                    ) : (
                                                        <>
                                                            <Button onClick={() => handleOfferDialogOpen(index)} variant="outlined" style={{ marginRight: '10px', marginBottom:'10px' }}>
                                                                Offer Your Amount
                                                            </Button>
                                                            <Button onClick={() => acceptDeal(index)} variant="contained" color="primary">
                                                                Accept Deal
                                                            </Button>
                                                        </>
                                                    )}
                                                </TableCell>
                                            )}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={userType === 'contractor' ? 6 : 5} align="center">
                                            No Bids Available
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleViewBidsClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Offer Popup (For Contractors) */}
            {userType === 'contractor' && (
                <Dialog open={openOfferDialog} onClose={handleOfferDialogClose}>
                    <DialogTitle>Offer Your Amount</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <IconButton onClick={() => setCounterAmount(prev => Math.max(0, prev - 1000))}>
                                    <RemoveIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    value={counterAmount}
                                    fullWidth
                                    onChange={(e) => setCounterAmount(Number(e.target.value))}
                                    margin="normal"
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                />
                            </Grid>
                            <Grid item>
                                <IconButton onClick={() => setCounterAmount(prev => prev + 1000)}>
                                    <AddIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={submitOffer} color="primary" variant="contained">
                            Submit Offer
                        </Button>
                        <Button onClick={handleOfferDialogClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Paper>
    );
}

export default ContractView;