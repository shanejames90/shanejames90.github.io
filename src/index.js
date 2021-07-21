import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
import './styles/app.css';
import { ThemeProvider } from './context/themeContext';

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SnackbarProvider>,
  document.getElementById('root')
);
