import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export default ({ component: Component, isAuthenticated, logout: thisIsMyLogout, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? (
                <Component {...props} logout={thisIsMyLogout} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);