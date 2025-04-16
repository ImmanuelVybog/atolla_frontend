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
import Profile from './pages/Profile';
import CheckResume from './pages/CheckResume';
import JobPreparation from './pages/JobPreparation';
import JobApply from './pages/JobApply';
import JobAlertCreate from './pages/JobAlertCreate';
import JobDetails from './pages/JobDetails';
import InterviewDetails from './pages/InterviewDetails';
import JobAlertDetail from './pages/JobAlertDetail';
import Navbar from './components/Navbar';
import { OnboardingProvider } from './context/OnboardingContext';
import theme, { colors } from './theme';
import GlobalSearch from './components/GlobalSearch';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOnboardingPage = location.pathname.startsWith('/onboarding');
  const isHomePage = location.pathname === '/home';
  const shouldShowNavbar = !isAuthPage && !isOnboardingPage;
  const shouldShowSearch = !isAuthPage && !isOnboardingPage && !isHomePage;

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
      {shouldShowSearch && <GlobalSearch />}
      
      <Box 
        sx={{ 
          margin: 'auto',
          maxWidth: '96rem',
          width: '100%',
          px: 2, // Add some padding on the sides
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
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/jobs/apply/:jobId" element={<JobApply />} />
          <Route path="/job-tracker" element={<JobTracker />} />
          <Route path="/job-tracker/interviews/:interviewId" element={<InterviewDetails />} />
          <Route path="/job-alerts" element={<JobAlerts />} />
          <Route path="/job-alerts/create" element={<JobAlertCreate />} />
          <Route path="/job-alerts/edit/:alertId" element={<JobAlertCreate />} />
          <Route path="/job-alerts/:alertId" element={<JobAlertDetail />} />
          <Route path="/check-resume" element={<CheckResume />} />
          <Route path="/job-preparation" element={<JobPreparation />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Box>
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
