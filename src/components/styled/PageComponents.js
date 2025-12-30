import { Box, Paper, Chip } from '@mui/material';
import { useTheme } from '../../context/ThemeContext.js';
import './PageComponents.css';


// A themed page container that automatically uses the current theme mode
export const ThemedPageContainer = ({ children, ...props }) => {
  const { themePreferences } = useTheme();
  
  return (
    <Box
      className="ThemedPageContainer-root"
      sx={{
        bgcolor: themePreferences.mode === 'light' ? '#fff' : '#121212',
        color: themePreferences.mode === 'light' ? '#2D3748' : '#e0e0e0',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// A themed paper component that automatically uses the current theme mode
export const ThemedPaper = ({ children, ...props }) => {
  const { themePreferences } = useTheme();
  return (
    <Box
      className="ThemedPaper-root"
      sx={{
        backgroundColor: themePreferences.mode === 'light' ? '#FFFFFF' : '#1A202C',
        boxShadow: themePreferences.mode === 'light' 
          ? '0 4px 6px rgba(0, 0, 0, 0.05)' 
          : '0 4px 6px rgba(0, 0, 0, 0.2)',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// A themed paper component with a border that is theme-aware
export const ThemedBorderedPaper = ({ children, ...props }) => {
  const { themePreferences } = useTheme();
  return (
    <Box
      className="ThemedBorderedPaper-root"
      sx={{
        border: `1px solid ${themePreferences.mode === 'light' ? '#eee' : '#333'}`,
        backgroundColor: themePreferences.mode === 'light' ? '#FFFFFF' : '#1A202C',
        color: themePreferences.mode === 'light' ? '#2D3748' : '#e0e0e0',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// A themed gradient header for papers
export const ThemedGradientHeader = ({ children, ...props }) => {
  const { themePreferences } = useTheme();
  return (
    <Box
      className="ThemedGradientHeader-root"
      sx={{
        background: themePreferences.mode === 'light'
          ? 'linear-gradient(to right, #FFF7ED, #FFEDD5)'
          : 'linear-gradient(to right, #2c2c2c, #1a1a1a)',
        color: themePreferences.mode === 'light' ? '#2D3748' : '#e0e0e0',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

// A themed chip component that respects the current theme
export const ThemedChip = ({ children, ...props }) => {
  const { themePreferences } = useTheme();
  return (
    <Chip
      className="ThemedChip-root"
      sx={{
        backgroundColor: themePreferences.mode === 'light' ? '#F1F5F9' : '#333',
        color: themePreferences.mode === 'light' ? '#000000' : '#fff',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Chip>
  );
};

// Properly typed interface for the ThemedIconContainer

export const ThemedIconContainer = ({ children, bgColor = '#feead7', iconColor = '#FF6B00', ...props }) => {
  const { themePreferences } = useTheme();
  return (
    <Box
      className="ThemedIconContainer-root"
      sx={{
        color: iconColor,
        backgroundColor: themePreferences.mode === 'light' ? bgColor : 'rgba(255, 107, 0, 0.2)',
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
}; 