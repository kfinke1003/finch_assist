import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <CodeIcon sx={{ mr: 1 }} />
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
        }}
      >
        UTWI Information Technology
      </Typography>
    </Box>)
}