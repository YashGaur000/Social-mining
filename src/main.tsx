import App from './App.tsx';
import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Web3Provider from './Web3Provider/index.tsx';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3Provider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Web3Provider>
  </React.StrictMode>
);
