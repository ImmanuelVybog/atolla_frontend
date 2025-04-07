import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Chip,
  Grid,
  LinearProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import { FilterSegmentContainer, FilterSegment } from '../components/styled/FormComponents';
import Images from '../assets';

const Home = () => {
  const userName = "Vish Ramesh"; // This should come from your auth context
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mapping of company names to their logo images
  const getCompanyLogo = (companyName: string) => {
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

  return (
    <Box sx={{ p: 3 }}>
      {/* Welcome Section */}
      <Typography variant="h4" sx={{ color: '#FF6B00', mb: 1 }}>
        Welcome back, {userName}!
      </Typography>
      <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
        Here's what's happening with your job search today.
      </Typography>

      <Grid container spacing={3}>
        {/* Left Column */}
        <Grid item xs={12} md={8}>
          {/* Quick Search Section */}
          <Paper sx={{ borderRadius: 2, mb: 3, boxShadow: 'none', border: '1px solid #eee' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', p: 3, background: 'linear-gradient(to right, #FFF7ED, #FFEDD5)', borderRadius: '16px 16px 0 0' }}>
            <SearchIcon sx={{ mr: 1, color: '#FF6B00', backgroundColor: '#feead7', borderRadius: '50%', p: 1, width: '40px', height: '40px' }} />
              <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', }}>
                <Typography variant="h6">Quick Search</Typography>
                <Typography variant="body2" color="text.secondary">
                Find jobs matching your skills and preferences
              </Typography>
              </Box>
          </Box>

          
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                  placeholder="e.g. Software Engineer"
                  label="Job Title or Keywords"
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  placeholder="e.g. San Francisco or Remote"
                  label="Location"
                  fullWidth
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#FF6B00',
                    '&:hover': { bgcolor: '#e65c00' },
                    minWidth: '120px'
                  }}
                >
                  Search
                </Button>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>Recent Searches:</Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none' }} label="Frontend Developer" variant="outlined" />
                  <Chip sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none' }} label="Remote" variant="outlined" />
                  <Chip sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none' }} label="UX Designer" variant="outlined" />
                  <Chip sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none' }} label="Full Stack" variant="outlined" />
                  <Chip sx={{ backgroundColor: '#F1F5F9', color: '#000000', border: 'none' }} label="Product Manager" variant="outlined" />
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* Recommended Jobs Section */}
          <Paper sx={{ borderRadius: 2, mb: 3, boxShadow: 'none', border: '1px solid #eee' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 3, background: 'linear-gradient(to right, #FFF7ED, #FFEDD5)', borderRadius: '16px 16px 0 0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: 'row' }}>
              <SearchIcon sx={{ mr: 1, color: '#FF6B00', backgroundColor: '#feead7', borderRadius: '50%', p: 1, width: '40px', height: '40px' }} />
                <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', }}>
                  <Typography variant="h6">Recommended Jobs</Typography>
                  <Typography variant="body2" color="text.secondary">
                  Find jobs matching your skills and preferences
                </Typography>
                </Box>
            </Box>
              <FilterSegmentContainer>
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
              </FilterSegmentContainer>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3, mb: 3, borderRadius: 2 }}>
          

            {/* Job Cards */}
            {[
              {
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
                          <Button sx={{ pt: 0.5, pb: 0.5, pl: 2, pr: 2 }} variant="outlined" size="small">View Details</Button>
                          <Button
                          variant="contained"
                          size="small"
                          sx={{ pt: 0.5, pb: 0.5, pl: 2, pr: 2, bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
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
              sx={{ bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', pl: 8, pr: 8, mt: 2, width: '30%' }}
            >
              View More Jobs
            </Button>
          </Box>
          </Paper>

          {/* Application Tracker */}
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box sx={{ mr: 1, color: '#FF6B00' }}>📝</Box>
              <Typography variant="h6">Application Tracker</Typography>
            </Box>
            
            {/* Application Items */}
            {[
              {
                company: 'Google',
                position: 'Senior Frontend Developer',
                location: 'San Francisco',
                status: 'Interview',
                statusColor: '#4CAF50'
              },
              {
                company: 'Apple',
                position: 'UX Designer',
                location: 'Cupertino',
                status: 'Submitted',
                statusColor: '#2196F3'
              },
              {
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
                  borderRadius: 2
                }}
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
              sx={{ mt: 2 }}
            >
              View All Applications
            </Button>
          </Paper>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {/* Job Alerts */}
          <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NotificationsIcon sx={{ mr: 1, color: '#FF6B00' }} />
                <Typography variant="h6">Job Alerts</Typography>
              </Box>
              <Chip label="21 Jobs" size="small" sx={{ bgcolor: '#FF6B00', color: 'white' }} />
            </Box>

            {[
              { title: 'Frontend Developer', count: 7 },
              { title: 'React Engineer', count: 4 },
              { title: 'Remote Jobs', count: 10 }
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
                <Button size="small">View</Button>
              </Box>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
              startIcon={<NotificationsIcon />}
            >
              Create New Alert
            </Button>
          </Paper>

          {/* Upcoming Interviews */}
          <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon sx={{ mr: 1, color: '#FF6B00', fill: '#4285F4' }} />
                <Typography variant="h6">Upcoming Interviews</Typography>
              </Box>
              <Chip label="2 This Week" size="small" sx={{ bgcolor: '#4285F4', color: 'white' }} />
            </Box>

            {[
              {
                company: 'Google',
                type: 'Technical Interview',
                date: 'Apr 26, 2023',
                time: '11:00 AM',
                isVirtual: true
              },
              {
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
                  <Button size="small" variant="outlined" sx={{ bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', pl: 8, pr: 8 }}>View Details</Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3367D6' }, pl: 8, pr: 8 }}
                  >
                    Prepare
                  </Button>
                </Box>
              </Box>
            ))}

            <Button
              endIcon={<ArrowForwardIcon />}
              fullWidth
              sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3367D6' }, color: '#FFFFFF', mt: 2 }}
            >
              View All Interviews
            </Button>
          </Paper>

          {/* Profile Completion */}
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Profile Completion</Typography>
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
            >
              Complete Profile
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 