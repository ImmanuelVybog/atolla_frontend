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

const Home = () => {
  const userName = "Vish Ramesh"; // This should come from your auth context

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
          <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SearchIcon sx={{ mr: 1, color: '#FF6B00' }} />
              <Typography variant="h6">Quick Search</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Find jobs matching your skills and preferences
            </Typography>
            
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
                <Chip label="Frontend Developer" variant="outlined" />
                <Chip label="Remote" variant="outlined" />
                <Chip label="UX Designer" variant="outlined" />
                <Chip label="Full Stack" variant="outlined" />
                <Chip label="Product Manager" variant="outlined" />
              </Box>
            </Box>
          </Paper>

          {/* Recommended Jobs Section */}
          <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 1, color: '#FF6B00' }}>📋</Box>
                <Typography variant="h6">Recommended Jobs</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="All" variant="filled" sx={{ bgcolor: '#FF6B00', color: 'white' }} />
                <Chip label="Recent" variant="outlined" />
                <Chip label="Remote" variant="outlined" />
              </Box>
            </Box>

            {/* Job Cards */}
            {[
              {
                company: 'Google',
                logo: 'G',
                title: 'Full-stack Developer',
                location: 'Toronto, Canada',
                type: 'Full-time',
                salary: '$120K - 150K/yr',
                tags: ['JavaScript', 'Node.js', 'React', 'AWS']
              },
              {
                company: 'Microsoft',
                logo: 'M',
                title: 'Senior UI/UX Designer',
                location: 'Toronto, Canada',
                type: 'Full-time',
                salary: '$120K - 150K/yr',
                tags: ['UI', 'UX', 'Figma', 'Design Systems']
              },
              {
                company: 'Meta',
                logo: 'M',
                title: 'Data Analyst',
                location: 'Austin, USA',
                type: 'Full-time',
                salary: '$130K - 160K/yr',
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
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
                    <Box>
                      <Typography variant="h6">{job.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.company} • {job.location} • {job.type}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        {job.tags.map((tag, i) => (
                          <Chip key={i} label={tag} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {job.salary}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="outlined" size="small">View Details</Button>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
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
              sx={{ mt: 2 }}
            >
              View More Jobs
            </Button>
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
                <CalendarTodayIcon sx={{ mr: 1, color: '#FF6B00' }} />
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
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Button size="small" variant="outlined">View Details</Button>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: '#4285F4', '&:hover': { bgcolor: '#3367D6' } }}
                  >
                    Prepare
                  </Button>
                </Box>
              </Box>
            ))}

            <Button
              endIcon={<ArrowForwardIcon />}
              fullWidth
              sx={{ mt: 2 }}
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