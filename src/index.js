import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RMWCProvider } from 'rmwc/Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <RMWCProvider>
        <App />
    </RMWCProvider>,
    document.getElementById('root')
);
registerServiceWorker();
