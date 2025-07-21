import * as React from 'react';
import { Link } from 'react-router-dom'
import { useTheme } from '@emotion/react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


export default function TopNav(props) {
  
  const { pages } = props

  const theme = useTheme()
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // NOTE: this section handles rendering for xs and sm screens
  const renderXS = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => setAnchorElNav(e.currentTarget)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page.id} onClick={handleCloseNavMenu}>
              <Button
                key={page.id}
                component={Link}
                to={`/${page.path}`}
                sx={theme.util.topNavSubMenuItems}
              >
                {page.title}
              </Button>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )
  }

  // NOTE: this section handles rendering for screens larger than sm
  const renderNormal = () => {
    
    return (
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.id}
            component={Link}
            to={`/${page.path}`}
            sx={theme.util.topNavItems}
          >
            {page.title}
          </Button>
        ))}
      </Box>
    )
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {renderXS()}

          {renderNormal()}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

