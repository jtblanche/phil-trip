import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Settings.css';
export default (props) => (
    <div>
        <Typography variant="headline" component="h3">Control is an illusion.</Typography>
        <Button onClick={props.logout}>Logout</Button>
    </div>
);