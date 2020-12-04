import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.hydrate(
    <div>
        <App />
    </div>,
    document.querySelector('#root')
);