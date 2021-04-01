import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import App from './components/app'
import Footer from './components/Footer'

import './index.css';

console.log("before request");
axios.defaults.baseURL = 'http://localhost:3001/api';

//Добавил роутер на топ уровнь приложения.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

