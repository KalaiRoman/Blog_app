import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Layout from './router/Layout';

// bootstrap link in css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



import '@popperjs/core'; // Edit here
import 'bootstrap/dist/js/bootstrap.bundle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
);


reportWebVitals();
