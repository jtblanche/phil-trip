import React from 'react';
import './LoginForm.css';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
export default (props) => (
    <form onSubmit={props.login}>
        <Typography variant="headline" component="h3">
            Please Sign In
        </Typography>
        <div>
            <TextField
                name="username"
                label="Username"
                error={props.error}
                value={props.username}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="password"
                label="Password"
                error={props.error}
                helperText={props.error ? "Incorrect username or password." : ""}
                value={props.password}
                onChange={props.onChange}
                type="password"
                margin="normal"
            />
        </div>
        <Button color="inherit" type="submit" onClick={props.login}>Sign In</Button>
        <Link to="/Login/Register">
            <Button color="inherit">Sign Up</Button>
        </Link>
    </form>
);