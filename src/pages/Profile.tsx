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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

// Add interfaces for our data types
interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
  imageUrl?: string;
}

// Add JobPreferences interface
interface JobPreferences {
  jobTypes: string[];
  locations: string[];
  salaryRange: {
    min: number;
    max: number;
  };
  industries: string[];
}

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editAbout, setEditAbout] = useState(false);

  // New state for dialogs
  const [openExperienceDialog, setOpenExperienceDialog] = useState(false);
  const [openEducationDialog, setOpenEducationDialog] = useState(false);
  const [openCertificationDialog, setOpenCertificationDialog] = useState(false);
  const [openProjectDialog, setOpenProjectDialog] = useState(false);
  const [openProfileDialog, setOpenProfileDialog] = useState(false);

  // State for form data
  const [newExperience, setNewExperience] = useState<Experience>({
    company: '',
    role: '',
    period: '',
    location: '',
    type: '',
    description: '',
  });

  const [newEducation, setNewEducation] = useState<Education>({
    institution: '',
    degree: '',
    period: '',
  });

  const [newCertification, setNewCertification] = useState<Certification>({
    name: '',
    issuer: '',
    date: '',
    expiryDate: '',
    credentialUrl: '',
  });

  const [newProject, setNewProject] = useState<Project>({
    name: '',
    description: '',
    technologies: [],
    url: '',
    imageUrl: '',
  });

  // Add state for editing existing items
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [editingJobPreferences, setEditingJobPreferences] = useState(false);
  const [jobPreferences, setJobPreferences] = useState<JobPreferences>({
    jobTypes: ['Full-time', 'Remote'],
    locations: ['San Francisco, CA', 'New York, NY', 'Remote'],
    salaryRange: {
      min: 120000,
      max: 150000
    },
    industries: ['Technology', 'Finance', 'Healthcare']
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditAbout = () => {
    setEditAbout(!editAbout);
  };

  // Handlers for dialogs
  const handleOpenExperienceDialog = () => setOpenExperienceDialog(true);
  const handleCloseExperienceDialog = () => setOpenExperienceDialog(false);

  const handleOpenEducationDialog = () => setOpenEducationDialog(true);
  const handleCloseEducationDialog = () => setOpenEducationDialog(false);

  const handleOpenCertificationDialog = () => setOpenCertificationDialog(true);
  const handleCloseCertificationDialog = () => setOpenCertificationDialog(false);

  const handleOpenProjectDialog = () => setOpenProjectDialog(true);
  const handleCloseProjectDialog = () => setOpenProjectDialog(false);

  const handleCloseProfileDialog = () => setOpenProfileDialog(false);

  const handleAddCertification = () => {
    // Implement certification adding logic
    setOpenCertificationDialog(false);
  };

  const handleAddProject = () => {
    // Implement project adding logic
    setOpenProjectDialog(false);
  };

  const handleSaveProfile = () => {
    // Implement profile saving logic
    setOpenProfileDialog(false);
  };

  const handleEditProfile = () => {
    setOpenProfileDialog(true);
  };

  // Add handlers for editing existing items
  const handleEditExperience = (experience: Experience) => {
    setEditingExperience(experience);
    setNewExperience(experience);
    setOpenExperienceDialog(true);
  };

  const handleEditEducation = (education: Education) => {
    setEditingEducation(education);
    setNewEducation(education);
    setOpenEducationDialog(true);
  };

  const handleEditJobPreferences = () => {
    setEditingJobPreferences(true);
  };

  // Update save handlers to handle both new and edit cases
  const handleSaveExperience = () => {
    if (editingExperience) {
      // Update existing experience
      const index = user.experience.findIndex(exp => exp === editingExperience);
      if (index !== -1) {
        user.experience[index] = newExperience;
      }
      setEditingExperience(null);
    } else {
      // Add new experience
      user.experience.push(newExperience);
    }
    setOpenExperienceDialog(false);
    setNewExperience({
      company: '',
      role: '',
      period: '',
      location: '',
      type: '',
      description: '',
    });
  };

  const handleSaveEducation = () => {
    if (editingEducation) {
      const index = user.education.findIndex(edu => edu === editingEducation);
      if (index !== -1) {
        user.education[index] = newEducation;
      }
      setEditingEducation(null);
    } else {
      user.education.push(newEducation);
    }
    setOpenEducationDialog(false);
    setNewEducation({
      institution: '',
      degree: '',
      period: '',
    });
  };

  const handleSaveJobPreferences = () => {
    setJobPreferences({
      ...jobPreferences,
      // Add any updates from form data
    });
    setEditingJobPreferences(false);
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
    <Box sx={{ minHeight: '100vh', p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <PersonIcon sx={{ mr: 1 }} />
          <Typography variant="h5" component="h1">My Profile</Typography>
          </Box>
          
          {/* Edit Profile Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <Button
                  startIcon={<EditIcon />}
                  fullWidth
                  variant="contained"
                  onClick={handleEditProfile}
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
                  border: '1px solid #FFE2DB',
                  pb: 2,
                  boxShadow: 'none'
                }}
              >
                
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2, background: 'linear-gradient(to right, #FFF5EF, #FEE5DB)' }}>
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', px: 3 }}>
                    <Typography variant="h3" align="center" sx={{ fontWeight: 800, letterSpacing: '-0.05rem' }}>
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
                </Box>
              
                <Box sx={{ p: 3 }}>
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
                  <Box sx={{ display: 'flex', gap: 1, pt: 2, pb: 2 }}>
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
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
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
                  </Box>
                  <Button
                    startIcon={<DownloadIcon />}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 1, borderRadius: 2, textTransform: 'none', bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', fontWeight: 400, '&:hover': { bgcolor: '#e65c00' } }}
                  >
                    Download Resume
                  </Button>
                  <Button
                    startIcon={<UploadIcon />}
                    fullWidth
                    variant="outlined"
                    sx={{ borderRadius: 2, textTransform: 'none', bgcolor: '#F8FAFC', color: '#020817', border: '1px solid #E2E8F0', fontWeight: 400, '&:hover': { bgcolor: '#e65c00' } }}
                  >
                    Upload New Resume
                  </Button>
                </Box>
              </Paper>

              {/* Skills Section */}
              <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 'none', border: '1px solid #E2E8F0' }}>
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
            </Box>
        </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8} lg={9}>
            {/* About Me Section */}
            <Paper sx={{ p: 3, borderRadius: 2, mb: 3, boxShadow: 'none', border: '1px solid #E2E8F0' }}>
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
            <Paper sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #E2E8F0' }}>
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
                      onClick={handleOpenExperienceDialog}
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
                      <IconButton size="small" onClick={() => handleEditExperience(exp)}>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Education</Typography>
                    <Button 
                      startIcon={<AddIcon />} 
                      onClick={handleOpenEducationDialog}
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', p:3 }}>
                        <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{edu.degree}</Typography>
                        <Typography variant="body2" color="text.secondary">{edu.institution}</Typography>
                        <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
                      </Box>
                      <IconButton size="small" onClick={() => handleEditEducation(edu)}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    {index < user.education.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
                    </Box>
                  ))}
              </TabPanel>

              {/* Certifications Tab Panel */}
              <TabPanel value={tabValue} index={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Certifications</Typography>
                    <Button 
                      startIcon={<AddIcon />} 
                      onClick={handleOpenCertificationDialog}
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
                          <Typography variant="body2" color="text.secondary" sx={{ p: 3 }}>
                  No certifications added yet. Add your professional certifications to showcase your expertise.
                          </Typography>
              </TabPanel>

              {/* Portfolio Tab Panel */}
              <TabPanel value={tabValue} index={3}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Portfolio</Typography>
                    <Button 
                      startIcon={<AddIcon />} 
                      onClick={handleOpenProjectDialog}
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
                <Typography variant="body2" color="text.secondary" sx={{ p: 3 }}>
                  No portfolio items added yet. Showcase your work by adding projects, case studies, or samples.
                </Typography>
              </TabPanel>

              {/* Job Preferences Tab Panel */}
              <TabPanel value={tabValue} index={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 2, pr: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>Job Preferences</Typography>
                  <IconButton size="small" onClick={handleEditJobPreferences}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Box>
                
                {editingJobPreferences ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3 }}>
                    <Box sx={{ p: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Job Types</Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                          <Chip
                            key={type}
                            label={type}
                            onClick={() => {
                              const newTypes = jobPreferences.jobTypes.includes(type)
                                ? jobPreferences.jobTypes.filter(t => t !== type)
                                : [...jobPreferences.jobTypes, type];
                              setJobPreferences({ ...jobPreferences, jobTypes: newTypes });
                            }}
                            color={jobPreferences.jobTypes.includes(type) ? "primary" : "default"}
                            sx={{ 
                              bgcolor: jobPreferences.jobTypes.includes(type) ? '#FFE2DB' : 'transparent',
                              color: jobPreferences.jobTypes.includes(type) ? '#FF6B00' : 'inherit',
                              '&:hover': {
                                bgcolor: jobPreferences.jobTypes.includes(type) ? '#FFD4C4' : '#f5f5f5'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Preferred Locations</Typography>
                      <TextField
                        fullWidth
                        placeholder="Add locations (comma-separated)"
                        value={jobPreferences.locations.join(', ')}
                        onChange={(e) => {
                          const locations = e.target.value.split(',').map(loc => loc.trim()).filter(Boolean);
                          setJobPreferences({ ...jobPreferences, locations });
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Salary Range</Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                          label="Minimum"
                          type="number"
                          value={jobPreferences.salaryRange.min}
                          onChange={(e) => {
                            setJobPreferences({
                              ...jobPreferences,
                              salaryRange: { ...jobPreferences.salaryRange, min: Number(e.target.value) }
                            });
                          }}
                        />
                        <TextField
                          label="Maximum"
                          type="number"
                          value={jobPreferences.salaryRange.max}
                          onChange={(e) => {
                            setJobPreferences({
                              ...jobPreferences,
                              salaryRange: { ...jobPreferences.salaryRange, max: Number(e.target.value) }
                            });
                          }}
                        />
                      </Box>
                    </Box>

                    <Box sx={{ p: 3 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Industries</Typography>
                      <TextField
                        fullWidth
                        placeholder="Add industries (comma-separated)"
                        value={jobPreferences.industries.join(', ')}
                        onChange={(e) => {
                          const industries = e.target.value.split(',').map(ind => ind.trim()).filter(Boolean);
                          setJobPreferences({ ...jobPreferences, industries });
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                      <Button onClick={() => setEditingJobPreferences(false)}>Cancel</Button>
                      <Button
                        variant="contained"
                        onClick={handleSaveJobPreferences}
                        sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
                      >
                        Save Changes
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Box sx={{ p: 3 }}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Job Types</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {jobPreferences.jobTypes.map((type) => (
                            <Chip key={type} label={type} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Preferred Locations</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {jobPreferences.locations.map((location) => (
                            <Chip key={location} label={location} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Salary Expectations</Typography>
                        <Typography variant="body2">
                          ${jobPreferences.salaryRange.min.toLocaleString()} - ${jobPreferences.salaryRange.max.toLocaleString()} per year
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>Industries</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {jobPreferences.industries.map((industry) => (
                            <Chip key={industry} label={industry} size="small" variant="outlined" />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </>
                )}
              </TabPanel>
            </Paper>

            {/* Profile Suggestions */}
            <Paper sx={{ p: 3, borderRadius: 2, mt: 3, boxShadow: 'none', border: '1px solid #E2E8F0' }}>
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

      {/* Add Experience Dialog */}
      <Dialog open={openExperienceDialog} onClose={handleCloseExperienceDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Experience</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Company"
              fullWidth
              value={newExperience.company}
              onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
            />
            <TextField
              label="Role"
              fullWidth
              value={newExperience.role}
              onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
            />
            <TextField
              label="Period"
              fullWidth
              value={newExperience.period}
              onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
            />
            <TextField
              label="Location"
              fullWidth
              value={newExperience.location}
              onChange={(e) => setNewExperience({ ...newExperience, location: e.target.value })}
            />
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={newExperience.type}
                label="Type"
                onChange={(e) => setNewExperience({ ...newExperience, type: e.target.value })}
              >
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newExperience.description}
              onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseExperienceDialog}>Cancel</Button>
          <Button 
            onClick={handleSaveExperience} 
            variant="contained" 
            sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
          >
            {editingExperience ? 'Save Changes' : 'Add Experience'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Education Dialog */}
      <Dialog open={openEducationDialog} onClose={handleCloseEducationDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Institution"
              fullWidth
              value={newEducation.institution}
              onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
            />
            <TextField
              label="Degree"
              fullWidth
              value={newEducation.degree}
              onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
            />
            <TextField
              label="Period"
              fullWidth
              value={newEducation.period}
              onChange={(e) => setNewEducation({ ...newEducation, period: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEducationDialog}>Cancel</Button>
          <Button onClick={handleSaveEducation} variant="contained" sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}>
            Add Education
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Certification Dialog */}
      <Dialog open={openCertificationDialog} onClose={handleCloseCertificationDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Certification</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Certification Name"
              fullWidth
              value={newCertification.name}
              onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
            />
            <TextField
              label="Issuing Organization"
              fullWidth
              value={newCertification.issuer}
              onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
            />
            <TextField
              label="Issue Date"
              fullWidth
              type="date"
              value={newCertification.date}
              onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Expiry Date (Optional)"
              fullWidth
              type="date"
              value={newCertification.expiryDate}
              onChange={(e) => setNewCertification({ ...newCertification, expiryDate: e.target.value })}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Credential URL (Optional)"
              fullWidth
              value={newCertification.credentialUrl}
              onChange={(e) => setNewCertification({ ...newCertification, credentialUrl: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCertificationDialog}>Cancel</Button>
          <Button onClick={handleAddCertification} variant="contained" sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}>
            Add Certification
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Project Dialog */}
      <Dialog open={openProjectDialog} onClose={handleCloseProjectDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Add Project</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Project Name"
              fullWidth
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <TextField
              label="Technologies (comma-separated)"
              fullWidth
              value={newProject.technologies.join(', ')}
              onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value.split(',').map(tech => tech.trim()) })}
            />
            <TextField
              label="Project URL (Optional)"
              fullWidth
              value={newProject.url}
              onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
            />
            <TextField
              label="Image URL (Optional)"
              fullWidth
              value={newProject.imageUrl}
              onChange={(e) => setNewProject({ ...newProject, imageUrl: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProjectDialog}>Cancel</Button>
          <Button onClick={handleAddProject} variant="contained" sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}>
            Add Project
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog open={openProfileDialog} onClose={handleCloseProfileDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label="Full Name"
              fullWidth
              defaultValue={user.name}
            />
            <TextField
              label="Title"
              fullWidth
              defaultValue={user.title}
            />
            <TextField
              label="Location"
              fullWidth
              defaultValue={user.location}
            />
            <TextField
              label="Email"
              fullWidth
              defaultValue={user.email}
            />
            <TextField
              label="Phone"
              fullWidth
              defaultValue={user.phone}
            />
            <TextField
              label="Website"
              fullWidth
              defaultValue={user.website}
            />
            <TextField
              label="LinkedIn URL"
              fullWidth
              defaultValue={user.socialLinks.linkedin}
            />
            <TextField
              label="GitHub URL"
              fullWidth
              defaultValue={user.socialLinks.github}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseProfileDialog}>Cancel</Button>
          <Button onClick={handleSaveProfile} variant="contained" sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profile; 
