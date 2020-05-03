import React from 'react';
import './App.css';
import Demo from './demo';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import 'typeface-roboto';

function App() {
  return (

    <ThemeProvider theme={theme}>
        <CssBaseline />
          <Demo />
      </ThemeProvider>

  );
}

export default App;
