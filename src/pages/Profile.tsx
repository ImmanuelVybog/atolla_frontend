import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Grid,
  Divider,
  Chip,
  TextField,
  IconButton,
  Tabs,
  Tab,
  LinearProgress,
  Container,
  Link,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [editAbout, setEditAbout] = useState(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const toggleEditAbout = () => {
    setEditAbout(!editAbout);
  };

  // Mock user data
  const user = {
    name: 'John Doe',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    about: 'Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Proficient in React, TypeScript, and modern CSS frameworks. Passionate frontend developer with 5+ years of experience building responsive and accessible web applications. Proficient in React, TypeScript, and modern CSS frameworks.',
    website: 'https://johndoe.dev',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
      'Node.js',
      'UI/UX Design',
      'Responsive Design',
      'Accessibility',
      'Git'
    ],
    experience: [
      {
        company: 'TechCorp Inc.',
        role: 'Senior Frontend Developer',
        period: 'Jan 2021 - Present',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Lead frontend development for multiple projects using React and TypeScript. Improved performance by 40% through code optimizations.',
      },
      {
        company: 'WebSolutions LLC',
        role: 'Frontend Developer',
        period: 'Mar 2019 - Dec 2020',
        location: 'Boston, MA',
        type: 'Full-time',
        description: 'Developed responsive user interfaces for client projects. Collaborated with designers and backend developers.',
      },
    ],
    education: [
      {
        institution: 'University of California, Berkeley',
        degree: 'B.S. Computer Science',
        period: '2015 - 2019',
      },
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      website: 'https://johndoe.dev',
    },
  };

  const profileCompletion = 80; // Percentage of profile completed

  return (
    <Box sx={{ bgcolor: '#F8F9FB', minHeight: '100vh', pt: 2, pb: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PersonIcon sx={{ mr: 1 }} />
          <Typography variant="h5" component="h1">My Profile</Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Left Sidebar with Profile Info */}
          <Grid item xs={12} md={4} lg={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Profile Card */}
              <Paper 
                sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden', 
                  bgcolor: '#FFF8F5', 
                  border: '1px solid #FFE2DB',
                  pb: 2 
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: '#FF6B00', 
                    height: 16, 
                    width: '100%', 
                    mb: 2 
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 3 }}>
                  <Box sx={{ position: 'relative' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        fontSize: '2rem',
                        bgcolor: '#FF6B00',
                        color: 'white',
                        mb: 1,
                      }}
                    >
                      JD
                    </Avatar>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        bgcolor: '#fff', 
                        border: '1px solid #ddd',
                        '&:hover': { bgcolor: '#f5f5f5' }
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary" gutterBottom>
                    {user.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                    <LocationOnIcon sx={{ fontSize: '0.9rem', color: 'text.secondary', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      {user.location}
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Contact Information */}
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmailIcon sx={{ fontSize: '1rem', color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">{user.email}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <PhoneIcon sx={{ fontSize: '1rem', color: 'text.secondary', mr: 1 }} />
                    <Typography variant="body2">{user.phone}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LanguageIcon sx={{ fontSize: '1rem', color: 'text.secondary', mr: 1 }} />
                    <Link href={user.website} target="_blank" variant="body2" sx={{ color: '#FF6B00' }}>
                      {user.website.replace('https://', '')}
                    </Link>
                  </Box>
                </Box>
              </Paper>

              {/* Social Profiles */}
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  Social Profiles
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Box sx={{ p: 1, border: '1px solid #eee', borderRadius: 1, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LinkedInIcon />
                  </Box>
                  <Box sx={{ p: 1, border: '1px solid #eee', borderRadius: 1, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GitHubIcon />
                  </Box>
                  <Box sx={{ p: 1, border: '1px solid #eee', borderRadius: 1, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LanguageIcon />
                  </Box>
                </Box>
              </Paper>

              {/* Profile Completion */}
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Profile Completion
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {profileCompletion}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={profileCompletion} 
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    mb: 2,
                    backgroundColor: 'rgba(255, 107, 0, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#FF6B00',
                      borderRadius: 4
                    }
                  }}
                />
                <Typography variant="body2" sx={{ mb: 2 }}>
                  To complete your profile:
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                    Add a profile picture
                  </Typography>
                  <Typography component="li" variant="body2">
                    Complete skills assessment
                  </Typography>
                </Box>
              </Paper>

              {/* Resume Actions */}
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Button
                  startIcon={<DownloadIcon />}
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 1, borderRadius: 2, textTransform: 'none' }}
                >
                  Download Resume
                </Button>
                <Button
                  startIcon={<UploadIcon />}
                  fullWidth
                  variant="outlined"
                  sx={{ borderRadius: 2, textTransform: 'none' }}
                >
                  Upload New Resume
                </Button>
              </Paper>

              {/* Skills Section */}
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Skills
                  </Typography>
                  <Button 
                    startIcon={<AddIcon />} 
                    size="small" 
                    sx={{ 
                      textTransform: 'none', 
                      padding: 0,
                      minWidth: 'unset',
                    }}
                  >
                    Add
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {user.skills.map((skill, index) => (
                    <Chip 
                      key={index} 
                      label={skill} 
                      size="small" 
                      sx={{ 
                        bgcolor: index % 2 === 0 ? '#EDE9FE' : '#FFE2DB',
                        color: index % 2 === 0 ? '#7C3AED' : '#FF6B00',
                        borderRadius: 1,
                        height: 24,
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>
              </Paper>

              {/* Edit Profile Button */}
              <Button
                startIcon={<EditIcon />}
                fullWidth
                variant="contained"
                sx={{ 
                  bgcolor: '#FF6B00', 
                  borderRadius: 2, 
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#e65c00' },
                  py: 1
                }}
              >
                Edit Profile
              </Button>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8} lg={9}>
            {/* About Me Section */}
            <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>About Me</Typography>
                <IconButton onClick={toggleEditAbout} size="small">
                  {editAbout ? <SaveIcon fontSize="small" /> : <EditIcon fontSize="small" />}
                </IconButton>
              </Box>
              {editAbout ? (
                <TextField
                  multiline
                  fullWidth
                  rows={4}
                  defaultValue={user.about}
                  variant="outlined"
                />
              ) : (
                <Typography variant="body2">
                  {user.about}
                </Typography>
              )}
              {editAbout && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    size="small" 
                    startIcon={<SaveIcon />}
                    onClick={toggleEditAbout}
                    sx={{ 
                      bgcolor: '#FF6B00', 
                      borderRadius: 2, 
                      textTransform: 'none',
                      '&:hover': { bgcolor: '#e65c00' },
                    }}
                  >
                    Save
                  </Button>
                </Box>
              )}
            </Paper>

            {/* Experience, Education, Job Preferences Tabs */}
            <Paper sx={{ borderRadius: 2 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="profile tabs"
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontWeight: 500,
                      px: 3,
                    },
                    '& .Mui-selected': {
                      color: '#FF6B00',
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                >
                  <Tab label="Experience" id="tab-0" aria-controls="tabpanel-0" />
                  <Tab label="Education" id="tab-1" aria-controls="tabpanel-1" />
                  <Tab label="Certifications" id="tab-2" aria-controls="tabpanel-2" />
                  <Tab label="Portfolio" id="tab-3" aria-controls="tabpanel-3" />
                  <Tab label="Job Preferences" id="tab-4" aria-controls="tabpanel-4" />
                </Tabs>
              </Box>
              
              {/* Experience Tab Panel */}
              <TabPanel value={tabValue} index={0}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Work Experience</Typography>
                  <Button 
                    startIcon={<AddIcon />} 
                    sx={{ 
                      color: '#FF6B00',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 0, 0.04)',
                      },
                      textTransform: 'none'
                    }}
                  >
                    Add Experience
                  </Button>
                </Box>

                {user.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 3, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{exp.role}</Typography>
                        <Typography variant="body2" color="text.secondary">{exp.company}</Typography>
                        <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                          <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOnIcon sx={{ fontSize: '0.9rem', color: 'text.secondary', mr: 0.5 }} />
                            <Typography variant="body2" color="text.secondary">{exp.location}</Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">{exp.type}</Typography>
                        </Box>
                      </Box>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>{exp.description}</Typography>
                    {index < user.experience.length - 1 && <Divider sx={{ mt: 2 }} />}
                  </Box>
                ))}
              </TabPanel>

              {/* Education Tab Panel */}
              <TabPanel value={tabValue} index={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Education</Typography>
                  <Button 
                    startIcon={<AddIcon />} 
                    sx={{ 
                      color: '#FF6B00',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 0, 0.04)',
                      },
                      textTransform: 'none'
                    }}
                  >
                    Add Education
                  </Button>
                </Box>

                {user.education.map((edu, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{edu.degree}</Typography>
                        <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
                        <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
                      </Box>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {index < user.education.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
                  </Box>
                ))}
              </TabPanel>

              {/* Certifications Tab Panel */}
              <TabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Certifications</Typography>
                  <Button 
                    startIcon={<AddIcon />} 
                    sx={{ 
                      color: '#FF6B00',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 0, 0.04)',
                      },
                      textTransform: 'none'
                    }}
                  >
                    Add Certification
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  No certifications added yet. Add your professional certifications to showcase your expertise.
                </Typography>
              </TabPanel>

              {/* Portfolio Tab Panel */}
              <TabPanel value={tabValue} index={3}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Portfolio</Typography>
                  <Button 
                    startIcon={<AddIcon />} 
                    sx={{ 
                      color: '#FF6B00',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 0, 0.04)',
                      },
                      textTransform: 'none'
                    }}
                  >
                    Add Project
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  No portfolio items added yet. Showcase your work by adding projects, case studies, or samples.
                </Typography>
              </TabPanel>

              {/* Job Preferences Tab Panel */}
              <TabPanel value={tabValue} index={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Job Preferences</Typography>
                  <IconButton size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Job Types</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip label="Full-time" size="small" variant="outlined" />
                    <Chip label="Remote" size="small" variant="outlined" />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Preferred Locations</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip label="San Francisco, CA" size="small" variant="outlined" />
                    <Chip label="New York, NY" size="small" variant="outlined" />
                    <Chip label="Remote" size="small" variant="outlined" />
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Salary Expectations</Typography>
                  <Typography variant="body2">$120,000 - $150,000 per year</Typography>
                </Box>
                
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Industries</Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Chip label="Technology" size="small" variant="outlined" />
                    <Chip label="Finance" size="small" variant="outlined" />
                    <Chip label="Healthcare" size="small" variant="outlined" />
                  </Box>
                </Box>
              </TabPanel>
            </Paper>

            {/* Profile Suggestions */}
            <Paper sx={{ p: 3, borderRadius: 2, mt: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Profile Suggestions</Typography>
              </Box>
              <Box component="ul" sx={{ pl: 4, m: 0 }}>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  Add a professional photo to make your profile stand out
                </Typography>
                <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                  Complete a skills assessment to verify your expertise
                </Typography>
                <Typography component="li" variant="body2">
                  Add detailed descriptions to your work experiences
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
