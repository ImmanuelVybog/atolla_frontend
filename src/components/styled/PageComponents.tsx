import { Box, styled, BoxProps, Paper, Chip, Theme, SxProps } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';
import { ReactNode } from 'react';

interface ThemedPageContainerProps extends BoxProps {
  children: ReactNode;
}

// A themed page container that automatically uses the current theme mode
export const ThemedPageContainer = ({ children, ...props }: ThemedPageContainerProps) => {
  const { themePreferences } = useTheme();
  
  return (
    <Box
      sx={{
        bgcolor: themePreferences.mode === 'light' ? '#fff' : '#121212',
        color: themePreferences.mode === 'light' ? '#2D3748' : '#e0e0e0',
        minHeight: '100vh',
        transition: 'background-color 0.3s, color 0.3s',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// A themed paper component that automatically uses the current theme mode
export const ThemedPaper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(3),
  boxShadow: theme.palette.mode === 'light' 
    ? '0 4px 6px rgba(0, 0, 0, 0.05)' 
    : '0 4px 6px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, color 0.3s',
}));

// A themed paper component with a border that is theme-aware
export const ThemedBorderedPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: 'none',
  border: `1px solid ${theme.palette.mode === 'light' ? '#eee' : '#333'}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
}));

// A themed gradient header for papers
export const ThemedGradientHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(to right, #FFF7ED, #FFEDD5)'
    : 'linear-gradient(to right, #2c2c2c, #1a1a1a)',
  borderRadius: '16px 16px 0 0',
  color: theme.palette.text.primary,
}));

// A themed chip component that respects the current theme
export const ThemedChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#F1F5F9' : '#333',
  color: theme.palette.mode === 'light' ? '#000000' : '#fff',
  border: 'none',
}));

// Properly typed interface for the ThemedIconContainer
interface ThemedIconContainerProps extends BoxProps {
  bgColor?: string;
  iconColor?: string;
}

// A themed container for icons
export const ThemedIconContainer = styled(Box)<ThemedIconContainerProps>(({ theme, bgColor = '#feead7', iconColor = '#FF6B00' }) => ({
  marginRight: theme.spacing(1),
  color: iconColor,
  backgroundColor: theme.palette.mode === 'light' ? bgColor : 'rgba(255, 107, 0, 0.2)',
  borderRadius: '50%',
  padding: theme.spacing(1),
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})); 