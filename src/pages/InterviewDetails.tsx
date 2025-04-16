import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Tab,
  Tabs,
  CircularProgress,
  Link,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideocamIcon from '@mui/icons-material/Videocam';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LaunchIcon from '@mui/icons-material/Launch';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmptyState from '../components/EmptyStates';
import Images from '../assets';

// Interface for interview
interface Interview {
  id: string;
  company: string;
  position: string;
  type: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  isVirtual: boolean;
  meetingLink?: string;
  interviewers: Interviewer[];
  rounds: InterviewRound[];
  jobDescription: string;
  preparationMaterials: PreparationMaterial[];
  preparation: {
    total: number;
    completed: number;
  };
}

interface Interviewer {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

interface InterviewRound {
  id: string;
  name: string;
  description: string;
  duration: string;
  status: 'completed' | 'upcoming' | 'pending';
}

interface PreparationMaterial {
  id: string;
  title: string;
  type: 'document' | 'video' | 'article' | 'quiz';
  url: string;
  completed: boolean;
}

const InterviewDetails = () => {
  const { interviewId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [interview, setInterview] = useState<Interview | null>(null);
  const [tabValue, setTabValue] = useState(0);
  
  // Fetch interview details
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock interview data
      const mockInterview: Interview = {
        id: interviewId || 'interview-1',
        company: 'Google',
        position: 'Senior Frontend Developer',
        type: 'Technical Interview',
        date: 'April 26, 2023',
        time: '11:00 AM - 12:30 PM',
        duration: '1.5 hours',
        location: 'Google Office, Toronto',
        isVirtual: true,
        meetingLink: 'https://meet.google.com/abc-defg-hij',
        interviewers: [
          {
            id: 'interviewer-1',
            name: 'Sarah Johnson',
            role: 'Engineering Manager',
            avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            id: 'interviewer-2',
            name: 'Michael Chen',
            role: 'Senior Frontend Engineer',
            avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
          }
        ],
        rounds: [
          {
            id: 'round-1',
            name: 'Introduction & Background',
            description: 'Brief introduction and discussion about your experience',
            duration: '15 minutes',
            status: 'upcoming'
          },
          {
            id: 'round-2',
            name: 'Technical Assessment',
            description: 'Coding challenges and technical questions related to frontend development',
            duration: '45 minutes',
            status: 'upcoming'
          },
          {
            id: 'round-3',
            name: 'System Design Discussion',
            description: 'Discussion about frontend architecture and design patterns',
            duration: '20 minutes',
            status: 'upcoming'
          },
          {
            id: 'round-4',
            name: 'Q&A Session',
            description: 'Opportunity to ask questions about the role and company',
            duration: '10 minutes',
            status: 'upcoming'
          }
        ],
        jobDescription: `
          <p>We are looking for an experienced Frontend Developer who is proficient with React.js and has a strong understanding of web technologies.</p>
          
          <p>Responsibilities:</p>
          <ul>
            <li>Develop new user-facing features using React.js</li>
            <li>Build reusable components and libraries for future use</li>
            <li>Translate designs and wireframes into high-quality code</li>
            <li>Optimize components for maximum performance</li>
          </ul>
          
          <p>Requirements:</p>
          <ul>
            <li>Strong proficiency in JavaScript and TypeScript</li>
            <li>Thorough understanding of React.js and its core principles</li>
            <li>Experience with popular React.js workflows (Redux, Hooks, etc.)</li>
            <li>Familiarity with RESTful APIs and modern frontend build pipelines</li>
          </ul>
        `,
        preparationMaterials: [
          {
            id: 'prep-1',
            title: 'Frontend Developer Interview Questions',
            type: 'document',
            url: 'https://example.com/frontend-interview-questions',
            completed: true
          },
          {
            id: 'prep-2',
            title: 'React.js Coding Challenges',
            type: 'article',
            url: 'https://example.com/react-coding-challenges',
            completed: true
          },
          {
            id: 'prep-3',
            title: 'System Design for Frontend Applications',
            type: 'video',
            url: 'https://example.com/frontend-system-design',
            completed: false
          },
          {
            id: 'prep-4',
            title: 'Practice Frontend Quiz',
            type: 'quiz',
            url: 'https://example.com/frontend-quiz',
            completed: false
          }
        ],
        preparation: {
          total: 4,
          completed: 2
        }
      };
      
      setInterview(mockInterview);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [interviewId]);
  
  // Handle tab change
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // Handle preparation item toggle
  const handleTogglePreparationItem = (itemId: string) => {
    if (!interview) return;
    
    const updatedMaterials = interview.preparationMaterials.map(material => 
      material.id === itemId ? { ...material, completed: !material.completed } : material
    );
    
    const completedCount = updatedMaterials.filter(material => material.completed).length;
    
    setInterview({
      ...interview,
      preparationMaterials: updatedMaterials,
      preparation: {
        total: interview.preparation.total,
        completed: completedCount
      }
    });
  };
  
  // Handle add note
  const handleAddNote = () => {
    // In a real app, this would open a dialog to add notes
    console.log('Add note');
  };
  
  // Handle reschedule interview
  const handleReschedule = () => {
    // In a real app, this would navigate to a reschedule page or open a dialog
    console.log('Reschedule interview');
  };
  
  // Handle join meeting
  const handleJoinMeeting = () => {
    if (interview?.meetingLink) {
      window.open(interview.meetingLink, '_blank');
    }
  };
  
  // Handle go back
  const handleGoBack = () => {
    navigate(-1);
  };
  
  // Calculate preparation progress
  const getPreparationProgress = () => {
    if (!interview) return 0;
    return Math.round((interview.preparation.completed / interview.preparation.total) * 100);
  };
  
  // Get company logo
  const getCompanyLogo = (companyName: string) => {
    if (!companyName) return '';
    
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
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress sx={{ color: '#3361EA' }} />
      </Box>
    );
  }
  
  if (!interview) {
    return <EmptyState type="interviews" title="Interview Not Found" description="The interview you're looking for doesn't exist or has been removed." />;
  }
  
  return (
    <Box sx={{ p: 3 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={handleGoBack}
        sx={{ mb: 3 }}
      >
        Back to Interviews
      </Button>
      
      {/* Header Section */}
      <Paper 
        sx={{ 
          p: 3, 
          borderRadius: 2, 
          mb: 3, 
          boxShadow: 'none', 
          border: '1px solid #eee',
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              {getCompanyLogo(interview.company) ? (
                <Box
                  component="img"
                  src={getCompanyLogo(interview.company)}
                  alt={interview.company}
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: 'contain',
                    borderRadius: 1
                  }}
                />
              ) : (
                <Avatar sx={{ width: 50, height: 50, bgcolor: '#E7EDFF' }}>
                  {interview.company.charAt(0)}
                </Avatar>
              )}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {interview.type}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {interview.company} • {interview.position}
                </Typography>
              </Box>
            </Box>
            
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon sx={{ color: '#3361EA' }} />
                  <Typography variant="body2">
                    {interview.date}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTimeIcon sx={{ color: '#3361EA' }} />
                  <Typography variant="body2">
                    {interview.time} ({interview.duration})
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {interview.isVirtual ? (
                    <VideocamIcon sx={{ color: '#3361EA' }} />
                  ) : (
                    <LocationOnIcon sx={{ color: '#3361EA' }} />
                  )}
                  <Typography variant="body2">
                    {interview.isVirtual ? 'Virtual Interview' : interview.location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PeopleIcon sx={{ color: '#3361EA' }} />
                  <Typography variant="body2">
                    {interview.interviewers.length} Interviewer{interview.interviewers.length > 1 ? 's' : ''}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              {/*{interview.isVirtual && interview.meetingLink && (
                <Button
                  variant="contained"
                  startIcon={<VideocamIcon />}
                  fullWidth
                  onClick={handleJoinMeeting}
                  sx={{ 
                    bgcolor: '#3361EA', 
                    '&:hover': { bgcolor: '#2D4ECC' },
                    textTransform: 'none',
                    py: 1
                  }}
                >
                  Join Meeting
                </Button>
              )}*/}
              {/*<Button
                variant="outlined"
                onClick={handleReschedule}
                fullWidth
                sx={{ 
                  borderColor: '#3361EA', 
                  color: '#3361EA', 
                  '&:hover': { borderColor: '#2D4ECC', bgcolor: '#F8FAFF' },
                  textTransform: 'none',
                  py: 1
                }}
              >
                Reschedule
              </Button>*/}
            </Box>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Tabs Section */}
      <Paper sx={{ borderRadius: 2, overflow: 'hidden', mb: 3, boxShadow: 'none', border: '1px solid #eee' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            sx={{ 
              '& .MuiTabs-indicator': { backgroundColor: '#3361EA' },
              '& .Mui-selected': { color: '#3361EA' }
            }}
          >
            <Tab label="Details" />
            <Tab label="Preparation" />
            <Tab label="Job Description" />
          </Tabs>
        </Box>
        
        <Box sx={{ p: 3 }}>
          {/* Details Tab */}
          {tabValue === 0 && (
            <Grid container spacing={3}>
              
              
              {/* Interviewers */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Interviewers
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                  {interview.interviewers.map((interviewer) => (
                    <Box key={interviewer.id} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2, mb: 2 }}>
                      <Avatar
                        src={interviewer.avatarUrl}
                        alt={interviewer.name}
                        sx={{ width: 48, height: 48 }}
                      >
                        {interviewer.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {interviewer.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {interviewer.role}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                {/* Location Details */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {interview.isVirtual ? 'Meeting Details' : 'Location Details'}
                </Typography>
                
                {interview.isVirtual ? (
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <VideocamIcon sx={{ color: '#3361EA' }} />
                      <Typography variant="body2">
                        Virtual Interview via {interview.meetingLink?.includes('google') ? 'Google Meet' : 'Zoom'}
                      </Typography>
                    </Box>
                    {interview.meetingLink && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PublicIcon sx={{ color: '#3361EA' }} />
                        <Link 
                          href={interview.meetingLink} 
                          target="_blank" 
                          rel="noopener"
                          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                          Meeting Link
                          <OpenInNewIcon sx={{ fontSize: 14 }} />
                        </Link>
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationOnIcon sx={{ color: '#3361EA' }} />
                      <Typography variant="body2">
                        {interview.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PublicIcon sx={{ color: '#3361EA' }} />
                      <Link 
                        href={`https://maps.google.com/?q=${encodeURIComponent(interview.location)}`} 
                        target="_blank" 
                        rel="noopener"
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        View on Maps
                        <OpenInNewIcon sx={{ fontSize: 14 }} />
                      </Link>
                    </Box>
                  </Box>
                )}
                
                <Box sx={{ mt: 3 }}>
                  <Button
                    startIcon={<AddIcon />}
                    onClick={handleAddNote}
                    sx={{ textTransform: 'none' }}
                  >
                    Add Notes
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
          
          {/* Preparation Tab */}
          {tabValue === 1 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Preparation Materials
                  </Typography>
                  <Chip 
                    label={`${interview.preparation.completed}/${interview.preparation.total} Completed`} 
                    color="primary"
                    sx={{ 
                      bgcolor: getPreparationProgress() === 100 ? '#4CAF50' : '#3361EA', 
                      color: 'white' 
                    }}
                  />
                </Box>
                
                <List>
                  {interview.preparationMaterials.map((material) => (
                    <ListItem 
                      key={material.id}
                      disablePadding
                      secondaryAction={
                        <IconButton 
                          edge="end" 
                          onClick={() => window.open(material.url, '_blank')}
                        >
                          <LaunchIcon />
                        </IconButton>
                      }
                    >
                      <ListItemButton onClick={() => handleTogglePreparationItem(material.id)}>
                        <ListItemIcon>
                          {material.completed ? (
                            <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                          ) : (
                            <RadioButtonUncheckedIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText 
                          primary={material.title} 
                          secondary={
                            material.type.charAt(0).toUpperCase() + material.type.slice(1)
                          } 
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Suggested Topics
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Technical
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {['React.js', 'JavaScript', 'TypeScript', 'CSS', 'Frontend Architecture'].map((topic) => (
                    <Chip 
                      key={topic} 
                      label={topic} 
                      size="small" 
                      sx={{ bgcolor: '#E7EDFF' }} 
                    />
                  ))}
                </Box>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Behavioral
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'].map((topic) => (
                    <Chip 
                      key={topic} 
                      label={topic} 
                      size="small" 
                      sx={{ bgcolor: '#F0FFF4' }} 
                    />
                  ))}
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/job-preparation')}
                  sx={{ 
                    mt: 2, 
                    bgcolor: '#3361EA', 
                    '&:hover': { bgcolor: '#2D4ECC' },
                    textTransform: 'none'
                  }}
                >
                  Start Preparation
                </Button>
              </Grid>
            </Grid>
          )}
          
          {/* Job Description Tab */}
          {tabValue === 2 && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Job Description
                  </Typography>
                </Box>
                
                <Box 
                  dangerouslySetInnerHTML={{ __html: interview.jobDescription }} 
                  sx={{ 
                    '& p': { mb: 2 },
                    '& ul': { pl: 3, mb: 2 },
                    '& li': { mb: 1 }
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Company Information
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  {getCompanyLogo(interview.company) ? (
                    <Box
                      component="img"
                      src={getCompanyLogo(interview.company)}
                      alt={interview.company}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: 'contain',
                        borderRadius: 1
                      }}
                    />
                  ) : (
                    <Avatar sx={{ width: 80, height: 80, bgcolor: '#E7EDFF' }}>
                      {interview.company.charAt(0)}
                    </Avatar>
                  )}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {interview.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Technology
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Company Size
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  10,000+ employees
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Headquarters
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Mountain View, California
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                  Founded
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  1998
                </Typography>
                
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<WorkIcon />}
                  onClick={() => window.open(`https://${interview.company.toLowerCase()}.com`, '_blank')}
                  sx={{ 
                    mt: 2, 
                    borderColor: '#3361EA', 
                    color: '#3361EA',
                    '&:hover': { borderColor: '#2D4ECC', bgcolor: '#F8FAFF' },
                    textTransform: 'none',
                    mb: 2
                  }}
                >
                  Visit Company Website
                </Button>
                
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<SchoolIcon />}
                  onClick={() => window.open(`https://linkedin.com/company/${interview.company.toLowerCase()}`, '_blank')}
                  sx={{ 
                    borderColor: '#3361EA', 
                    color: '#3361EA',
                    '&:hover': { borderColor: '#2D4ECC', bgcolor: '#F8FAFF' },
                    textTransform: 'none'
                  }}
                >
                  View on LinkedIn
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default InterviewDetails; 