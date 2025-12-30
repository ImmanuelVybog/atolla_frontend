import { CssBaseline, ThemeProvider as MuiThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/Login.js';
import Signup from './pages/auth/Signup.js';
import PersonalDetails from './pages/onboarding/PersonalDetails.js';
import Education from './pages/onboarding/Education.js';
import Experience from './pages/onboarding/Experience.js';
import SkillsExpertise from './pages/onboarding/SkillsExpertise.js';
import WorkSamples from './pages/onboarding/WorkSamples.js';
import JobPreferences from './pages/onboarding/JobPreferences.js';
import Home from './pages/Home.js';
import HomeNew from './pages/Home New.js';
import HomeNew2 from './pages/HomeNew2.js';
import Jobs from './pages/Jobs.js';
import JobTracker from './pages/JobTracker.js';
import JobAlerts from './pages/JobAlerts.js';
import Users from './pages/Users.js';
import Reports from './pages/Reports.js';
import Settings from './pages/Settings.js';
import Profile from './pages/Profile.js';
import CheckResume from './pages/CheckResume.js';
import JobPreparation from './pages/JobPreparation.js';
import JobApply from './pages/JobApply.js';
import JobAlertCreate from './pages/JobAlertCreate.js';
import JobDetails from './pages/JobDetails.js';
import InterviewDetails from './pages/InterviewDetails.js';
import JobAlertDetail from './pages/JobAlertDetail.js';
import Navbar from './components/Navbar';
import { OnboardingProvider } from './context/OnboardingContext.js';
import { ThemeProvider, useTheme } from './context/ThemeContext.js';
import { createAppTheme } from './theme/index.js';
import GlobalSearch from './components/GlobalSearch';

const AppContent = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isOnboardingPage = location.pathname.startsWith('/onboarding');
  const isHomePage = location.pathname === '/home';
  const shouldShowNavbar = !isAuthPage && !isOnboardingPage;
  const shouldShowSearch = !isAuthPage && !isOnboardingPage && !isHomePage;
  
  const { themePreferences } = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {shouldShowNavbar && <Navbar />}
      {/* {shouldShowSearch && <GlobalSearch />} */}
      
      <Box 
        sx={{ 
          margin: 'auto',
          maxWidth: (isAuthPage || isHomePage) ? 'none' : '96rem',
          width: '100%',
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
          <Route path="/home" element={<HomeNew2 />} />
          <Route path="/home-new" element={<HomeNew />} />
          <Route path="/home-new-2" element={<HomeNew2 />} />
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

// This wrapper ensures that MuiThemeProvider gets the current theme from ThemeContext
const AppWrapper = () => {
  const { theme } = useTheme();
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <OnboardingProvider>
          <AppContent />
        </OnboardingProvider>
      </Router>
    </MuiThemeProvider>
  );
};

// Export the entire app with a single ThemeProvider
const AppWithProviders = () => {
  return (
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
};

export default AppWithProviders;
