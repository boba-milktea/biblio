import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App.tsx';

// const store = configureStore({});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
