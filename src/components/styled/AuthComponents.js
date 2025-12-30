import { Box } from '@mui/material';
import { useTheme } from '../../context/ThemeContext.js';
import './AuthComponents.css';


// A themed container specifically for auth pages with appropriate styling
export const ThemedAuthContainer = ({ children }) => {
  const { themePreferences } = useTheme();
  
  return (
    <Box
      className="ThemedAuthContainer-root"
      sx={{
        background: themePreferences.mode === 'light' 
          ? 'linear-gradient(135deg, #ffffffff 0%, #fff 100%)'
          : 'linear-gradient(135deg, #1e1e1e 0%, #121212 100%)',
      }}
    >
      {children}
    </Box>
  );
}; 