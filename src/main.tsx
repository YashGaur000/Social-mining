import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Web3Provider from './Web3Provider/index.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <Provider store={store}>
        <App />
      </Provider>
    </Web3Provider>
  </React.StrictMode>
);
