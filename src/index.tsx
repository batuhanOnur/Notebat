import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { registerSlice } from './features/api/registerSlice'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApiProvider api={registerSlice}>
        <App />
      </ApiProvider>
    </React.StrictMode>
  </BrowserRouter>
);