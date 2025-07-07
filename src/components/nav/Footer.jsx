import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@emotion/react';

export default function Footer() {
  
  const theme = useTheme()
  
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '20px', 
      backgroundColor: theme.palette.background.footer,
      mt: '30px', 
      borderTop: '5px solid', 
      borderColor: theme.palette.secondary.main, 
      height: '60px',
      position: 'fixed',
      left: '0',
      bottom: '0',
      right: '0' }}>
      <CodeIcon sx={{ mr: 1, color: theme.palette.text.footer }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
          color: theme.palette.text.footer
        }}
      >
        UTWI Information Technology
      </Typography>
    </Box>)
}