import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import PersonalDetails from './pages/onboarding/PersonalDetails';
import Education from './pages/onboarding/Education';
import Experience from './pages/onboarding/Experience';
import SkillsExpertise from './pages/onboarding/SkillsExpertise';
import WorkSamples from './pages/onboarding/WorkSamples';
import JobPreferences from './pages/onboarding/JobPreferences';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobTracker from './pages/JobTracker';
import JobAlerts from './pages/JobAlerts';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import { OnboardingProvider } from './context/OnboardingContext';
import theme, { colors } from './theme';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOnboardingPage = location.pathname.startsWith('/onboarding');
  const shouldShowNavbar = !isAuthPage && !isOnboardingPage;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...(isAuthPage && {
          background: colors.background.gradient,
        }),
        ...(isOnboardingPage && {
          background: colors.background.gradient,
        }),
      }}
    >
      {shouldShowNavbar && <Navbar />}
      
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
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-tracker" element={<JobTracker />} />
        <Route path="/job-alerts" element={<JobAlerts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
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
