import React, { useState } from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatboxOutlineIcon from '@mui/icons-material/Chat';
import SettingsOutlineIcon from '@mui/icons-material/Settings';
import HelpCircleOutlineIcon from '@mui/icons-material/Help';
import LogoutOutlineIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 0,
        height: 'auto',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 0',
        zIndex: 1000, // Ensures it stays on top of other content
      }}
    >
    <Box
      className={`navigation ${active ? 'active' : ''}`}
      sx={{
        width: active ? '400px' : '80px',
        backgroundColor: '#fff',
        transition: '0.5s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center align content horizontally
        justifyContent: 'center', // Center align content vertically
        overflow: 'hidden',
        borderRadius: '10px',
        boxShadow: '-20px 20px 50px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        className="menu_toggle"
        onClick={toggleSidebar}
        sx={{
          position: 'relative',
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center align toggle button
          cursor: 'pointer',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box
          sx={{
            width: '35px',
            height: '2px',
            backgroundColor: '#333',
            position: 'absolute',
            transform: active
              ? 'translateY(-50%) rotate(45deg)'
              : 'translateY(-10px)',
            transition: '0.5s',
            top: '50%', // Center vertically
          }}
        />
        <Box
          sx={{
            width: '35px',
            height: '2px',
            backgroundColor: '#333',
            position: 'absolute',
            transform: active
              ? 'translateY(-50%) rotate(-45deg)'
              : 'translateY(10px)',
            boxShadow: active ? 'none' : '0 -10px #333',
            transition: '0.5s',
            top: '50%', // Center vertically
          }}
        />
      </Box>

      <Box
        className="profile"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center align profile
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        <Box
          className="imgBx"
          sx={{
            width: active ? '200px' : '60px',
            height: active ? '200px' : '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: '50%',
            transition: '0.5s',
          }}
        >
          <img
            src="https://wallpapers.com/images/featured-full/3d-33q6a18khxgta4ll.jpg"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      <List
        className="menu"
        sx={{
          width: '100%',
          padding: active ? '10px 20px' : '10px',
          transition: '0.5s',
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <ListItem button sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
            <PersonOutlineIcon />
          </ListItemIcon>
          {active && <ListItemText primary="Profile" sx={{ textAlign: 'center' }} />}
        </ListItem>

        <ListItem button sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
            <ChatboxOutlineIcon />
          </ListItemIcon>
          {active && <ListItemText primary="Inbox" sx={{ textAlign: 'center' }} />}
        </ListItem>

        <ListItem button sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
            <SettingsOutlineIcon />
          </ListItemIcon>
          {active && <ListItemText primary="Settings" sx={{ textAlign: 'center' }} />}
        </ListItem>

        <ListItem button sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
            <HelpCircleOutlineIcon />
          </ListItemIcon>
          {active && <ListItemText primary="Support" sx={{ textAlign: 'center' }} />}
        </ListItem>

        <ListItem button sx={{ justifyContent: 'center' }}>
          <ListItemIcon sx={{ justifyContent: 'center', minWidth: 'auto' }}>
            <LogoutOutlineIcon />
          </ListItemIcon>
          {active && <ListItemText primary="Logout" sx={{ textAlign: 'center' }} />}
        </ListItem>
      </List>
    </Box>
    </Box>
  );
};

export default Sidebar;
