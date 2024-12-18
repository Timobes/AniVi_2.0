import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/main.css'
import { HomePage } from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Если отключить, то повторный рендер отключится
  // <React.StrictMode> 
    <HomePage />
  // </React.StrictMode>
);

