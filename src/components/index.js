import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct based on your project structure
import './index.css'; // Import the CSS file for Tailwind styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
