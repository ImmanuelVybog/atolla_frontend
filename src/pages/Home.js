import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Chip,
  Grid,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { FilterSegmentContainer, FilterSegment } from '../components/styled/FormComponents';
import {
  ThemedPageContainer,
  ThemedBorderedPaper,
  ThemedGradientHeader,
  ThemedIconContainer,
  ThemedChip
} from '../components/styled/PageComponents';
import Images from '../assets';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ResumeUploadPopup from '../components/ResumeUploadPopup.js';

const Home = () => {
  const navigate = useNavigate();
  const { themePreferences } = useTheme();
  const isDarkMode = themePreferences.mode === 'dark';
  const userName = "Vish Ramesh"; // This should come from your auth context
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState({ jobTitle: '', location: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [appliedJob, setAppliedJob] = useState(null);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  // Mapping of company names to their logo images
  const getCompanyLogo = (companyName) => {
    const company = companyName.toLowerCase();
    switch (company) {
      case 'google': return Images.logos.google;
      case 'microsoft': return Images.logos.microsoft;
      case 'meta': return Images.logos.meta;
      case 'amazon': return Images.logos.amazon;
      case 'apple': return Images.logos.apple;
      case 'netflix': return Images.logos.netflix;
      default: return '';
    }
  };

  const handleOpenPopup = (jobTitle) => {
    setAppliedJob(jobTitle);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUploadSuccess = (resumeName) => {
    console.log(`Successfully applied for ${appliedJob} with resume: ${resumeName}`);
    setSuccessDialogOpen(true);
    setIsPopupOpen(false); // Close the popup after successful upload
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
    navigate('/job-tracker');
  };

  // Handle job search
  const handleSearch = () => {
    // Navigate to Jobs page with search params
    navigate('/jobs', { 
      state: { 
        search: searchQuery.jobTitle,
        location: searchQuery.location 
      } 
    });
  };

  // Handle recent search chip click
  const handleRecentSearchClick = (search) => {
    setSearchQuery({ ...searchQuery, jobTitle: search });
    // Could auto-submit the search
    navigate('/jobs', { state: { search } });
  };

  // Handle view job details
  const handleViewJobDetails = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  // Handle job application
  // const handleApplyJob = (jobId) => {
  //   navigate(`/jobs/${jobId}/apply`);
  // };

  // Handle "View More Jobs" button
  const handleViewMoreJobs = () => {
    navigate('/jobs');
  };

  // Handle view all applications
  const handleViewAllApplications = () => {
    navigate('/job-tracker');
  };

  // Handle create new alert
  const handleCreateNewAlert = () => {
    navigate('/job-alerts/create');
  };

  // Handle view job alert
  const handleViewJobAlert = (alertId) => {
    navigate(`/job-alerts/${alertId}`);
  };

  // Handle view interview details
  const handleViewInterviewDetails = (interviewId) => {
    navigate(`/job-tracker/interviews/${interviewId}`);
  };

  // Handle interview preparation
  const handlePrepareForInterview = (interviewId) => {
    navigate(`/job-preparation?interview=${interviewId}`);
  };

  // Handle view all interviews
  const handleViewAllInterviews = () => {
    navigate('/job-tracker?tab=interviews');
  };

  // Handle complete profile
  const handleCompleteProfile = () => {
    navigate('/profile');
  };

  return (
    <ThemedPageContainer sx={{ p: 3 }}>
      {/* Welcome Section */}
      <Typography variant="h4" sx={{ color: '#FF6B00', mb: 1 }}>
        Welcome back, {userName}!
      </Typography>
      <Typography variant="body1" sx={{ color: isDarkMode ? '#aaaaaa' : '#666', mb: 4 }}>
        Here's what's happening with your job search today.
      </Typography>

      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={8}>
          {/* Quick Search Section */}
          <ThemedBorderedPaper sx={{ mb: 3 }}>
            <ThemedGradientHeader>
              <ThemedIconContainer>
                <SearchIcon />
              </ThemedIconContainer>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                <Typography variant="h6">Quick Search</Typography>
                <Typography variant="body2" color="text.secondary">
                Find jobs matching your skills and preferences
                </Typography>
              </Box>
            </ThemedGradientHeader>
          
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  placeholder="e.g. Software Engineer"
                  label="Job Title or Keywords"
                  fullWidth
                  variant="outlined"
                  value={searchQuery.jobTitle}
                  onChange={(e) => setSearchQuery({ ...searchQuery, jobTitle: e.target.value })}
                />
                <TextField
                  placeholder="e.g. San Francisco or Remote"
                  label="Location"
                  fullWidth
                  variant="outlined"
                  value={searchQuery.location}
                  onChange={(e) => setSearchQuery({ ...searchQuery, location: e.target.value })}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FF6B00',
                    '&:hover': { bgcolor: '#e65c00' },
                    minWidth: '120px'
                  }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>Recent Searches:</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip 
                    sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none', cursor: 'pointer' }} 
                    label="Frontend Developer" 
                    variant="outlined" 
                    onClick={() => handleRecentSearchClick('Frontend Developer')}
                  />
                  <Chip 
                    sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none', cursor: 'pointer' }} 
                    label="Remote" 
                    variant="outlined" 
                    onClick={() => handleRecentSearchClick('Remote')}
                  />
                  <Chip 
                    sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none', cursor: 'pointer' }} 
                    label="UX Designer" 
                    variant="outlined" 
                    onClick={() => handleRecentSearchClick('UX Designer')}
                  />
                  <Chip 
                    sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none', cursor: 'pointer' }} 
                    label="Full Stack" 
                    variant="outlined" 
                    onClick={() => handleRecentSearchClick('Full Stack')}
                  />
                  <Chip 
                    sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none', cursor: 'pointer' }} 
                    label="Product Manager" 
                    variant="outlined" 
                    onClick={() => handleRecentSearchClick('Product Manager')}
                  />
                </Box>
              </Box>
            </Box>
          </ThemedBorderedPaper>

          {/* Recommended Jobs Section */}
          <ThemedBorderedPaper sx={{ mb: 3 }}>
            <ThemedGradientHeader>
              <Box sx={{ display: 'flex', bgColor: 'red', width: '100%' }}>
                <ThemedIconContainer>
                  <SearchIcon />
                </ThemedIconContainer>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                  <Typography variant="h6">Recommended Jobs</Typography>
                  <Typography variant="body2" color="text.secondary">
                  Find jobs matching your skills and preferences
                  </Typography>
                </Box>
              </Box>
            <Box sx={(theme) => ({ 
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
              border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#eeeeee'}`, 
              borderRadius: 10,
              p: 1,
              display: 'flex',
              gap: 1,
              alignItems: 'center',
              })}> 
              <FilterSegment
                selected={selectedFilter === 'all'}
                onClick={() => setSelectedFilter('all')}
              >
                All
              </FilterSegment>
              <FilterSegment
                selected={selectedFilter === 'recent'}
                onClick={() => setSelectedFilter('recent')}
              >
                Recent
              </FilterSegment>
              <FilterSegment
                selected={selectedFilter === 'remote'}
                onClick={() => setSelectedFilter('remote')}
              >
                Remote
              </FilterSegment>
            </Box>
            </ThemedGradientHeader>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3, mb: 3 }}>
            

            {/* Job Cards */}
            {[
              {
                id: 'job-1',
                company: 'Google',
                logo: 'G',
                title: 'Full-stack Developer',
                location: 'Toronto, Canada',
                type: 'Full-time',
                salary: '$120K - 150K',
                timeperiod: '/yr',
                tags: ['JavaScript', 'Node.js', 'React', 'AWS']
              },
              {
                id: 'job-2',
                company: 'Microsoft',
                logo: 'M',
                title: 'Senior UI/UX Designer',
                location: 'Toronto, Canada',
                type: 'Full-time',
                salary: '$120K - 150K',
                timeperiod: '/yr',
                tags: ['UI', 'UX', 'Figma', 'Design Systems']
              },
              {
                id: 'job-3',
                company: 'Meta',
                logo: 'M',
                title: 'Data Analyst',
                location: 'Austin, USA',
                type: 'Full-time',
                salary: '$130K - 160K',
                timeperiod: '/yr',
                tags: ['SQL', 'Python', 'Data Visualization', 'Excel']
              }
            ].map((job, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2,
                  mb: 2,
                  border: '1px solid #eee',
                  borderRadius: 2,
                  '&:hover': { boxShadow: 1 }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {getCompanyLogo(job.company) ? (
                        <Box
                          component="img"
                          src={getCompanyLogo(job.company)}
                          alt={job.company}
                          sx={{
                            width: 40,
                            height: 40,
                            objectFit: 'contain',
                            borderRadius: 1
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            bgcolor: '#eee',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1
                          }}
                        >
                          {job.logo}
                        </Box>
                      )}
                      <Box>
                        <Typography variant="h6">{job.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.company} • {job.location} • {job.type}
                        </Typography>
                      </Box>
                      
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0.5 }}>
                          <Typography variant="subtitle1" sx={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                            {job.salary}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }}>
                            {job.timeperiod}
                          </Typography>
                        </Box>
                      </Box>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mt: 1, justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                        {job.tags.map((tag, i) => (
                          <Chip sx={{ backgroundColor: '#FFE2DB', color: '#FE6A0E', border: '1px solid #fd9881' }} key={i} label={tag} size="small" variant="outlined" />
                        ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button 
                            sx={{ pt: 0.5, pb: 0.5, pl: 2, pr: 2 }} 
                            variant="outlined" 
                            size="small"
                            onClick={() => handleViewJobDetails(job.id)}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ pt: 0.5, pb: 0.5, pl: 2, pr: 2, bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
                            onClick={() => handleOpenPopup(job.title)}
                          >
                            Apply Now
                          </Button>
                        </Box>
                      </Box>
                  
                </Box>
              </Paper>
            ))}

            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', pl: 8, pr: 8, mt: 2 }}
              onClick={handleViewMoreJobs}
            >
              View More Jobs
            </Button>
          </Box>
          </ThemedBorderedPaper>

          {/* Application Tracker */}
          <ThemedBorderedPaper sx={{ mb: 3 }}>
            <ThemedGradientHeader>
              <ThemedIconContainer>
                <img src={Images.icons.applicationTracker} alt="Application Tracker Icon" />
              </ThemedIconContainer>
              <Typography variant="h6">Application Tracker</Typography>
            </ThemedGradientHeader>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3, mb: 3 }}>
            
            {/* Application Items */}
            {[
              {
                id: 'app-1',
                company: 'Google',
                position: 'Senior Frontend Developer',
                location: 'San Francisco',
                status: 'Interview',
                statusColor: '#4CAF50'
              },
              {
                id: 'app-2',
                company: 'Apple',
                position: 'UX Designer',
                location: 'Cupertino',
                status: 'Submitted',
                statusColor: '#2196F3'
              },
              {
                id: 'app-3',
                company: 'Amazon',
                position: 'Backend Engineer',
                location: 'Remote',
                status: 'Draft',
                statusColor: '#FFC107'
              }
            ].map((app, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  mb: 2,
                  border: '1px solid #eee',
                  borderRadius: 2,
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/job-tracker/application/${app.id}`)}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  {getCompanyLogo(app.company) ? (
                    <Box
                      component="img"
                      src={getCompanyLogo(app.company)}
                      alt={app.company}
                      sx={{
                        width: 40,
                        height: 40,
                        objectFit: 'contain',
                        borderRadius: 1
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: '#eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 1
                      }}
                    >
                      {app.company.charAt(0)}
                    </Box>
                  )}
                  <Box>
                    <Typography variant="subtitle1">{app.position}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {app.company} • {app.location}
                    </Typography>
                  </Box>
                </Box>
                <Chip
                  label={app.status}
                  sx={{
                    bgcolor: app.statusColor + '20',
                    color: app.statusColor,
                    borderColor: app.statusColor
                  }}
                  variant="outlined"
                />
              </Box>
            ))}

            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{ bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', pl: 8, pr: 8, mt: 2 }}
              onClick={handleViewAllApplications}
            >
              View All Applications
            </Button>
          </Box>
          </ThemedBorderedPaper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {/* Job Alerts */}
          <ThemedBorderedPaper>
            <ThemedGradientHeader>
              <Box
              sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                  <ThemedIconContainer>
                    <NotificationsIcon />
                  </ThemedIconContainer>
                  <Typography variant="h6">Job Alerts</Typography>
                </Box>
                <Box>
                  <Chip label="21 Jobs" size="small" sx={{ bgcolor: '#FF6B00', color: 'white' }} />
                </Box>
              </Box>
            </ThemedGradientHeader>
            

            <Box sx={{ p: 3 }}>

            {[
              { id: 'alert-1', title: 'Frontend Developer', count: 7 },
              { id: 'alert-2', title: 'React Engineer', count: 4 },
              { id: 'alert-3', title: 'Remote Jobs', count: 10 }
            ].map((alert, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                  p: 2,
                  border: '1px solid #eee',
                  borderRadius: 2
                }}
              >
                <Box>
                  <Typography variant="subtitle1">{alert.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {alert.count} new matches
                  </Typography>
                </Box>
                <Button 
                  size="small"
                  onClick={() => handleViewJobAlert(alert.id)}
                >
                  View
                </Button>
              </Box>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
              startIcon={<NotificationsIcon />}
              onClick={handleCreateNewAlert}
            >
              Create New Alert
            </Button>
            </Box>
          </ThemedBorderedPaper>

          {/* Upcoming Interviews */}
          <ThemedBorderedPaper sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
          sx={(theme) => ({ 
            display: 'flex',
            background: theme.palette.mode === 'dark' ? 'linear-gradient(to right,rgb(16, 42, 122),rgb(2, 28, 104))' : 'linear-gradient(to right, #F3F6FF, #E7EDFF)',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#eeeeee'}`, 
            borderRadius: '16px 16px 0 0',
            p: 3,
            gap: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            })}
          >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon sx={{ color: '#3361EA', backgroundColor: 'rgba(51, 97, 234, 0.1)', p: 1, borderRadius: 10, width: 44, height: 44, fontSize: 30 }} />
                  <Typography variant="h6">Upcoming Interviews</Typography>
                </Box>
                

                <Box>
                <Chip label="2 This Week" size="small" sx={{ bgcolor: '#3361EA', color: 'white' }} />
                </Box>
            </Box>

            

            <Box sx={{ p: 3 }}>

            {[
              {
                id: 'interview-1',
                company: 'Google',
                type: 'Technical Interview',
                date: 'Apr 26, 2023',
                time: '11:00 AM',
                isVirtual: true
              },
              {
                id: 'interview-2',
                company: 'Microsoft',
                type: 'HR Interview',
                date: 'Apr 27, 2023',
                time: '2:00 PM',
                isVirtual: false
              }
            ].map((interview, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  border: '1px solid #eee',
                  borderRadius: 2
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1">{interview.type}</Typography>
                  <Chip
                    label={interview.isVirtual ? 'Virtual' : 'In-person'}
                    size="small"
                    variant="outlined"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {interview.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {interview.date} • {interview.time}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'space-between', width: '100%' }}>
                  <Button 
                    size="small" 
                    variant="outlined" 
                    sx={{ bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', width: '100%' }}
                    onClick={() => handleViewInterviewDetails(interview.id)}
                  >
                    View Details
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ width: '100%', bgcolor: '#3361ea', '&:hover': { bgcolor: '#3367D6' } }}
                    onClick={() => handlePrepareForInterview(interview.id)}
                  >
                    Prepare
                  </Button>
                </Box>
              </Box>
            ))}

            <Button
              endIcon={<ArrowForwardIcon />}
              fullWidth
              sx={{ bgcolor: '#3361EA', '&:hover': { bgcolor: '#3367D6' }, color: '#FFFFFF', mt: 2 }}
              onClick={handleViewAllInterviews}
            >
              View All Interviews
            </Button>
            </Box>
          </ThemedBorderedPaper>

          {/* Profile Completion */}
          <ThemedBorderedPaper>
            <Box sx={{ display: 'flex', alignItems: 'center', p: 3, background: 'linear-gradient(to right, #ECFDF5, #D1FAE5)', borderRadius: '16px 16px 0 0' }}>
              <Typography variant="h6">Profile Completion</Typography>
            </Box>
            <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">85% Complete</Typography>
                <Typography variant="body2">170/200</Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={85}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: '#E0E0E0',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: '#00BFA5'
                  }
                }}
              />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              To complete your profile:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                'Add a profile picture',
                'Add a portfolio link',
                'Complete skills assessment'
              ].map((item, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      border: '1px solid #00BFA5'
                    }}
                  />
                  <Typography variant="body2">{item}</Typography>
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                bgcolor: '#00BFA5',
                '&:hover': { bgcolor: '#00A693' }
              }}
              onClick={handleCompleteProfile}
            >
              Complete Profile
            </Button>
            </Box>
          </ThemedBorderedPaper>
        </Grid>
      </Grid>
      <ResumeUploadPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        onUploadSuccess={handleUploadSuccess}
        jobTitle={appliedJob}
      />

      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={handleCloseSuccessDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Application Submitted Successfully
          <IconButton
            aria-label="close"
            onClick={handleCloseSuccessDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <CheckCircleIcon sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              Your application for {appliedJob} has been submitted!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              You can track the status of your application in the Job Tracker section.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>Close</Button>
          <Button
            variant="contained"
            onClick={handleCloseSuccessDialog}
            sx={{
              bgcolor: '#FF6B00',
              '&:hover': { bgcolor: '#e65c00' }
            }}
          >
            Go to Job Tracker
          </Button>
        </DialogActions>
      </Dialog>
    </ThemedPageContainer>
  );
};

export default Home; 