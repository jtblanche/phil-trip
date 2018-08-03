import React from 'react';
import './PaymentMethodEdit.css';
import TextField from '@material-ui/core/TextField';
export default (props) => (
    <div>
        <TextField
            name="paymentType"
            label="Payment Method"
            placeholder="e.g. PayPal"
            value={props.pamentType}
            onChange={props.onChange}
            margin="normal"
        />

        <TextField
            name="username"
            label="Username"
            value={props.username}
            onChange={props.onChange}
            margin="normal"
        />
    </div>
);