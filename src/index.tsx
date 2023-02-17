import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/variables.css';
import './styles/style.css';
import RouterConfig from './navigation/RouterConfig';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterConfig />
    </React.StrictMode>,
);
