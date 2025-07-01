// theme.js
import { createTheme } from '@mui/material/styles';

const commonTypography = {
  fontFamily: '"Nunito", sans-serif',
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff', // body color
    },
    primary: {
      main: '#fffadc', // header color
    },
    secondary: {
      main: '#fffbe6', // sidebar color
    },
    text: {
      primary: '#000', // text color
    },
    custom: {
      icon: '#0000ff',
      bg:'#e6e6ff'
    },
  },
  typography: commonTypography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#000', // light mode border color
            },
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#333333', // body color
    },
    primary: {
      main: '#1a1a1a', // header color
    },
    secondary: {
      main: '#333333', // sidebar color
    },
    text: {
      primary: '#fff', // text color
    },
    custom: {
      icon: '#948979',
      bg:'#f2f2f2'
    },
  },
  typography: commonTypography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc', // dark mode border color
            },
            '&:hover fieldset': {
              borderColor: '#ccc',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ccc',
            },
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
