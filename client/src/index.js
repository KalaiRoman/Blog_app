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

// redux

import { Provider } from 'react-redux';
import store from './redux/store/Store';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './contextApi/Context';

// emjie css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>

    <Provider store={store}>
      <Toaster
        position='top-center'
        reverseOrder={false}

      ></Toaster>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </AppProvider>

);


reportWebVitals();
