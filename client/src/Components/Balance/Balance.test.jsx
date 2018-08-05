import React from 'react';
import ReactDOM from 'react-dom';
import Balance from './';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Balance />, div);
    ReactDOM.unmountComponentAtNode(div);
});