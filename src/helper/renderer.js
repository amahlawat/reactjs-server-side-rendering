import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';

export default () => {
    const content = renderToString(
        <div className="app"><App /></div>
    );
    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
        </html>
    `;
}