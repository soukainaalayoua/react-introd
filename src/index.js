import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App';  // Import the App component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(  // Use root.render() instead of ReactDOM.render()
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
