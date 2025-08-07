import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
  Avatar,
  Badge,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ThemedPageContainer, ThemedBorderedPaper, ThemedChip } from '../components/styled/PageComponents';
import { FilterSegmentContainer, StyledTextField, ActionButton } from '../components/styled/FormComponents';
import { styled } from '@mui/material/styles';

// Create FilterSegment component since it's not properly imported
interface FilterSegmentProps {
  selected?: boolean;
  label: string;
  onClick: () => void;
}

const FilterSegment: React.FC<FilterSegmentProps> = ({ selected, label, onClick, ...props }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        borderRadius: '100px',
        padding: '8px 24px',
        backgroundColor: selected ? '#FF6B00' : 'transparent',
        color: selected ? '#FFFFFF' : '#666666',
        textTransform: 'none',
        minWidth: 'auto',
        fontWeight: selected ? 600 : 400,
        '&:hover': {
          backgroundColor: selected ? '#FF6B00' : 'rgba(0, 0, 0, 0.04)',
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

const HomeNew = () => {
  const navigate = useNavigate();
  const { themePreferences } = useTheme();
  const isDarkMode = themePreferences.mode === 'dark';

  // State for search inputs
  const [searchQuery, setSearchQuery] = useState({
    jobTitle: '',
    location: ''
  });

  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // State for job bookmarks
  const [bookmarkedJobs, setBookmarkedJobs] = useState<string[]>([]);

  // Sample job data
  const jobListings = [
    {
      id: '1',
      title: 'Full-stack Developer',
      company: 'Google',
      logo: '',  // Using company initials instead of external images
      location: 'Toronto, Canada',
      experience: '6 years experience',
      description: 'We are looking for a Full Stack Developer to build and maintain scalable web applications. You will work with...',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
    {
      id: '2',
      title: 'Senior UI/UX Designer',
      company: 'Microsoft',
      logo: '',
      location: 'Bangalore, India',
      experience: '6 years experience',
      description: 'Senior UI/UX designer who has experience in accessibility, design systems, and interactive web experiences.',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
    {
      id: '3',
      title: 'Data Analyst',
      company: 'Meta',
      logo: '',
      location: 'Austin, USA',
      experience: '6 years experience',
      description: 'Data analyst proficient in machine learning and optimizing decision-making processes.',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
    {
      id: '4',
      title: 'Cybersecurity Engineer',
      company: 'Apple',
      logo: '',
      location: 'Berlin, Germany',
      experience: '6 years experience',
      description: 'Cybersecurity engineer with expertise in threat detection, ethical hacking, and risk assessment.',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
    {
      id: '5',
      title: 'Cybersecurity Engineer',
      company: 'Amazon',
      logo: '',
      location: 'Berlin, Germany',
      experience: '6 years experience',
      description: 'Cybersecurity engineer with expertise in threat detection, ethical hacking, and risk assessment.',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
    {
      id: '6',
      title: 'React Developer',
      company: 'Netflix',
      logo: '',
      location: 'Berlin, Germany',
      experience: '6 years experience',
      description: 'Cybersecurity engineer with expertise in threat detection, ethical hacking, and risk assessment.',
      skills: ['JavaScript', 'Node.js', 'React', 'AWS'],
    },
  ];

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchQuery(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle job search
  const handleSearch = () => {
    navigate('/jobs', { 
      state: { 
        search: searchQuery.jobTitle,
        location: searchQuery.location 
      } 
    });
  };

  // Toggle bookmark for a job
  const toggleBookmark = (jobId: string) => {
    setBookmarkedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId) 
        : [...prev, jobId]
    );
  };

  // Handle view job details
  const handleViewJobDetails = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };

  // Handle job application
  const handleApplyJob = (jobId: string) => {
    navigate(`/jobs/${jobId}/apply`);
  };

  // Handle view more jobs
  const handleViewMoreJobs = () => {
    navigate('/jobs');
  };

  return (
    <ThemedPageContainer>

      {/* Hero Section with Search */}
      <Box sx={{ 
        py: 8, 
        px: 4, 
        textAlign: 'center',
        backgroundColor: isDarkMode ? '#121212' : '#f9f9f9'
      }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
          <Box component="span" sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '2.75rem' }}>Find Your </Box>
          <Box component="span" sx={{ color: '#FF6B00', fontSize: '2.75rem' }}>Dream Job</Box>
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 5, color: isDarkMode ? '#aaa' : '#666', maxWidth: '600px', mx: 'auto' }}>
          Discover thousands of job opportunities from top companies. Your next career move is just a search away.
        </Typography>
        
        <Paper 
          elevation={0} 
          sx={{ 
            pt: 1,
            pb: 1,
            pl: 2,
            pr: 2,
            display: 'flex', 
            maxWidth: '800px', 
            mx: 'auto', 
            borderRadius: '16px',
            border: '1px solid',
            borderColor: isDarkMode ? '#333' : '#eee',
            backgroundColor: isDarkMode ? '#1e1e1e' : '#fff'
          }}
        >
          <TextField
            placeholder="Job title or keyword"
            variant="outlined"
            fullWidth
            name="jobTitle"
            value={searchQuery.jobTitle}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: isDarkMode ? '#aaa' : '#666' }} />
                </InputAdornment>
              ),
            }}
            sx={{ 
              mr: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
                '& fieldset': { border: 'none' },
              }
            }}
          />
          
          <TextField
            placeholder="Location"
            variant="outlined"
            fullWidth
            name="location"
            value={searchQuery.location}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: isDarkMode ? '#aaa' : '#666' }} />
                </InputAdornment>
              ),
            }}
            sx={{ 
              mr: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
                '& fieldset': { border: 'none' },
              }
            }}
          />
          
          <Button 
            variant="contained" 
            onClick={handleSearch}
            sx={{ 
              bgcolor: '#FF6B00', 
              '&:hover': { bgcolor: '#e55f00' },
              borderRadius: '12px',
              px: 3,
              minWidth: '140px',
            }}
          >
            Search Jobs
          </Button>
        </Paper>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666', mr: 1 }}>
            10,000+ Active Jobs
          </Typography>
          <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666', mx: 2 }}>
            •
          </Typography>
          <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666', ml: 1 }}>
            500+ Companies Hiring
          </Typography>
        </Box>
      </Box>

      {/* Job Listings Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Filters */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 3,
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="h5" component="h2">
            Latest Job Openings
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FilterSegmentContainer>
              <FilterSegment 
                label="All" 
                selected={true} 
                onClick={() => {}}
              />
              <FilterSegment 
                label="Full-time" 
                selected={false} 
                onClick={() => {}}
              />
              <FilterSegment 
                label="Part-time" 
                selected={false} 
                onClick={() => {}}
              />
              <FilterSegment 
                label="Contract" 
                selected={false} 
                onClick={() => {}}
              />
              <FilterSegment 
                label="Remote" 
                selected={false} 
                onClick={() => {}}
              />
            </FilterSegmentContainer>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                onClick={() => setViewMode('grid')} 
                sx={{ color: viewMode === 'grid' ? '#FF6B00' : isDarkMode ? '#aaa' : '#666' }}
              >
                <GridViewIcon />
              </IconButton>
              <IconButton 
                onClick={() => setViewMode('list')} 
                sx={{ color: viewMode === 'list' ? '#FF6B00' : isDarkMode ? '#aaa' : '#666' }}
              >
                <ViewListIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666' }}>
            Showing 6 jobs out of 10,000+ available positions
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1, color: isDarkMode ? '#aaa' : '#666' }}>Most Recent</Typography>
            <IconButton size="small">
              <FilterListIcon fontSize="small" sx={{ color: isDarkMode ? '#aaa' : '#666' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Job Cards */}
        <Grid container spacing={3}>
          {jobListings.map(job => (
            <Grid item xs={12} md={6} lg={4} key={job.id}>
              <ThemedBorderedPaper sx={{ 
                p: 3, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  borderColor: isDarkMode ? '#444' : '#ddd'
                }
              }}>
                <Box sx={{ position: 'absolute', top: 12, right: 12 }}>
                  <IconButton 
                    onClick={() => toggleBookmark(job.id)}
                    sx={{ color: bookmarkedJobs.includes(job.id) ? '#FF6B00' : isDarkMode ? '#aaa' : '#666' }}
                  >
                    {bookmarkedJobs.includes(job.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                  </IconButton>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar 
                    src={job.logo} 
                    alt={job.company}
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      mr: 2, 
                      bgcolor: '#FF6B00',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    {job.company.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                      {job.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666' }}>
                      {job.company}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon fontSize="small" sx={{ color: isDarkMode ? '#aaa' : '#666', mr: 0.5 }} />
                  <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666' }}>
                    {job.location}
                  </Typography>
                </Box>
                
                <Typography variant="body2" sx={{ color: isDarkMode ? '#aaa' : '#666', mb: 1 }}>
                  {job.experience}
                </Typography>
                
                <Typography variant="body2" sx={{ mb: 2, flexGrow: 1 }}>
                  {job.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {job.skills.map((skill, index) => (
                    <ThemedChip 
                      key={index} 
                      label={skill} 
                      size="small" 
                    />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                  <Button 
                    variant="outlined" 
                    onClick={() => handleViewJobDetails(job.id)}
                    sx={{ 
                      borderColor: isDarkMode ? '#444' : '#ddd', 
                      color: isDarkMode ? '#ccc' : '#333',
                      '&:hover': { borderColor: '#FF6B00', color: '#FF6B00' }
                    }}
                  >
                    View Job
                  </Button>
                  <Button 
                    variant="contained" 
                    onClick={() => handleApplyJob(job.id)}
                    sx={{ 
                      bgcolor: '#FF6B00', 
                      '&:hover': { bgcolor: '#e55f00' }
                    }}
                  >
                    One Click Apply
                  </Button>
                </Box>
              </ThemedBorderedPaper>
            </Grid>
          ))}
        </Grid>
        
        {/* Load More Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            endIcon={<ArrowForwardIcon />}
            onClick={handleViewMoreJobs}
            sx={{ 
              borderColor: isDarkMode ? '#444' : '#ddd', 
              color: isDarkMode ? '#ccc' : '#333',
              '&:hover': { borderColor: '#FF6B00', color: '#FF6B00' },
              px: 4
            }}
          >
            Load More Jobs
          </Button>
        </Box>
      </Container>
    </ThemedPageContainer>
  );
};

export default HomeNew;