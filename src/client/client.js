import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

ReactDOM.hydrate(
        <div>{renderRoutes(Routes)}</div>,
    document.querySelector('#root')
);