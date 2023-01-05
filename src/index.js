import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import BookList from './components/BookList.js';
// import Categories from './components/Categories.js';
// import Navbar from './components/Navbar.js';
import reportWebVitals from './reportWebVitals';
// import store from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
