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
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Images from '../assets';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#222222', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.25 }}>
        {/* Left section - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img src={Images.logos.atolla} alt="Atolla Logo" style={{ height: 60 }} />
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
                  color: isActive(item.path) ? '#FFCABE' : '#FE6A0E',
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
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileMenuToggle}
            sx={{ color: '#FE6A0E' }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Right section - Account */}
        <Box>
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
            backgroundColor: '#222222',
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
                color: isActive(item.path) ? '#FFCABE' : '#FE6A0E',
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
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;