import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the library
library.add(faSearch);

const searchRoot = document.getElementById('data-vue-search');

const root = ReactDOM.createRoot(searchRoot as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
