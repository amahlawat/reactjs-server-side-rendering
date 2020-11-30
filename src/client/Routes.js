import React from 'react';

import HomePage from './pages/Home';
import UsersListPage from './pages/UsersList';
import App from './App';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true
            },
            {
                ...UsersListPage,
                path: "/users"
            }        
        ]
    }
]