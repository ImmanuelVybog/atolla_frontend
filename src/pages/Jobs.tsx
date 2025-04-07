import React, { useState } from 'react';
import { Box, Typography, Paper, Grid, Button, IconButton } from '@mui/material';
import { StyledChip } from '../components/styled/FormComponents';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Images from '../assets';

interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  experience: string;
  type: string;
  salary: string;
  description: string;
  tags: string[];
  responsibilities: string[];
  requirements: string[];
}

interface JobDetailsProps {
  job: Job;
}

// Helper function for company logos
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

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobListings: Job[] = [
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Google",
      logo: "G",
      location: "Toronto, Canada",
      experience: "6 years experience",
      type: "Full-time",
      salary: "$120k - $135k",
      description: "We are looking for a Full Stack Developer to build and maintain scalable web applications. You will work with modern technologies like React, Node.js, and MongoDB to deliver high-quality solutions.",
      tags: ["JavaScript", "Node.js", "React", "AWS"],
      responsibilities: [
        "Develop and maintain web applications using React.js, Node.js, Express, and MongoDB.",
        "Write clean, scalable, and efficient code following best practices.",
        "Work closely with UI/UX designers to create user-friendly interfaces.",
        "Implement RESTful APIs and integrate third-party services.",
        "Troubleshoot and debug applications to ensure optimal performance."
      ],
      requirements: [
        "3+ years of experience in Full Stack Development.",
        "Proficiency in JavaScript, React.js, Node.js, Express.js, and MongoDB.",
        "Experience with RESTful APIs & cloud services (AWS, Firebase, etc.).",
        "Strong understanding of Git, CI/CD pipelines, and DevOps practices.",
        "Good problem-solving skills and attention to detail."
      ]
    },
    {
      id: 2,
      title: "Senior UI/UX Designer",
      company: "Microsoft",
      logo: "M",
      location: "Toronto, Canada",
      experience: "6 years experience",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "Senior UI/UX designer who has experience in accessibility, design systems, and interactive web experiences.",
      tags: ["UI", "UX", "Figma", "Design Systems"],
      responsibilities: [
        "Create user-centered designs by understanding business requirements",
        "Create user flows, wireframes, prototypes and mockups",
        "Develop UI mockups and prototypes that clearly illustrate how sites function",
        "Identify and troubleshoot UX problems",
        "Conduct layout adjustments based on user feedback"
      ],
      requirements: [
        "6+ years of UI/UX design experience",
        "Strong experience in Figma and other design tools",
        "Excellent visual design skills",
        "Knowledge of web accessibility standards",
        "Experience with design systems"
      ]
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Meta",
      logo: "M",
      location: "Austin, USA",
      experience: "6 years experience",
      type: "Full-time",
      salary: "$130k - $160k",
      description: "Data analyst proficient in machine learning and optimizing decision-making processes.",
      tags: ["SQL", "Python", "Data Visualization", "Excel"],
      responsibilities: [
        "Analyze complex data sets to identify trends and patterns",
        "Create and maintain data visualization dashboards",
        "Develop and implement data collection procedures",
        "Work with stakeholders to understand data requirements",
        "Present findings to technical and non-technical audiences"
      ],
      requirements: [
        "Bachelor's degree in Statistics, Mathematics, or related field",
        "Strong proficiency in SQL and Python",
        "Experience with data visualization tools",
        "Strong analytical and problem-solving skills",
        "Excellent communication skills"
      ]
    }
  ];

  const JobDetails: React.FC<JobDetailsProps> = ({ job }) => (
    <Paper 
      elevation={0}
      sx={{
        p: 3,
        border: '1px solid #eee',
        borderRadius: 2
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
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
                borderRadius: 1,
                fontSize: '1.2rem'
              }}
            >
              {job.logo}
            </Box>
          )}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>{job.title}</Typography>
            <Typography variant="body1" color="text.secondary">{job.company}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#FF6B00',
              color: '#FF6B00',
              '&:hover': { borderColor: '#e65c00', color: '#e65c00' },
              borderRadius: '20px',
              textTransform: 'none'
            }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF6B00',
              '&:hover': { bgcolor: '#e65c00' },
              borderRadius: '20px',
              textTransform: 'none'
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" color="text.secondary">Experience:</Typography>
          <Typography variant="body1">6 - 7 years</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" color="text.secondary">Location:</Typography>
          <Typography variant="body1">{job.location}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" color="text.secondary">Salary:</Typography>
          <Typography variant="body1">{job.salary}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" color="text.secondary">Job Type:</Typography>
          <Typography variant="body1">{job.type}</Typography>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ mb: 2 }}>Job Description</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>{job.description}</Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>Responsibilities</Typography>
      <Box component="ul" sx={{ mb: 4, pl: 2 }}>
        {job.responsibilities.map((resp: string, index: number) => (
          <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
            {resp}
          </Typography>
        ))}
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>Requirements & Qualifications</Typography>
      <Box component="ul" sx={{ pl: 2 }}>
        {job.requirements.map((req: string, index: number) => (
          <Typography component="li" key={index} variant="body1" sx={{ mb: 1 }}>
            {req}
          </Typography>
        ))}
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <Typography variant="h5" component="h1">Jobs</Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            bgcolor: '#FFE2DB', 
            color: '#FE6A0E', 
            px: 1.5, 
            py: 0.5, 
            borderRadius: '100px',
            fontSize: '0.85rem'
          }}
        >
          21 Jobs
        </Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Job alerts based on your preferences. You can also set a custom job alert!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={selectedJob ? 5 : 12}>
          <Grid container spacing={2}>
            {jobListings.map((job) => (
              <Grid item xs={12} md={selectedJob ? 12 : 6} lg={selectedJob ? 12 : 4} key={job.id}>
                <Paper 
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #eee',
                    borderRadius: 4,
                    '&:hover': { boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    bgcolor: '#fff'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
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
                        <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, mb: 0.5 }}>{job.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{job.company}</Typography>
                      </Box>
                    </Box>
                    <IconButton 
                      sx={{ 
                        position: 'absolute',
                        top: 16,
                        right: 16
                      }}
                    >
                      <BookmarkBorderIcon />
                    </IconButton>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ color: '#FF6B00' }}>📅</Box>
                      <Typography variant="body2" color="text.secondary">{job.experience}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box component="span" sx={{ color: '#FF6B00' }}>📍</Box>
                      <Typography variant="body2" color="text.secondary">{job.location}</Typography>
                    </Box>
                  </Box>

                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      color: '#666'
                    }}
                  >
                    {job.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                    {job.tags.map((tag: string) => (
                      <StyledChip
                        key={tag}
                        label={tag}
                        variant="outlined"
                        sx={{
                          backgroundColor: '#FFE2DB',
                          color: '#FE6A0E',
                          border: '1px solid #fd9881',
                          borderRadius: '16px',
                          height: '28px'
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                    <Button
                      onClick={() => setSelectedJob(job)}
                      variant="contained"
                      sx={{
                        width: '100%',
                        bgcolor: '#FF6B00',
                        color: 'white',
                        '&:hover': { bgcolor: '#e65c00' },
                        borderRadius: '100px',
                        textTransform: 'none',
                        py: 1
                      }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      View Job
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {selectedJob && (
          <Grid item xs={12} md={7}>
            <JobDetails job={selectedJob} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Jobs; 