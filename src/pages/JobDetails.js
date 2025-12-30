import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Images from '../assets';
import EmptyState from '../components/EmptyStates';

// Mock job data - in a real app, this would come from an API
const mockJobs = [
  {
    id: 'job-1',
    company: 'Google',
    logo: 'G',
    title: 'Full-stack Developer',
    location: 'Toronto, Canada',
    type: 'Full-time',
    salary: '$120K - 150K',
    timeperiod: '/yr',
    tags: ['JavaScript', 'Node.js', 'React', 'AWS'],
    description: `
      <p>We are looking for a talented Full-stack Developer to join our team at Google. The ideal candidate will have experience with JavaScript, Node.js, React, and AWS.</p>
      
      <p>In this role, you will:</p>
      <ul>
        <li>Develop and maintain web applications using React and Node.js</li>
        <li>Collaborate with UX designers to implement responsive designs</li>
        <li>Optimize applications for maximum speed and scalability</li>
        <li>Write clean, maintainable code with proper documentation</li>
        <li>Work in an agile environment with daily standups and sprint planning</li>
      </ul>
      
      <p>Requirements:</p>
      <ul>
        <li>3+ years of experience with JavaScript</li>
        <li>2+ years of experience with React</li>
        <li>Experience with Node.js and Express</li>
        <li>Familiarity with AWS services</li>
        <li>Understanding of CI/CD pipelines</li>
      </ul>
    `,
    postedDate: '2 weeks ago',
    applicants: 78,
    benefits: [
      'Health Insurance',
      'Remote Work Options',
      'Flexible Hours',
      'Professional Development',
      'Stock Options'
    ]
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
    tags: ['UI', 'UX', 'Figma', 'Design Systems'],
    description: `
      <p>Microsoft is seeking a Senior UI/UX Designer to join our product team. In this role, you will be responsible for designing intuitive and engaging user experiences for our products.</p>
      
      <p>Key Responsibilities:</p>
      <ul>
        <li>Create wireframes, prototypes, and high-fidelity designs</li>
        <li>Conduct user research and usability testing</li>
        <li>Develop and maintain design systems</li>
        <li>Collaborate with engineers to implement designs</li>
        <li>Present design solutions to stakeholders</li>
      </ul>
      
      <p>Requirements:</p>
      <ul>
        <li>5+ years of experience in UI/UX design</li>
        <li>Proficiency in Figma and other design tools</li>
        <li>Experience creating and maintaining design systems</li>
        <li>Strong understanding of accessibility standards</li>
        <li>Portfolio demonstrating your design process and solutions</li>
      </ul>
    `,
    postedDate: '1 week ago',
    applicants: 45,
    benefits: [
      'Health Insurance',
      'Remote Work Options',
      'Flexible Hours',
      'Professional Development',
      'Gym Membership'
    ]
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
    tags: ['SQL', 'Python', 'Data Visualization', 'Excel'],
    description: `
      <p>Meta is looking for a Data Analyst to join our growing analytics team. The ideal candidate will have strong SQL and Python skills, along with experience in data visualization.</p>
      
      <p>Responsibilities:</p>
      <ul>
        <li>Analyze large datasets to identify trends and insights</li>
        <li>Create interactive dashboards and reports</li>
        <li>Develop and maintain data pipelines</li>
        <li>Collaborate with cross-functional teams to drive data-informed decisions</li>
        <li>Present findings to stakeholders at all levels</li>
      </ul>
      
      <p>Requirements:</p>
      <ul>
        <li>3+ years of experience in data analysis</li>
        <li>Proficiency in SQL and Python</li>
        <li>Experience with data visualization tools (Tableau, Power BI, etc.)</li>
        <li>Strong problem-solving and critical thinking skills</li>
        <li>Bachelor's degree in a quantitative field (Statistics, Computer Science, etc.)</li>
      </ul>
    `,
    postedDate: '3 days ago',
    applicants: 32,
    benefits: [
      'Health Insurance',
      'Remote Work Options',
      'Flexible Hours',
      'Professional Development',
      'Free Meals'
    ]
  }
];

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState(null);
  const [saved, setSaved] = useState(false);

  // Fetch job details
  useEffect(() => {
    // Simulate API call with setTimeout
    const timer = setTimeout(() => {
      const foundJob = mockJobs.find((j) => j.id === jobId);
      setJob(foundJob || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [jobId]);

  // Get company logo
  const getCompanyLogo = (companyName) => {
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

  const handleApply = () => {
    navigate(`/jobs/${jobId}/apply`);
  };

  const handleSaveJob = () => {
    setSaved(!saved);
    // In a real app, you would call an API to save/unsave the job
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress sx={{ color: '#FF6B00' }} />
      </Box>
    );
  }

  if (!job) {
    return <EmptyState type="jobs" title="Job Not Found" description="The job you're looking for doesn't exist or has been removed." />;
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Back Button */}
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={handleGoBack}
        sx={{ mb: 3 }}
      >
        Back to Jobs
      </Button>

      <Grid container spacing={3}>
        {/* Left Side - Job Details */}
        <Grid item xs={12} md={8}>
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 2, 
              mb: 3,
              boxShadow: 'none',
              border: '1px solid #eee' 
            }}
          >
            {/* Job Header */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              {getCompanyLogo(job.company) ? (
                <Box
                  component="img"
                  src={getCompanyLogo(job.company)}
                  alt={job.company}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: 'contain',
                    borderRadius: 1
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    fontSize: '1.5rem'
                  }}
                >
                  {job.logo}
                </Box>
              )}
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {job.company} • {job.location}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                onClick={handleSaveJob}
                sx={{ 
                  height: 'fit-content',
                  color: saved ? '#FF6B00' : 'inherit',
                  borderColor: saved ? '#FF6B00' : 'inherit'
                }}
              >
                {saved ? 'Saved' : 'Save'}
              </Button>
            </Box>

            {/* Job Metadata */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <Chip 
                icon={<WorkIcon />} 
                label={job.type} 
                variant="outlined" 
              />
              <Chip 
                icon={<LocationOnIcon />} 
                label={job.location} 
                variant="outlined" 
              />
              <Chip 
                icon={<AttachMoneyIcon />} 
                label={job.salary + job.timeperiod} 
                variant="outlined" 
              />
              <Chip 
                icon={<AccessTimeIcon />} 
                label={`Posted ${job.postedDate}`} 
                variant="outlined" 
              />
              <Chip 
                icon={<BusinessIcon />} 
                label={`${job.applicants} applicants`} 
                variant="outlined" 
              />
            </Box>

            {/* Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {job.tags.map((tag) => (
                <Chip 
                  key={tag} 
                  label={tag} 
                  size="small" 
                  sx={{ 
                    bgcolor: '#FFE2DB', 
                    color: '#FF6B00',
                    border: '1px solid #fd9881'
                  }} 
                />
              ))}
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Job Description */}
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Job Description
            </Typography>
            <Box 
              dangerouslySetInnerHTML={{ __html: job.description }} 
              sx={{ 
                '& p': { mb: 2 },
                '& ul': { pl: 3, mb: 2 },
                '& li': { mb: 1 }
              }}
            />
          </Paper>

          {/* Apply Button (Sticky on Mobile) */}
          <Box 
            sx={{ 
              position: { xs: 'fixed', md: 'static' },
              bottom: { xs: 0, md: 'auto' },
              left: { xs: 0, md: 'auto' },
              right: { xs: 0, md: 'auto' },
              p: { xs: 2, md: 0 },
              bgcolor: { xs: 'white', md: 'transparent' },
              boxShadow: { xs: '0px -2px 10px rgba(0, 0, 0, 0.1)', md: 'none' },
              zIndex: 10
            }}
          >
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                bgcolor: '#FF6B00',
                '&:hover': { bgcolor: '#e65c00' },
                py: 1.5
              }}
              onClick={handleApply}
            >
              Apply Now
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Company Info & Benefits */}
        <Grid item xs={12} md={4}>
          {/* Company Card */}
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 2, 
              mb: 3,
              boxShadow: 'none',
              border: '1px solid #eee' 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              About {job.company}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {job.company} is a leading technology company dedicated to innovation and excellence.
              We offer competitive compensation and a collaborative work environment.
            </Typography>
            <Button 
              fullWidth 
              variant="outlined"
              sx={{ mt: 1 }}
              onClick={() => window.open(`https://${job.company.toLowerCase()}.com`, '_blank')}
            >
              Visit Company Website
            </Button>
          </Paper>

          {/* Benefits Card */}
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 2,
              boxShadow: 'none',
              border: '1px solid #eee' 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Benefits
            </Typography>
            <List disablePadding>
              {job.benefits.map((benefit) => (
                <ListItem key={benefit} disablePadding sx={{ mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobDetails; 