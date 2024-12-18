import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/main.css'
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Если отключить, то повторный рендер отключится
  // <React.StrictMode> 
  <App />
  // </React.StrictMode>
);

