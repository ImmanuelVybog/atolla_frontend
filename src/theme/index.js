import { createTheme } from '@mui/material';


// Color palette
export const getColors = (mode) => ({
  primary: {
    main: '#FF6B00',
    light: '#FFE5E0',
    dark: '#ff4019',
    contrastText: '#FFFFFF',
  },
  background: mode === 'light' 
    ? {
        default: '#ffffff',
        paper: '#ffffff',
        gradient: 'linear-gradient(135deg, #fff5f2 0%, #fff 100%)',
      }
    : {
        default: '#121212',
        paper: '#1e1e1e',
        gradient: 'linear-gradient(135deg, #1e1e1e 0%, #121212 100%)',
      },
  text: mode === 'light'
    ? {
        primary: '#2D3748',
        secondary: '#718096',
      }
    : {
        primary: '#e0e0e0',
        secondary: '#aaaaaa',
      },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
  action: {
    hover: mode === 'light' ? 'rgba(255, 87, 51, 0.08)' : 'rgba(255, 87, 51, 0.15)',
  },
  mode,
});

// Direct export of colors with light mode (default)
export const colors = getColors('light');



// Font size multipliers
const fontSizeMultipliers = {
  small: 0.875,
  medium: 1,
  large: 1.125,
};

// Typography
export const getTypographyOptions = (fontSize) => {
  const multiplier = fontSizeMultipliers[fontSize];
  
  return {
    fontFamily: '"Google Sans Flex", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: `${2.5 * multiplier}rem`,
      fontWeight: 700,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    h2: {
      fontSize: `${2 * multiplier}rem`,
      fontWeight: 600,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    h3: {
      fontSize: `${1.75 * multiplier}rem`,
      fontWeight: 600,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    h4: {
      fontSize: `${1.5 * multiplier}rem`,
      fontWeight: 600,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    body1: {
      fontSize: `${1 * multiplier}rem`,
      lineHeight: 1.5,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    body2: {
      fontSize: `${0.875 * multiplier}rem`,
      lineHeight: 1.5,
      fontFamily: '"Google Sans Flex", sans-serif',
    },
    button: {
      fontFamily: '"Google Sans Flex", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Google Sans Flex", sans-serif',
      fontSize: `${1 * multiplier}rem`,
    },
    subtitle2: {
      fontFamily: '"Google Sans Flex", sans-serif',
      fontSize: `${0.875 * multiplier}rem`,
    },
    caption: {
      fontFamily: '"Google Sans Flex", sans-serif',
      fontSize: `${0.75 * multiplier}rem`,
    },
    overline: {
      fontFamily: '"Google Sans Flex", sans-serif',
    },
  };
};

// Shape
export const shape = {
  borderRadius: 8,
  buttonBorderRadius: 30,
};

// Spacing values
export const spacing = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
};

// Create theme function that takes mode and font size as parameters
export const createAppTheme = (mode, fontSize) => {
  const colors = getColors(mode);
  const typography = getTypographyOptions(fontSize);

  return createTheme({
    palette: {
      mode,
      primary: colors.primary,
      background: colors.background,
      text: colors.text,
    },
    typography,
    shape,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: shape.buttonBorderRadius,
            padding: '10px 24px',
            fontFamily: '"Google Sans Flex", sans-serif',
            textTransform: 'none',
          },
          contained: {
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 50,
              fontFamily: '"Google Sans Flex", sans-serif',
            },
            '& .MuiInputLabel-root': {
              fontFamily: '"Google Sans Flex", sans-serif',
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: '"Google Sans Flex", sans-serif',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: '"Google Sans Flex", sans-serif',
            ...(mode === 'dark' && {
              scrollbarColor: '#6b6b6b #2b2b2b',
              '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                backgroundColor: '#2b2b2b',
              },
              '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                borderRadius: 8,
                backgroundColor: '#6b6b6b',
                minHeight: 24,
                border: '3px solid #2b2b2b',
              },
              '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                backgroundColor: '#959595',
              },
              '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                backgroundColor: '#959595',
              },
              '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#959595',
              },
            }),
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            transition: 'background-color 0.3s, color 0.3s',
          },
        },
      },
    },
  });
};

// Default theme with light mode and medium font size
const defaultTheme = createAppTheme('light', 'medium');

export default defaultTheme; 