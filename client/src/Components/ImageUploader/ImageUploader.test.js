import React from 'react';
import ReactDOM from 'react-dom';
import ImageUploader from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageUploader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
