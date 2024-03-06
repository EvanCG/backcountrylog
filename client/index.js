import ReactDOM from 'react-dom';
import React from 'react';
import './styles/styles.css';
import TestFetch from './components/TestFetch';

const App = () => {
  return  (
    <div>
    <h1>I promise this is an actual real and it updates when I save</h1>
    <TestFetch />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
