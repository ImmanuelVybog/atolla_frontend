import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// Color palette
export const colors = {
  primary: {
    main: '#FF5733',
    light: '#FFE5E0',
    dark: '#ff4019',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#ffffff',
    paper: '#ffffff',
    gradient: 'linear-gradient(135deg, #fff5f2 0%, #fff 100%)',
  },
  text: {
    primary: '#2D3748',
    secondary: '#718096',
  },
  common: {
    white: '#FFFFFF',
    black: '#000000',
  },
  action: {
    hover: 'rgba(255, 87, 51, 0.08)',
  },
};

// Typography
export const typographyOptions: TypographyOptions = {
  fontFamily: '"DM Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    fontFamily: '"DM Sans", sans-serif',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    fontFamily: '"DM Sans", sans-serif',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    fontFamily: '"DM Sans", sans-serif',
  },
  body2: {
    fontFamily: '"DM Sans", sans-serif',
  },
  button: {
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 600,
  },
  subtitle1: {
    fontFamily: '"DM Sans", sans-serif',
  },
  subtitle2: {
    fontFamily: '"DM Sans", sans-serif',
  },
  caption: {
    fontFamily: '"DM Sans", sans-serif',
  },
  overline: {
    fontFamily: '"DM Sans", sans-serif',
  },
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

// Create and export the theme
const theme = createTheme({
  palette: {
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
  },
  typography: typographyOptions,
  shape,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: shape.buttonBorderRadius,
          padding: '10px 24px',
          fontFamily: '"DM Sans", sans-serif',
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
            fontFamily: '"DM Sans", sans-serif',
          },
          '& .MuiInputLabel-root': {
            fontFamily: '"DM Sans", sans-serif',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"DM Sans", sans-serif',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"DM Sans", sans-serif',
        },
      },
    },
  },
});

export default theme; 