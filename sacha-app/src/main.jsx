import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/globals.css';
import './i18n'; // <-- IMPORTACIÓN OBLIGATORIA PARA ACTIVAR EL SISTEMA I18N

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);