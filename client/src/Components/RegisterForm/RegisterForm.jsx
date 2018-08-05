import React from 'react';
import './RegisterForm.css';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
export default (props) => (
    <form onSubmit={props.register}>
        <Typography variant="headline" component="h3">
            Please Register
        </Typography>
        <div>
            <TextField
                name="firstName"
                label="First Name *"
                error={props.error && !!props.error.firstName}
                helperText={(props.error && props.error.firstName) || ' '}
                value={props.firstName}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="lastName"
                label="Last Name *"
                error={props.error && !!props.error.lastName}
                helperText={(props.error && props.error.lastName) || ' '}
                value={props.lastName}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="email"
                label="Email *"
                error={props.error && !!props.error.email}
                helperText={(props.error && props.error.email) || ' '}
                value={props.email}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="username"
                label="Username *"
                error={props.error && !!props.error.username}
                helperText={(props.error && props.error.username) || ' '}
                value={props.username}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="accessCode"
                label="Access Code *"
                error={props.error && !!props.error.accessCode}
                helperText={(props.error && props.error.accessCode) || ' '}
                value={props.accessCode}
                onChange={props.onChange}
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="password"
                label="Password *"
                error={props.error && !!props.error.password}
                value={props.password}
                helperText=" "
                onChange={props.onChange}
                type="password"
                margin="normal"
            />
        </div>
        <div>
            <TextField
                name="password2"
                label="Re-Enter Password *"
                error={props.error && !!props.error.password}
                helperText={(props.error && props.error.password) || ' '}
                value={props.password2}
                onChange={props.onChange}
                type="password"
                margin="normal"
            />
        </div>
        <Button color="inherit" type="submit" onClick={props.register}>Register</Button>
        <Link to="/Login">
            <Button color="inherit">Sign In</Button>
        </Link>
    </form>
);