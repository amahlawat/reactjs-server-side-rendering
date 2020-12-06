import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Routes from './Routes';

ReactDOM.hydrate(
<HomePage />,
    document.querySelector('#root')
);