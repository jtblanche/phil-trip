import React, { Fragment, Component } from 'react';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../Components/Nav';
import Main from '../../Components/Main';
import Protected from '../Protected';
import Login from '../Login';
import Home from '../Home';
import Food from '../Food';
import Activities from '../Activities';
import Transportation from '../Transportation';
import Settings from '../Settings';
import ExtraGear from '../ExtraGear';
import NotFound from '../NotFound';
import './App.css';

export default class App extends Component {
    state = {
        drawerOpen: false,
        isAuthenticated: false
    };

    componentDidMount = () => {
        const isAuthenticated = localStorage.getItem('isAuthenticated') || false;
        this.setState({ isAuthenticated });
    }

    login = (isAuthenticated) => {
        localStorage.setItem('isAuthenticated', isAuthenticated);
        this.setState({ isAuthenticated });
    }

    logout = () => {
        localStorage.removeItem('isAuthenticated');
        this.setState({ isAuthenticated: false });
    }

    handleDrawerClose = () => {
        this.setState({ drawerOpen: false });
    };

    handleDrawerOpen = () => {
        this.setState({ drawerOpen: true });
    };
    render = () => (
        <Fragment>
            <HttpsRedirect>
                <Router>
                    <div className="bgu-app">
                        <Navbar open={this.state.drawerOpen} handleDrawerOpen={this.handleDrawerOpen} isAuthenticated={this.state.isAuthenticated} />
                        <Main open={this.state.drawerOpen} handleDrawerClose={this.handleDrawerClose} isAuthenticated={this.state.isAuthenticated}>
                            <Switch>
                                <Login path="/Login" login={this.login} isAuthenticated={this.state.isAuthenticated} />
                                <Protected exact path="/" isAuthenticated={this.state.isAuthenticated} component={Home} />
                                <Protected exact path="/Home" isAuthenticated={this.state.isAuthenticated} component={Home} />
                                <Protected exact path="/Food" isAuthenticated={this.state.isAuthenticated} component={Food} />
                                <Protected exact path="/Activities" isAuthenticated={this.state.isAuthenticated} component={Activities} />
                                <Protected exact path="/Transportation" isAuthenticated={this.state.isAuthenticated} component={Transportation} />
                                <Protected exact path="/ExtraGear" isAuthenticated={this.state.isAuthenticated} component={ExtraGear} />
                                <Protected exact path="/Settings" isAuthenticated={this.state.isAuthenticated} logout={this.logout} component={Settings} />
                                <Route render={() => (
                                    <NotFound />
                                )} />
                            </Switch>
                        </Main>
                    </div>
                </Router>
            </HttpsRedirect>
        </Fragment>
    );
}
