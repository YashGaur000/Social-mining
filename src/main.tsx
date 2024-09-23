import App from './App.tsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react';
import Web3Provider from './Web3Provider/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>

    <App />
    </Web3Provider>
  </React.StrictMode>
);
