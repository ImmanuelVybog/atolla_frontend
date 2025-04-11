import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ArticleIcon from '@mui/icons-material/Article';
import QuizIcon from '@mui/icons-material/Quiz';
import TimelineIcon from '@mui/icons-material/Timeline';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  progress: number;
  topics: string[];
  image: string;
}

interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  category: 'Technical' | 'Behavioral';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isBookmarked: boolean;
}

const JobPreparation = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>([]);

  const industries = [
    'Software Development',
    'Data Science',
    'Product Management',
    'UX/UI Design',
    'Digital Marketing',
    'Business Analysis',
    'Cloud Computing',
  ];

  const learningPaths: LearningPath[] = [
    {
      id: '1',
      title: 'Software Development Career Path',
      description: 'Master the essential skills and concepts needed for a successful career in software development',
      duration: '12 weeks',
      progress: 65,
      topics: ['JavaScript', 'React', 'Node.js', 'System Design', 'Data Structures'],
      image: '/path-images/software-dev.jpg'
    },
    {
      id: '2',
      title: 'Data Science Fundamentals',
      description: 'Learn the core concepts and tools used in modern data science',
      duration: '10 weeks',
      progress: 30,
      topics: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL'],
      image: '/path-images/data-science.jpg'
    },
    {
      id: '3',
      title: 'UX/UI Design Essentials',
      description: 'Learn the principles of user experience and interface design',
      duration: '8 weeks',
      progress: 0,
      topics: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Figma'],
      image: '/path-images/ux-design.jpg'
    },
    {
      id: '4',
      title: 'Product Management Fundamentals',
      description: 'Master the skills needed to become a successful product manager',
      duration: '10 weeks',
      progress: 0,
      topics: ['Product Strategy', 'User Stories', 'Agile', 'Analytics', 'Roadmapping'],
      image: '/path-images/product-management.jpg'
    }
  ];

  const interviewQuestions: InterviewQuestion[] = [
    {
      id: '1',
      question: 'What are your greatest strengths and how do they align with this role?',
      answer: 'Focus on relevant skills and provide specific examples of how you have used them successfully.',
      category: 'Behavioral',
      difficulty: 'Medium',
      isBookmarked: false
    },
    {
      id: '2',
      question: 'Explain the concept of RESTful APIs and their principles.',
      answer: 'REST is an architectural style for designing networked applications. It emphasizes scalability, statelessness, and standardized interfaces.',
      category: 'Technical',
      difficulty: 'Hard',
      isBookmarked: false
    },
    {
      id: '3',
      question: 'Tell me about a time you had to deal with a difficult team member.',
      answer: 'When answering, focus on the situation, your actions, and the positive outcome. Emphasize communication and problem-solving skills.',
      category: 'Behavioral',
      difficulty: 'Medium',
      isBookmarked: false
    },
    {
      id: '4',
      question: 'What is dependency injection and why is it important?',
      answer: 'Dependency injection is a design pattern where dependencies are passed into an object rather than created inside. It promotes loose coupling and testability.',
      category: 'Technical',
      difficulty: 'Hard',
      isBookmarked: false
    }
  ];

  const handleBookmarkQuestion = (questionId: string) => {
    setBookmarkedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: '#FF6B00', 
        color: 'white', 
        py: 6, 
        mb: 4,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: '40%', 
          height: '100%',
          opacity: 0.1,
          backgroundImage: 'url("/path-images/pattern.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'cover'
        }} />
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 3, position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Prepare for Your Dream Job
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400 }}>
            Master the skills, ace the interviews, and launch your career
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for skills, interview questions, or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              maxWidth: 600,
              bgcolor: 'white',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ mx: 'auto', px: 3 }}>
        {/* Industry Selection */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Choose Your Industry
          </Typography>
          <Grid container spacing={2}>
            {industries.map((industry) => (
              <Grid item key={industry}>
                <Chip
                  label={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  sx={{
                    bgcolor: selectedIndustry === industry ? '#FFE2DB' : 'transparent',
                    color: selectedIndustry === industry ? '#FF6B00' : 'inherit',
                    border: '1px solid',
                    borderColor: selectedIndustry === industry ? '#FF6B00' : '#e0e0e0',
                    '&:hover': {
                      bgcolor: '#FFE2DB',
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Learning Paths */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Learning Paths
          </Typography>
          <Grid container spacing={3}>
            {learningPaths.map((path) => (
              <Grid item xs={12} md={6} key={path.id}>
                <Card sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={path.image}
                    alt={path.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {path.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {path.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Progress: {path.progress}%
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={path.progress} 
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: 'rgba(255, 107, 0, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#FF6B00',
                            borderRadius: 4,
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {path.topics.map((topic) => (
                        <Chip
                          key={topic}
                          label={topic}
                          size="small"
                          sx={{
                            bgcolor: '#EDE9FE',
                            color: '#7C3AED',
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Duration: {path.duration}
                      </Typography>
                      <Button
                        variant="contained"
                        startIcon={<PlayCircleIcon />}
                        sx={{
                          bgcolor: '#FF6B00',
                          '&:hover': {
                            bgcolor: '#e65c00',
                          },
                        }}
                      >
                        Continue
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Interview Preparation */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Interview Preparation
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              {interviewQuestions.map((question) => (
                <Accordion key={question.id} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
                      <Typography sx={{ fontWeight: 500 }}>{question.question}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip 
                          label={question.difficulty} 
                          size="small"
                          sx={{
                            bgcolor: question.difficulty === 'Easy' ? '#E8F5E9' : 
                                   question.difficulty === 'Medium' ? '#FFF3E0' : '#FFEBEE',
                            color: question.difficulty === 'Easy' ? '#2E7D32' :
                                  question.difficulty === 'Medium' ? '#E65100' : '#C62828',
                          }}
                        />
                        <IconButton 
                          size="small" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookmarkQuestion(question.id);
                          }}
                        >
                          {bookmarkedQuestions.includes(question.id) ? (
                            <BookmarkIcon sx={{ color: '#FF6B00' }} />
                          ) : (
                            <BookmarkBorderIcon />
                          )}
                        </IconButton>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" color="text.secondary">
                      {question.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Interview Resources
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <ArticleIcon sx={{ color: '#FF6B00' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Resume Templates" 
                      secondary="Customizable templates for your industry"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <QuizIcon sx={{ color: '#FF6B00' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Practice Tests" 
                      secondary="Industry-specific assessment tests"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TimelineIcon sx={{ color: '#FF6B00' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Career Roadmap" 
                      secondary="Plan your career progression"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Quick Tips Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Quick Tips for Success
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40, color: '#FF6B00', mr: 2 }} />
                    <Typography variant="h6">Continuous Learning</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Stay updated with the latest industry trends and technologies through our curated learning resources.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ fontSize: 40, color: '#FF6B00', mr: 2 }} />
                    <Typography variant="h6">Practice Projects</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Build your portfolio with hands-on projects that demonstrate your skills to potential employers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TipsAndUpdatesIcon sx={{ fontSize: 40, color: '#FF6B00', mr: 2 }} />
                    <Typography variant="h6">Interview Skills</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Master both technical and behavioral interviews with our comprehensive preparation guides.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default JobPreparation; 