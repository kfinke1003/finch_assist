import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3238a8',
      soft: '#5e62ab',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3f51b5',
      soft: '#b2cfff',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafc',
      paper: '#ffffff',
      footer: '#282728',
    },
    text: {
      primary: '#212121',
      secondary: '#555555',
      footer: '#adadad'
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      margin: '30px 0 5px 0',
    },
    h3: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.95rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f9fafc',
          color: '#212121',
          scrollbarColor: '#c1c1c1 #f0f0f0',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#f0f0f0',
            width: '12px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#c1c1c1',
            border: '3px solid #f0f0f0',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#a0a0a0',
          },
          '&::-webkit-scrollbar-corner': {
            backgroundColor: '#f0f0f0',
          },
        },
        a: {
          color: '#3238a8',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        },
        code: {
          fontFamily: 'Source Code Pro, monospace',
          backgroundColor: '#f4f4f4',
          padding: '2px 4px',
          borderRadius: '4px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e0e0e0',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#f5f7fa',
        },
      },
    },
  },
});

export default theme;
