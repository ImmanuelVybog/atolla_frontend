import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - 240px)` },
        ml: { sm: '240px' },
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Box>
  );
};

export default MainContent; 