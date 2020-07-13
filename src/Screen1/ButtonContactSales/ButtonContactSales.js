import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import style from "./ButtonContactSales.css";

export default function ButtonContactSales() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleClickOpen} >Contact sales</button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contact our sales service</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Your Name"
                        type="string"
                        fullWidth
                    />
                    <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        label="Your Phone"
                        type="tel"
                        fullWidth
                    />
                    <TextField
                        label="SendData"
                        type="datetime"
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} color="primary">
                        Cancel
                    </button>
                    <button onClick={handleClose} color="primary">
                        Subscribe
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    );
}