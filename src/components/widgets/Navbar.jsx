import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Replace this with your SVG icon as a React component
const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32" ><path fill="currentColor" d="m24.251 21.37l2.194 1.462A1 1 0 0 0 27.8 22.6l3-4l-1.6-1.2l-2.433 3.244l-2.212-1.476a1 1 0 0 0-1.369.25L20 23.879V16h-2v10a2 2 0 0 0 2 2h10v-2h-9.057zM2 21h14v2H2zm0 5h14v2H2zm9-10v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1z"/></svg>
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon />
          <Typography variant="h6" noWrap component="div" sx={{ marginLeft: '10px', display: isMobile ? 'none' : 'block' }}>
            AgriTrade
          </Typography>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" aria-label="show new notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};

export default Navbar;
