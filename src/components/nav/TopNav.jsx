import * as React from 'react';
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
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // NOTE: this section handles rendering for xs screens
  const renderXS = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, border: '3px solid red' }}>
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
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )
  }

  // NOTE: this section handles rendering for screens larger than xs
  const renderNormal = () => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.id}
            href={page.path}
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.1rem' }}
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

          {/* {renderXS()} */}

          {renderNormal()}

        </Toolbar>
      </Container>
    </AppBar>
  );
}

