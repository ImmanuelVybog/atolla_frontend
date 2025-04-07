import { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Paper,
  Tabs,
  Tab,
  Grid,
  Divider,
  Chip,
  TextField,
  IconButton,
  Rating,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  LinearProgress,
  Card,
  CardContent
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Mock data
  const user = {
    name: 'Alexandra Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    about: 'Experienced frontend developer with 8+ years of professional experience creating responsive, user-friendly web applications. Specialized in React, TypeScript, and modern CSS frameworks. Passionate about user experience and accessibility.',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'GraphQL', level: 70 },
      { name: 'Next.js', level: 85 },
    ],
    experience: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Senior Frontend Developer',
        period: 'Jan 2020 - Present',
        description: 'Leading frontend development for enterprise SaaS applications, managing a team of 5 developers, and implementing design systems.',
      },
      {
        company: 'WebMakers',
        role: 'Frontend Developer',
        period: 'Mar 2017 - Dec 2019',
        description: 'Developed responsive web applications using React and collaborated with UX designers to implement user-friendly interfaces.',
      },
      {
        company: 'Digital Agency',
        role: 'Junior Developer',
        period: 'Jun 2015 - Feb 2017',
        description: 'Built websites and web applications for various clients using HTML, CSS, and JavaScript.',
      },
    ],
    education: [
      {
        institution: 'University of California, Berkeley',
        degree: 'B.S. Computer Science',
        period: '2011 - 2015',
      },
      {
        institution: 'Stanford University',
        degree: 'Frontend Web Development Certification',
        period: '2016',
      },
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Developed a full-featured e-commerce platform with React, Node.js, and MongoDB.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      },
      {
        name: 'Task Management App',
        description: 'Created a drag-and-drop task management application with real-time updates.',
        technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      },
      {
        name: 'Social Media Dashboard',
        description: 'Built an analytics dashboard for social media performance tracking.',
        technologies: ['Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS'],
      },
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexandra-johnson',
      github: 'https://github.com/alexjohnson',
      website: 'https://alexandrajohnson.dev',
    },
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>👤</Box>
        <Typography variant="h5" component="h1">My Profile</Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Manage your personal information and profile settings
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, borderRadius: 3, position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
              <Button
                startIcon={<EditIcon />}
                variant="outlined"
                onClick={toggleEditMode}
                sx={{
                  borderRadius: '100px',
                  textTransform: 'none',
                  borderColor: editMode ? '#FF6B00' : undefined,
                  color: editMode ? '#FF6B00' : undefined,
                }}
              >
                {editMode ? 'Save Profile' : 'Edit Profile'}
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Avatar
                src="/profile-photo.jpg"
                alt={user.name}
                sx={{
                  width: 120,
                  height: 120,
                  border: '4px solid #fff',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              />
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {editMode ? (
                      <TextField
                        variant="standard"
                        defaultValue={user.name}
                        fullWidth
                        sx={{ fontSize: '2rem' }}
                      />
                    ) : (
                      user.name
                    )}
                  </Typography>
                  <VerifiedIcon sx={{ color: '#1976d2' }} />
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                  {editMode ? (
                    <TextField
                      variant="standard"
                      defaultValue={user.title}
                      fullWidth
                    />
                  ) : (
                    user.title
                  )}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocationOnIcon fontSize="small" sx={{ color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {user.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <EmailIcon fontSize="small" sx={{ color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <PhoneIcon fontSize="small" sx={{ color: '#666' }} />
                    <Typography variant="body2" color="text.secondary">
                      {user.phone}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton href={user.socialLinks.linkedin} target="_blank" aria-label="LinkedIn" sx={{ color: '#0077B5' }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href={user.socialLinks.github} target="_blank" aria-label="GitHub" sx={{ color: '#333' }}>
                    <GitHubIcon />
                  </IconButton>
                  <IconButton href={user.socialLinks.website} target="_blank" aria-label="Website" sx={{ color: '#FF6B00' }}>
                    <LanguageIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Profile Content */}
        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs 
                value={tabValue} 
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    minWidth: 120,
                  },
                  '& .Mui-selected': {
                    color: '#FF6B00',
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#FF6B00',
                  }
                }}
              >
                <Tab label="About" id="profile-tab-0" aria-controls="profile-tabpanel-0" />
                <Tab label="Experience" id="profile-tab-1" aria-controls="profile-tabpanel-1" />
                <Tab label="Education" id="profile-tab-2" aria-controls="profile-tabpanel-2" />
                <Tab label="Skills" id="profile-tab-3" aria-controls="profile-tabpanel-3" />
                <Tab label="Projects" id="profile-tab-4" aria-controls="profile-tabpanel-4" />
              </Tabs>
            </Box>

            <Box sx={{ p: 3 }}>
              <TabPanel value={tabValue} index={0}>
                <Typography variant="h6" gutterBottom>About Me</Typography>
                {editMode ? (
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue={user.about}
                    variant="outlined"
                  />
                ) : (
                  <Typography variant="body1" paragraph>
                    {user.about}
                  </Typography>
                )}
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Work Experience</Typography>
                  {editMode && (
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
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {user.experience.map((exp, index) => (
                    <Box key={index} sx={{ position: 'relative' }}>
                      {editMode && (
                        <IconButton 
                          size="small" 
                          sx={{ 
                            position: 'absolute', 
                            top: 0, 
                            right: 0,
                            color: '#666'
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      )}
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#f5f5f5' }}>
                          <WorkIcon sx={{ color: '#666' }} />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">{exp.role}</Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {exp.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {exp.period}
                          </Typography>
                          <Typography variant="body2">
                            {exp.description}
                          </Typography>
                        </Box>
                      </Box>
                      {index < user.experience.length - 1 && <Divider sx={{ mt: 3 }} />}
                    </Box>
                  ))}
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Education</Typography>
                  {editMode && (
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
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {user.education.map((edu, index) => (
                    <Box key={index} sx={{ position: 'relative' }}>
                      {editMode && (
                        <IconButton 
                          size="small" 
                          sx={{ 
                            position: 'absolute', 
                            top: 0, 
                            right: 0,
                            color: '#666'
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      )}
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#f5f5f5' }}>
                          <SchoolIcon sx={{ color: '#666' }} />
                        </Avatar>
                        <Box>
                          <Typography variant="h6">{edu.degree}</Typography>
                          <Typography variant="subtitle1" color="text.secondary">
                            {edu.institution}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {edu.period}
                          </Typography>
                        </Box>
                      </Box>
                      {index < user.education.length - 1 && <Divider sx={{ mt: 3 }} />}
                    </Box>
                  ))}
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={3}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Skills & Expertise</Typography>
                  {editMode && (
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
                      Add Skill
                    </Button>
                  )}
                </Box>
                
                <Grid container spacing={2}>
                  {user.skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="body1" fontWeight={500}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={skill.level} 
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(255, 107, 0, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: '#FF6B00',
                              borderRadius: 4
                            }
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel value={tabValue} index={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">Projects</Typography>
                  {editMode && (
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
                  )}
                </Box>
                
                <Grid container spacing={3}>
                  {user.projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card sx={{ height: '100%', borderRadius: 2, '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.1)' } }}>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {project.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {project.description}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {project.technologies.map((tech, i) => (
                              <Chip 
                                key={i} 
                                label={tech} 
                                size="small" 
                                sx={{ 
                                  bgcolor: 'rgba(255, 107, 0, 0.1)',
                                  color: '#FF6B00',
                                  fontSize: '0.75rem'
                                }}
                              />
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile; 