import { Box, styled } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';
import { ReactNode } from 'react';

interface ThemedAuthContainerProps {
  children: ReactNode;
}

// A themed container specifically for auth pages with appropriate styling
export const ThemedAuthContainer = ({ children }: ThemedAuthContainerProps) => {
  const { themePreferences } = useTheme();
  
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: themePreferences.mode === 'light' 
          ? 'linear-gradient(135deg, #fff5f2 0%, #fff 100%)'
          : 'linear-gradient(135deg, #1e1e1e 0%, #121212 100%)',
        transition: 'background 0.3s ease',
      }}
    >
      {children}
    </Box>
  );
}; 