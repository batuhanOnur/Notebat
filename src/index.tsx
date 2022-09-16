import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistor,store } from './app/store'
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
                <App />
            </NotificationsProvider>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);