import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/ProductContext'
import { FilterProvider } from './context/FilterContext';
import { AddCartProvider } from './context/AddCartContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <ProductProvider>
    <FilterProvider >
      <AddCartProvider>
        <App />
      </AddCartProvider>
    </FilterProvider>
  </ProductProvider>
  </Auth0Provider>

);

reportWebVitals();
