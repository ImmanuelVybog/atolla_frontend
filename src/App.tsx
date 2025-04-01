import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PersonalDetails from './pages/onboarding/PersonalDetails';
import Education from './pages/onboarding/Education';
import Experience from './pages/onboarding/Experience';
import SkillsExpertise from './pages/onboarding/SkillsExpertise';
import WorkSamples from './pages/onboarding/WorkSamples';
import JobPreferences from './pages/onboarding/JobPreferences';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import { OnboardingProvider } from './context/OnboardingContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
      light: '#FFE5E0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2D3748',
      secondary: '#718096',
    },
  },
  typography: {
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
      textTransform: 'none',
      fontWeight: 600,
      fontFamily: '"DM Sans", sans-serif',
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
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          fontFamily: '"DM Sans", sans-serif',
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
            borderRadius: 8,
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

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOnboardingPage = location.pathname.startsWith('/onboarding');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...(isAuthPage && {
          background: 'linear-gradient(135deg, #fff5f2 0%, #fff 100%)',
        }),
        ...(isOnboardingPage && {
          background: 'linear-gradient(135deg, #fff5f2 0%, #fff 100%)',
        }),
      }}
    >
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Onboarding Routes */}
        <Route path="/onboarding/personal-details" element={<PersonalDetails />} />
        <Route path="/onboarding/education" element={<Education />} />
        <Route path="/onboarding/experience" element={<Experience />} />
        <Route path="/onboarding/skills-expertise" element={<SkillsExpertise />} />
        <Route path="/onboarding/work-samples" element={<WorkSamples />} />
        <Route path="/onboarding/job-preferences" element={<JobPreferences />} />

        {/* Main App Routes */}
        <Route path="/dashboard" element={
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Dashboard />
          </Box>
        } />
        <Route path="/users" element={
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Users />
          </Box>
        } />
        <Route path="/reports" element={
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Reports />
          </Box>
        } />
        <Route path="/settings" element={
          <Box sx={{ display: 'flex', width: '100%' }}>
            <Settings />
          </Box>
        } />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <OnboardingProvider>
          <AppContent />
        </OnboardingProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
