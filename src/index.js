import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductProvider } from './context/ProductContext'
import { FilterProvider } from './context/FilterContext';
import { AddCartProvider } from './context/AddCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <FilterProvider >
      <AddCartProvider>
        <App />
      </AddCartProvider>
    </FilterProvider>
  </ProductProvider>
);

reportWebVitals();
