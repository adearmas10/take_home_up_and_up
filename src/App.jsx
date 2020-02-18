import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import {
  FullHeightGrid,
} from './components/styled_components';
import ROIComponent from './components/ROIComponent';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00CFCC',
    },
  },
});

const App = () => (
  <FullHeightGrid container alignItems="center" justify="center">
    <ThemeProvider theme={theme}>
      <ROIComponent />
    </ThemeProvider>
  </FullHeightGrid>
);


export default App;
