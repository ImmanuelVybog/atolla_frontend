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
  ListItemIcon 
} from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import atollaLogo from '../assets/Images/Atolla Logo.png';

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
    { name: 'Job Tracker', path: '/job-tracker' },
    { name: 'Job Alerts', path: '/job-alerts' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#222222', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1.25 }}>
        {/* Left section - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <img src={atollaLogo} alt="Atolla Logo" style={{ height: 60 }} />
          </Link>
        </Box>
        
        {/* Middle section - Navigation */}
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
    </AppBar>
  );
};

export default Navbar; 