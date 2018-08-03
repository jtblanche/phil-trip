import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm';
import RegisterForm from '../../Components/RegisterForm';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        accessCode: "",
        password: "",
        password2: "",
        error: false
    }
    onChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        if (this.state.error) {
            this.setState({error: false});
        }
    }
    login = (event) => {
        event.preventDefault();
        axios.post('/api/login', { username: this.state.username, password: this.state.password })
        .then(
            response => this.props.login(response.data), 
            () => this.setState({error: true})
        );
    }
    register = (event) => {
        event.preventDefault();
        var error = false;
        var errorObj = {};

        const checkRequired = (name, displayName, outputName) => {
            if (!outputName) {
                outputName = name;
            }
            if (!this.state[name]) {
                errorObj[outputName] = `${displayName} is required.`;
                return true;
            }
            return false;
        }
        error = checkRequired('firstName', 'First Name') || error;
        error = checkRequired('lastName', 'Last Name') || error;
        error = checkRequired('email', 'Email') || error;
        error = checkRequired('accessCode', 'Access Code') || error;
        error = checkRequired('username', 'Username') || error;
        error = checkRequired('password', 'Password') || checkRequired('password2', 'Re-Enter Password', 'password') || error;
        if (error) {
            console.log(errorObj);
            return this.setState({error: errorObj});
        }
        axios.post('/api/register', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            accessCode: this.state.accessCode,
            username: this.state.username,
            password: this.state.password })
        .then(
            ({data}) => {
                return this.props.login(data);
            }, 
            ({response={data:''}}) => {
                return this.setState(response.data);
            }
        );
    }
    render = () => {
        const { isAuthenticated, ...rest } = this.props;
        return (
            <Route
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <Redirect
                            to={{
                                pathname: "/Home",
                                state: { from: props.location }
                            }}
                        />
                    ) : (
                        <div>
                        <Route exact path="/Login" render={() => (
                            <LoginForm 
                                login={this.login}
                                onChange={this.onChange}
                                username={this.state.username}
                                password={this.state.password}
                                error={this.state.error}
                            />
                        )} />
                        <Route exact path="/Login/Register" render={() => (
                            <RegisterForm 
                                register={this.register}
                                onChange={this.onChange}
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                email={this.state.email}
                                username={this.state.username}
                                password={this.state.password}
                                password2={this.state.password2}
                                error={this.state.error}
                            />
                        )} />
                        </div>
                    )
                }
            />
                
        );
    }
};