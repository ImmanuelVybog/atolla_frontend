import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import atollaLogo from '../../assets/Images/Atolla Logo.png';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={atollaLogo} alt="Atolla Logo" style={{ height: 40 }} />
          </Box>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleLogout}
            sx={{ 
              borderRadius: 50, 
              textTransform: 'none',
              borderColor: '#FF5733',
              color: '#FF5733',
              '&:hover': {
                borderColor: '#E64A2E',
                backgroundColor: 'rgba(255, 87, 51, 0.04)',
              }
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 'calc(100vh - 64px)', 
        p: 4 
      }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', maxWidth: 600 }}>
          This is a placeholder dashboard page. The actual design will be implemented soon.
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3, 
          justifyContent: 'center',
          maxWidth: 1200,
          width: '100%',
          mt: 4
        }}>
          {[1, 2, 3, 4].map((item) => (
            <Box 
              key={item}
              sx={{ 
                width: 280,
                height: 180,
                bgcolor: 'grey.100',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Dashboard Card {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 