import { render } from 'react-dom';
import React from 'react';
import App from './App';

render(
  <div id="maincontainer">
    <h1>Backcountry Log</h1>
    <App />
  </div>,
  document.getElementById('app')
);