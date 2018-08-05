import React from 'react';
import { Route, Redirect } from 'react-router-dom';
export default ({ component: Component, isAuthenticated, logout: thisIsMyLogout, ...rest }) => {
    console.log('rest', rest);
    return <Route
        {...rest}
        render={props => {
            console.log('props', props);
            return isAuthenticated ? (
                <Component {...rest} {...props}logout={thisIsMyLogout} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/Login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        }
    />
    };