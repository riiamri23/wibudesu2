import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {ThemeProvider} from './context/ThemeContext';
// import Background from './components/Background';
import Navbar from './components/navbar/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

      <ThemeProvider>
          <Navbar />
          <App />
      </ThemeProvider>
  // </React.StrictMode>
);
