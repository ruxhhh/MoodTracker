import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import MoodProvider from './context/MoodContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoodProvider>
      <App />
    </MoodProvider>
  </React.StrictMode>,
);
