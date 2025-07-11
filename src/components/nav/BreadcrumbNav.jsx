import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Typography, Link } from '@mui/material';
import Box from '@mui/material/Box';

function toTitleCase(str) {
  if (str === 'vpn') return 'VPN'
  else return str.replace(/\b\w+/g, (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
}

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  console.log(location);
  

  return location.pathname === '/' ? 
  <Box sx={{mt: '5%', ml: '20px' }}></Box>
  :
  (
    <Breadcrumbs aria-label="Breadcrumb" sx={{ my: '30px', ml: '20px' }}>
      <Link color="inherit" component={RouterLink} to="/">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return last ? (
          <Typography color="textPrimary" key={to}>
            {toTitleCase(value)}
          </Typography>
        ) : (
          <Link color="inherit" component={RouterLink} to={to} key={to}>
            {toTitleCase(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
