// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3238a8',
      soft: '#5e62ab'
    },
    secondary: {
      main: '#3f51b5',
      soft: '#b2cfff'
    },
    // background: {
    //   default: '#121212',
    //   paper: '#1e1e1e',
    // },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      margin: "30px 0px 5px 0px"
    },
    // customize other typography if needed
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       scrollbarColor: "#6b6b6b #2b2b2b",
    //       "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
    //         backgroundColor: "#2b2b2b",
    //       },
    //       "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
    //         borderRadius: 8,
    //         backgroundColor: "#6b6b6b",
    //         minHeight: 24,
    //         border: "3px solid #2b2b2b",
    //       },
    //       "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
    //         backgroundColor: "#959595",
    //       },
    //       "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
    //         backgroundColor: "#959595",
    //       },
    //       "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
    //         backgroundColor: "#959595",
    //       },
    //       "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
    //         backgroundColor: "#2b2b2b",
    //       },
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // Add more component overrides here
  },
});

export default theme;
