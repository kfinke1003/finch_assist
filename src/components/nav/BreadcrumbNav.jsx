import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Typography, Link } from '@mui/material';

function toTitleCase(str) {
  if (str === 'vpn') return 'VPN'
  else return str.replace(/\b\w+/g, (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
}

export default function BreadcrumbNav() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="Breadcrumb" sx={{ margin: '12px' }}>
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
