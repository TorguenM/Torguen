import React from "react"
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-171064kz3eyt.frontegg.com',
  clientId: '9540cb14-45dc-47fa-9628-e8921c800d22'
};

const authOptions = {
 keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>
  </React.StrictMode>, 
    
);

