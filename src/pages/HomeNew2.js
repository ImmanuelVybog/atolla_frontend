import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import { Paper, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledChip } from '../components/styled/FormComponents';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useTheme as useAtollaTheme } from '../context/ThemeContext';

const getCompanyLogo = (companyName) => {
  const company = companyName.toLowerCase();
  switch (company) {
    case 'google': return Images.logos.google;
    case 'microsoft': return Images.logos.microsoft;
    case 'meta': return Images.logos.meta;
    case 'amazon': return Images.logos.amazon;
    case 'apple': return Images.logos.apple;
    case 'netflix': return Images.logos.netflix;
    case 'atolla': return Images.logos.atolla;
    case 'vercel': return Images.logos.vercel;
    case 'spotify': return Images.logos.spotify;
    case 'facebook': return Images.logos.facebook;
    default: return '';
  }
};
import Images from '../assets/index.js';
import AtollaLogoSmall from '../assets/Images/Home Icons/Atolla Logo Small.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import ResumeUploadPopup from '../components/ResumeUploadPopup.js';
import JobSearchFilter from '../components/JobSearchFilter.js';
import { useNavigate } from 'react-router-dom';

// Import Home Icons
import EngineeringIcon from '../assets/Images/Home Icons/Engineering.svg';
import DesignIcon from '../assets/Images/Home Icons/Design.svg';
import MarketingIcon from '../assets/Images/Home Icons/Marketing.svg';
import SalesIcon from '../assets/Images/Home Icons/Sales.svg';
import DataScienceIcon from '../assets/Images/Home Icons/Data Science.svg';
import HumanResourcesIcon from '../assets/Images/Home Icons/Human Resources.svg';
import SecurityIcon from '../assets/Images/Home Icons/Security.svg';
import CustomerSupportIcon from '../assets/Images/Home Icons/Customer Support.svg';

// How Atolla Works Icons
import CreateProfileIcon from '../assets/Images/Home Icons/Background-7.svg';
import DiscoverOpportunitiesIcon from '../assets/Images/Home Icons/Background-8.svg';
import ApplyWithEaseIcon from '../assets/Images/Home Icons/Background-9.svg';
import LandDreamJobIcon from '../assets/Images/Home Icons/Background-10.svg';

// Why Job Seekers Love Atolla Icons
import SmartMatchingIcon from '../assets/Images/Home Icons/Background-11.svg';
import QuickApplyIcon from '../assets/Images/Home Icons/Background-12.svg';
import VerifiedCompaniesIcon from '../assets/Images/Home Icons/Background-13.svg';
import InstantAlertsIcon from '../assets/Images/Home Icons/Background-14.svg';
import ApplicationInsightsIcon from '../assets/Images/Home Icons/Background-15.svg';
import RealtimeUpdatesIcon from '../assets/Images/Home Icons/Background-16.svg';

// Atolla Logo for CTA
import AtollaLogoIcon from '../assets/Images/Home Icons/CTA Icon.svg';

const HomeNew2 = () => {
const muiTheme = useMuiTheme();
const { themePreferences } = useAtollaTheme();
const navigate = useNavigate();
const isDarkMode = themePreferences.mode === 'dark';

const [isPopupOpen, setIsPopupOpen] = useState(false);
const [appliedJob, setAppliedJob] = useState(null);
const [successDialogOpen, setSuccessDialogOpen] = useState(false);

// Featured Jobs data structure (matching Jobs.js format)
const featuredJobs = [
  {
    id: 1,
    title: "Product Designer",
    company: "Atolla",
    logo: "A",
    location: "San Francisco, CA",
    experience: "3 years experience",
    type: "Full-time",
    salary: "$100k - $150k",
    description: "We are looking for a Product Designer to create user-centered designs for our platform. You will work with cross-functional teams to deliver high-quality solutions.",
    tags: ["Design", "UI/UX", "Figma", "Product Strategy"],
    responsibilities: [
      "Create user flows, wireframes, and prototypes",
      "Collaborate with engineering teams to implement designs",
      "Conduct user research and usability testing",
      "Iterate on designs based on user feedback"
    ],
    requirements: [
      "3+ years of product design experience",
      "Proficiency in Figma and other design tools",
      "Strong understanding of user-centered design principles",
      "Excellent communication skills"
    ],
    quickApply: true
  },
  {
    id: 2,
    title: "Fullstack Engineer",
    company: "Vercel",
    logo: "V",
    location: "Remote",
    experience: "4 years experience",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "We are looking for a Fullstack Engineer to build and maintain scalable web applications using React and Node.js.",
    tags: ["JavaScript", "React", "Node.js", "AWS"],
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, scalable, and efficient code",
      "Work with UI/UX designers to create user-friendly interfaces",
      "Implement RESTful APIs"
    ],
    requirements: [
      "4+ years of fullstack development experience",
      "Proficiency in JavaScript, React, and Node.js",
      "Experience with cloud services (AWS, Firebase, etc.)",
      "Strong understanding of Git and CI/CD pipelines"
    ],
    quickApply: true
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Google",
    logo: "G",
    location: "Mountain View, CA",
    experience: "5 years experience",
    type: "Full-time",
    salary: "$130k - $200k",
    description: "We are looking for a Product Manager to lead the development of our core products. You will work with cross-functional teams to define product roadmaps.",
    tags: ["Product Management", "Roadmapping", "User Research", "Stakeholder Management"],
    responsibilities: [
      "Define product roadmaps and priorities",
      "Work with engineering and design teams to deliver products",
      "Conduct user research and analyze market trends",
      "Communicate product updates to stakeholders"
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong understanding of product development lifecycle",
      "Excellent communication and leadership skills",
      "Experience with agile methodologies"
    ],
    quickApply: false
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Spotify",
    logo: "S",
    location: "New York, NY",
    experience: "4 years experience",
    type: "Full-time",
    salary: "$110k - $170k",
    description: "We are looking for a Data Scientist to analyze large datasets and provide actionable insights to improve our platform.",
    tags: ["Data Science", "Python", "Machine Learning", "SQL"],
    responsibilities: [
      "Analyze large datasets to identify trends and patterns",
      "Develop machine learning models to solve business problems",
      "Collaborate with cross-functional teams to implement solutions",
      "Communicate insights to stakeholders"
    ],
    requirements: [
      "4+ years of data science experience",
      "Proficiency in Python, SQL, and machine learning libraries",
      "Strong understanding of statistical analysis",
      "Excellent communication skills"
    ],
    quickApply: true
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Facebook",
    logo: "M",
    location: "San Francisco, CA",
    experience: "5 years experience",
    type: "Full-time",
    salary: "$120k - $180k",
    description: "We are looking for a Marketing Manager to develop and execute marketing strategies to drive user growth.",
    tags: ["Marketing", "Digital Marketing", "Content Marketing", "Social Media"],
    responsibilities: [
      "Develop and execute marketing strategies",
      "Manage marketing campaigns across multiple channels",
      "Analyze campaign performance and optimize results",
      "Collaborate with cross-functional teams to deliver marketing initiatives"
    ],
    requirements: [
      "5+ years of marketing experience",
      "Strong understanding of digital marketing channels",
      "Excellent communication and leadership skills",
      "Experience with marketing analytics tools"
    ],
    quickApply: false
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "Google",
    logo: "G",
    location: "San Francisco, CA",
    experience: "4 years experience",
    type: "Full-time",
    salary: "$130k - $200k",
    description: "We are looking for a Frontend Developer to build and maintain scalable web applications using React.",
    tags: ["JavaScript", "React", "CSS", "HTML"],
    responsibilities: [
      "Develop and maintain web applications using React",
      "Write clean, scalable, and efficient code",
      "Work with UI/UX designers to create user-friendly interfaces",
      "Optimize applications for performance"
    ],
    requirements: [
      "4+ years of frontend development experience",
      "Proficiency in JavaScript, React, CSS, and HTML",
      "Strong understanding of responsive design principles",
      "Experience with version control systems"
    ],
    quickApply: true
  }
];

const handleOpenPopup = (jobTitle) => {
setAppliedJob(jobTitle);
setIsPopupOpen(true);
};

const handleClosePopup = () => {
setIsPopupOpen(false);
setAppliedJob(null);
};

const handleUploadSuccess = () => {
setIsPopupOpen(false);
setSuccessDialogOpen(true);
};

const handleCloseSuccessDialog = () => {
setSuccessDialogOpen(false);
navigate('/job-tracker');
};

return (
<div>
    {/* Hero Section */}
    <Box sx={{ background: 'radial-gradient( circle at top, rgba(255, 234, 230, 0.6) 0%, rgba(255, 234, 230, 0) 100%)', py: 8, px: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box sx={{ backgroundColor: '#FFEAE6', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2, width: '260px', borderRadius: '100px', gap: 1 }}>
        <Box component="img" src={AtollaLogoSmall} alt="Create Your Profile" sx={{ width: 16, height: 16 }} />
        <Typography variant="overline" sx={{ color: muiTheme.palette.primary.main, fontWeight: 'bold' }}>
        Your next opportunity awaits
        </Typography>
    </Box>
        <Typography variant="h3" component="h1" sx={{ fontSize: '3.5rem', fontWeight: 'bold', mb: 0 }}>
        Find the right job.
        </Typography>
        <Typography variant="h3" component="h2" sx={{ fontSize: '3.5rem', fontWeight: 'bold', color: muiTheme.palette.primary.main, mb: 4 }}>
        Faster. Smarter.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        Join thousands of professionals who found their dream career through Atolla. Discover opportunities that match your skills and aspirations.
        </Typography>
        {/* Search bar */}
        <JobSearchFilter />
        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6 }}>
        <Button
        variant="contained"
        sx={{ backgroundColor: muiTheme.palette.primary.main, color: 'white', textTransform: 'none', px: 4, py: 1.5, borderRadius: 1 }}
        >
        Find Jobs
        </Button>
        <Button
        variant="outlined"
        sx={{ color: muiTheme.palette.primary.main, borderColor: muiTheme.palette.primary.main, textTransform: 'none', px: 4, py: 1.5, borderRadius: 1 }}
        >
        Create Profile
        </Button>
        </Box>
        {/* Statistics (50k, 10k+, 95%) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, mb: 4 }}>
        <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>50K+</Typography>
        <Typography variant="body2" color="text.secondary">Active Jobs</Typography>
        </Box>
        <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>12K+</Typography>
        <Typography variant="body2" color="text.secondary">Companies</Typography>
        </Box>
        <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>95%</Typography>
        <Typography variant="body2" color="text.secondary">Success Rate</Typography>
        </Box>
        </Box>
        </Box>
    {/* Featured Jobs */}
        <Box sx={{ py: 8, px: 2, backgroundColor: muiTheme.palette.background.default }}>
        <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
        Featured Jobs
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Hand-picked opportunities from top companies
        </Typography>
        </Box>
        <Button variant="outlined" sx={{ color: muiTheme.palette.primary.main, borderColor: muiTheme.palette.primary.main, textTransform: 'none' }}>
        View All Jobs
        </Button>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3, rowGap: 6 }}>
        {featuredJobs.map((job) => (
            <Paper
            elevation={0}
            sx={{
                pt: 8,
                pb: 3,
                pl: 3,
                pr: 3,
                border: `1px solid ${isDarkMode ? '#333' : '#eee'}`,
                borderRadius: 4,
                '&:hover': { boxShadow: isDarkMode ? '0px 4px 20px rgba(255, 255, 255, 0.08)' : '0px 4px 20px rgba(0, 0, 0, 0.08)' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                bgcolor: muiTheme.palette.background.paper,
            }}
            key={job.id}
            >
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
                position: 'absolute',
                top: -24,
                backgroundColor: muiTheme.palette.background.paper,
                borderRadius: '14px',
                padding: '10px',
                border: `1px solid ${isDarkMode ? '#333' : '#eee'}`,
                width: '90%',
                alignItems: 'center',
                }}
            >
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
                        borderRadius: 1,
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
                        borderRadius: 1,
                    }}
                    >
                    {job.logo}
                    </Box>
                )}
                <Box>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>
                    {job.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {job.company}
                    </Typography>
                </Box>
                </Box>
                <IconButton>
                </IconButton>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#FF6B00' }}>
                    <img src={Images.icons.experience} alt="Experience Icon" />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ color: isDarkMode ? '#fff' : '#454545', }}>
                    {job.experience}
                </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#FF6B00' }}>
                    <img src={Images.icons.location} alt="Location Icon" />
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {job.location}
                </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ color: '#FF6B00' }}>
                      <img src={Images.icons.location} alt="Location Icon" />
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ color: isDarkMode ? '#fff' : '#000', fontSize: '1.3rem', fontWeight: 600 }}>
                      {job.salary}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ color: isDarkMode ? '#fff' : '#0000008c', fontSize: '0.9rem' }}>
                      per year
                  </Typography>
                  </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    mb: 3,
                    overflowX: 'hidden',
                    position: 'relative',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '50px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))',
                        pointerEvents: 'none',
                    },
                }}
            >
                {job.tags.map((tag) => (
                <StyledChip
                    key={tag}
                    label={tag}
                    variant="outlined"
                    sx={{
                    backgroundColor: '#FFE2DB',
                    color: '#FE6A0E',
                    border: '1px solid #fd9881',
                    borderRadius: '50px',
                    height: '28px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    }}
                />
                ))}
            </Box>

            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button
                onClick={() => navigate(`/jobs/${job.id}`)}
                variant="outlined"
                sx={{
                    width: '48%',
                    borderColor: '#FF6B00',
                    color: '#FF6B00',
                    '&:hover': { borderColor: '#e65c00', color: '#e65c00' },
                    borderRadius: '100px',
                    textTransform: 'none',
                    py: 1,
                }}
                endIcon={<ArrowForwardIcon />}
                >
                View Job
                </Button>
                <Button
                onClick={() => handleOpenPopup(job.title)}
                variant="contained"
                sx={{
                    width: '48%',
                    bgcolor: '#FF6B00',
                    color: 'white',
                    '&:hover': { bgcolor: '#e65c00' },
                    borderRadius: '100px',
                    textTransform: 'none',
                    py: 1,
                }}
                >
                Apply Now
                </Button>
            </Box>
            </Paper>
        ))}
        </Box>
        </Container>
        </Box>
    {/* Explore by Category */}
        <Box sx={{ py: 8, px: 2, backgroundColor: muiTheme.palette.background.paper }}>
        <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6 }}>
        Explore by Category
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3 }}>
        {/* Example Category Card 1 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={EngineeringIcon} alt="Engineering" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Engineering</Typography>
        <Typography variant="body2" color="text.secondary">10,000+ jobs</Typography>
        </Box>
        {/* Example Category Card 2 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={DesignIcon} alt="Design" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Design</Typography>
        <Typography variant="body2" color="text.secondary">5,000+ jobs</Typography>
        </Box>
        {/* Example Category Card 3 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={MarketingIcon} alt="Marketing" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Marketing</Typography>
        <Typography variant="body2" color="text.secondary">3,000+ jobs</Typography>
        </Box>
        {/* Example Category Card 4 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={SalesIcon} alt="Sales" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Sales</Typography>
        <Typography variant="body2" color="text.secondary">4,000+ jobs</Typography>
        </Box>
        {/* Example Category Card 5 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={DataScienceIcon} alt="Data Science" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Data Science</Typography>
        <Typography variant="body2" color="text.secondary">2,500+ jobs</Typography>
        </Box>
        {/* Example Category Card 6 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={HumanResourcesIcon} alt="Human Resources" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Human Resources</Typography>
        <Typography variant="body2" color="text.secondary">1,500+ jobs</Typography>
        </Box>
        {/* Example Category Card 7 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={SecurityIcon} alt="Security" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Security</Typography>
        <Typography variant="body2" color="text.secondary">1,800+ jobs</Typography>
        </Box>
        {/* Example Category Card 8 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, textAlign: 'center', boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={CustomerSupportIcon} alt="Customer Support" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Customer Support</Typography>
        <Typography variant="body2" color="text.secondary">3,000+ jobs</Typography>
        </Box>
        </Box>
        </Container>
        </Box>
    {/* How Atolla Works */}
        <Box sx={{ py: 8, px: 2, backgroundColor: muiTheme.palette.background.default }}>
        <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6 }}>
        How Atolla Works
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 3 }}>
        {/* Step 1 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.paper, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={CreateProfileIcon} alt="Create Your Profile" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Create Your Profile</Typography>
        <Typography variant="body2" color="text.secondary">Build a comprehensive profile that showcases your skills and experience.</Typography>
        </Box>
        {/* Step 2 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.paper, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={DiscoverOpportunitiesIcon} alt="Discover Opportunities" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Discover Opportunities</Typography>
        <Typography variant="body2" color="text.secondary">Get AI-matched with jobs that fit your goals.</Typography>
        </Box>
        {/* Step 3 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.paper, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={ApplyWithEaseIcon} alt="Apply with Ease" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Apply with Ease</Typography>
        <Typography variant="body2" color="text.secondary">Apply to multiple jobs with one-click applications.</Typography>
        </Box>
        {/* Step 4 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.paper, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={LandDreamJobIcon} alt="Land Your Dream Job" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Land Your Dream Job</Typography>
        <Typography variant="body2" color="text.secondary">Track applications, prepare for interviews, and secure your next role.</Typography>
        </Box>
        </Box>
        </Container>
        </Box>
    {/* Why Job Seekers Love Atolla */}
        <Box sx={{ py: 8, px: 2, backgroundColor: muiTheme.palette.background.paper }}>
        <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 6 }}>
        Why Job Seekers Love Atolla
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
        {/* Feature 1 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={SmartMatchingIcon} alt="Smart Matching" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Smart Matching</Typography>
        <Typography variant="body2" color="text.secondary">Our AI-powered matching algorithm connects you with relevant job opportunities.</Typography>
        </Box>
        {/* Feature 2 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={QuickApplyIcon} alt="Quick Apply" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Quick Apply</Typography>
        <Typography variant="body2" color="text.secondary">Apply to jobs with a single click, saving you time and effort.</Typography>
        </Box>
        {/* Feature 3 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={VerifiedCompaniesIcon} alt="Verified Companies" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Verified Companies</Typography>
        <Typography variant="body2" color="text.secondary">Browse jobs from trusted and verified companies.</Typography>
        </Box>
        {/* Feature 4 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={InstantAlertsIcon} alt="Instant Alerts" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Instant Alerts</Typography>
        <Typography variant="body2" color="text.secondary">Get real-time notifications for new job postings that match your criteria.</Typography>
        </Box>
        {/* Feature 5 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={ApplicationInsightsIcon} alt="Application Insights" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Application Insights</Typography>
        <Typography variant="body2" color="text.secondary">Track your application status and get insights into your job search.</Typography>
        </Box>
        {/* Feature 6 */}
        <Box sx={{ backgroundColor: muiTheme.palette.background.default, p: 3, borderRadius: 2, boxShadow: muiTheme.shadows[1] }}>
        <Box component="img" src={RealtimeUpdatesIcon} alt="Real-time Updates" sx={{ width: 50, height: 50, mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>Real-time Updates</Typography>
        <Typography variant="body2" color="text.secondary">Stay informed with live updates on your job applications and market trends.</Typography>
        </Box>
        </Box>
        </Container>
        </Box>
    {/* Ready to Find Your Dream Job? (CTA) */}
        <Box
        sx={{
        backgroundColor: '#212121',
        borderRadius: 4,
        p: 8,
        textAlign: 'center',
        color: 'white',
        maxWidth: 1200,
        mx: 'auto',
        my: 8,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden', 
        }}
        >
        <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box component="img" src={AtollaLogoIcon} alt="Atolla Icon" sx={{width: 64, height: 64, mb: 3,}}/>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>Ready to Find Your Dream Job?</Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 450, textAlign: 'left', color: 'rgba(251, 250, 249, 0.7)' }}>
                Create your profile today and get matched with opportunities that align with your career goals.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: muiTheme.palette.primary.main, mr: 1 }} />
                    <Typography variant="body1">Built for modern job seekers</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: muiTheme.palette.primary.main, mr: 1 }} />
                    <Typography variant="body1">50,000+ active job listings</Typography>
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: muiTheme.palette.primary.main, mr: 1 }} />
                    <Typography variant="body1">AI-powered job matching</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleOutlineIcon sx={{ color: muiTheme.palette.primary.main, mr: 1 }} />
                    <Typography variant="body1">One-click applications</Typography>
                </Box>
                </Grid>
            </Grid>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, marginTop: 'auto', marginBottom: 'auto' }}>
            <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ backgroundColor: 'white', color: '#212121', padding: '12px 30px', fontSize: '1rem', borderRadius: '20px', '&:hover': { backgroundColor: '#f0f0f0' } }}
            >
            Browse Jobs
            </Button>
            <Button
            variant="contained"
            sx={{ backgroundColor: muiTheme.palette.primary.main, padding: '12px 30px', fontSize: '1rem', borderRadius: '20px', '&:hover': { backgroundColor: muiTheme.palette.primary.dark } }}
            >
            Create Profile
            </Button>
        </Box>
        <Box sx={{ position: "absolute", width: "100%" }}>
  
            {/* Top Left */}
            <Box
                sx={{
                position: "absolute",
                top: "-170px",
                left: "-150px",
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,88,51,0.2) 0%, rgba(255,88,51,0.15) 40%, rgba(255,88,51,0.05) 60%, rgba(255,88,51,0) 100%)",
                filter: "blur(10px)",
                }}
            />

            {/* Center Right */}
            <Box
                sx={{
                position: "absolute",
                top: "420px",
                left: "380px",
                transform: "translateY(-50%)",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,88,51,0.2) 0%, rgba(255,88,51,0.15) 40%, rgba(255,88,51,0.05) 60%, rgba(255,88,51,0) 100%)",
                filter: "blur(10px)",
                }}
            />

            {/* Bottom, slightly left from center */}
            <Box
                sx={{
                position: "absolute",
                bottom: "-180px",
                right: "-150px",
                transform: "translateX(-20%)",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,88,51,0.2) 0%, rgba(255,88,51,0.15) 40%, rgba(255,88,51,0.05) 60%, rgba(255,88,51,0) 100%)",
                filter: "blur(10px)",
                }}
            />

        </Box>

        </Box>

    {/* Footer */}
        <Box sx={{ backgroundColor: '#212121', color: 'white', py: 8, px: 2 }}>
        <Container maxWidth="lg">
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
        component="img"
        src={AtollaLogoIcon}
        alt="Atolla Logo"
        sx={{ width: 40, height: 40, mr: 1, filter: 'brightness(0) invert(1)' }}
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Atolla</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#B0B0B0' }}>
        Connecting talented professionals with their dream jobs, and helping companies find the perfect fit.
        </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
        <Grid container spacing={4}>
        <Grid item xs={6} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>For Job Seekers</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Browse Jobs</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>My Applications</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>My Profile</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Career Resources</a></Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>For Employers</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Post a Job</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Pricing</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Employer Resources</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Recruitment Solutions</a></Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Company</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>About Us</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Careers</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Blog</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Press</a></Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Support</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Help Center</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Contact Us</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Privacy Policy</a></Typography>
        <Typography variant="body2" sx={{ mb: 1 }}><a href="#" style={{ color: '#B0B0B0', textDecoration: 'none' }}>Terms of Service</a></Typography>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid #424242', mt: 4, pt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#B0B0B0', mb: 1 }}>
        © 2025 Atolla. All rights reserved.
        </Typography>
        <Box>
        <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', mx: 1 }}>Privacy Policy</a>
        <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', mx: 1 }}>Terms</a>
        <a href="#" style={{ color: '#B0B0B0', textDecoration: 'none', mx: 1 }}>Cookies</a>
        </Box>
        </Box>
        </Container>
        </Box>
        <ResumeUploadPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        onUploadSuccess={handleUploadSuccess}
        jobTitle={appliedJob}
        />

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
        <CheckCircleOutlineIcon sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }} />
        <Typography variant="h6" sx={{ mb: 1 }}>
        Your application for {appliedJob} has been submitted!
        </Typography>
        <Typography variant="body1" color="text.secondary">
        You can track the status of your application in the Job Tracker.
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
</div>
);
};

export default HomeNew2;


