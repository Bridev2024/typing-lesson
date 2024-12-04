// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes'; // Ensure this path is correct
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
