import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App_useReducer';
import App3 from './App_customHook';
import App4 from './App_contextAPI';
import App5 from './App_immer';
import reportWebVitals from './reportWebVitals';
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Counter />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
