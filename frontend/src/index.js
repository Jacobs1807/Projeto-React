import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import registerServiceWorker from './RegisterServiceWorker.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

registerServiceWorker();
