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
    card_h: {
      fontSize: '1.6rem',
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
      pl: '5px'
    },
    card_b : {
      mx: '5%',
      my: '5%',
      fontSize: '1.2rem'
    },
    body1: {
      fontSize: '1.1rem',
    },
    body2: {
      fontSize: '0.95rem',
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
  containers: {
    pageContainer: {
      display: 'flex', 
      justifyContent: 'center', 
      flexDirection: 'column',
      mx: 'auto',
      // border: '3px solid red'
    },
    responsiveSubContainer: {
      // border: '3px solid blue',
      px: {xs: '3%', md: '5%', lg: '10%', xl: '15%'}
    },
    responsiveAccentSubContainer: {
      // border: '3px solid blue',
      px: {xs: '3%', md: '5%', lg: '10%', xl: '15%'},
      py: '20px',
      backgroundImage: 'url(images/bg_1920x1080_swirls_white.png)',
    },
    gridContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  util: {
    divider: {
      my: '30px',
      mx: {xs: '3%', md: '5%', lg: '10%', xl: '15%'}
    },
    topNavItems: {
      color: 'white', 
      display: 'block', 
      fontSize: '1.1rem',
      my: '0px'
    },
    topNavSubMenuItems: {
      my: 0, 
      color: 'black', 
      display: 'block', 
      fontSize: '1.1rem'
    },
    markdownImage: {
      display: 'block',
      margin: 'auto',
      maxWidth: '100%',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    },
    carouselCard: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      width: {xs: '350px', sm: '400px', lg: '550px'},
      height: '400px',
      left: 0,
      right: 0,
      margin: 'auto',
      backgroundColor: 'white',
      border: '2px solid black',
      transition: 'all 0.6s ease-in-out',
      borderRadius: '10px',
      boxShadow: '0 20px 10px rgba(0, 0, 0, 0.4)'
    },
    cardIcon: {
      fontSize: '2.5rem',
      color: 'white'
    }
  }
});

export default theme;
