import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A77E',
    },
    secondary: {
      main: green[300],
    }
  },
});

export default theme;
