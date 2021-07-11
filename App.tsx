import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppManager from './src';
import theme from './src/Elements/Themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppManager />
    </ThemeProvider>
  );
};

export default App;
