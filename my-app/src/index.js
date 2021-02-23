import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app'
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

console.log("before request");
axios.defaults.baseURL = 'http://localhost:3001/api';

// axios.get("http://localhost:3000/api/categories")
// .then(({data}) => {
//   console.log(data);
// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

