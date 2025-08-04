import { useTheme } from '@emotion/react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {

  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', py: '5px', px: '20px' }}>
      <CodeIcon sx={{ mr: 1, fontSize: '1.5rem' }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mr: 2,
          fontSize: '1.4rem',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        UTWI Information Technology
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { xs: 'flex', md: 'none' },
          mr: 2,
          fontSize: '1.4rem',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        UTWI IT
      </Typography>
    </Box>)
}