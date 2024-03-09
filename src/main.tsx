//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-171064kz3eyt.frontegg.com',
  clientId: '9540cb14-45dc-47fa-9628-e8921c800d22'
};

const authOptions = {
  keepSessionAlive: true // Uncomment this in order to maintain the session alive
 };

 const root = ReactDOM.createRoot(document.getElementById('root')!);
 root.render(
     <FronteggProvider 
     contextOptions={contextOptions} 
     hostedLoginBox={true}
     authOptions={authOptions}>
         <App />
     </FronteggProvider>,
     //document.getElementById('root')  //there is no need to call twice a same argument.
 );