import React, { Component } from 'react';
import protectedRequest from '../../Utility/protectedRequest.js';
import './Activities.css';
export default class Activities extends Component {
    componentDidMount = () => {
        protectedRequest({method: 'get', url: '/api/activities'});
    }
    render = () => (
        <div>Activities</div>
    )
}