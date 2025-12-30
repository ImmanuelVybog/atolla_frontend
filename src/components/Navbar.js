import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Typography, 
  Menu, 
  MenuItem, 
  IconButton,
  Avatar,
  Divider,
  ListItemIcon,
  Drawer,
  useMediaQuery,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Images from '../assets/index.js';
import { useTheme } from '../context/ThemeContext.js';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // Get theme functions from our context
  const { themePreferences, toggleThemeMode } = useTheme();
  const isDarkMode = themePreferences.mode === 'dark';
  
  // Use MUI's useMediaQuery with our theme
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    navigate('/login');
  };

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Tracker', path: '/job-tracker' },
    { name: 'Alerts', path: '/job-alerts' },
    { name: 'Check Resume', path: '/check-resume' },
    { name: 'Job Preparation', path: '/job-preparation' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: isDarkMode ? '#222222' : '#ffffff', 
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        color: isDarkMode ? '#ffffff' : '#222222'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.25 }}>
        {/* Left section - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img 
              src={Images.logos.atolla} 
              alt="Atolla Logo" 
              style={{ height: 60 }} 
            />
          </Link>
        </Box>
        
        {/* Middle section - Navigation */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? '#FF6B00' : isDarkMode ? '#FE6A0E' : '#555555',
                  fontWeight: isActive(item.path) ? 600 : 500,
                  mx: 1,
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderRadius: 0,
                  lineHeight: '2.5rem',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#FF6B00'
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        ) : (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileMenuToggle}
            sx={{ color: isDarkMode ? '#FE6A0E' : '#555555' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Right section - Theme Toggle and Account */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: '#FF6B00' }}>
              <AccountCircleIcon />
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                mt: 1.5,
                width: 200,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Vish Ramesh</Typography>
              <Typography variant="body2" color="text.secondary">vish@example.com</Typography>
            </Box>
            <Divider />
            <MenuItem component={Link} to="/profile">
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem component={Link} to="/settings">
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            backgroundColor: isDarkMode ? '#222222' : '#ffffff',
            paddingTop: '20px'
          }
        }}
      >
        <Box sx={{ width: '100%' }}>
          {navItems.map((item) => (
            <MenuItem
              key={item.name}
              component={Link}
              to={item.path}
              onClick={handleMobileMenuToggle}
              sx={{
                color: isActive(item.path) ? '#FF6B00' : isDarkMode ? '#FE6A0E' : '#555555',
                fontWeight: isActive(item.path) ? 600 : 500,
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 107, 0, 0.1)'
                }
              }}
            >
              {item.name}
            </MenuItem>
          ))}
          
          {/* Theme toggle in mobile menu */}
          <Box sx={{ px: 2, py: 2, display: 'flex', alignItems: 'center' }}>
            <IconButton 
              onClick={toggleThemeMode} 
              sx={{ 
                color: isDarkMode ? '#FE6A0E' : '#555555',
                mr: 2
              }}
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography sx={{ color: isDarkMode ? '#FE6A0E' : '#555555' }}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;