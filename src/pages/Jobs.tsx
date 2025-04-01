import { Box, Typography, Paper, Grid, Card, CardContent, Chip, Button } from '@mui/material';

const Jobs = () => {
  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      salary: '$120K - $150K',
      tags: ['React', 'JavaScript', 'TypeScript']
    },
    {
      id: 2,
      title: 'UX Designer',
      company: 'Apple',
      location: 'Cupertino, CA',
      type: 'Full-time',
      salary: '$110K - $140K',
      tags: ['Figma', 'UI Design', 'Prototyping']
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Meta',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130K - $160K',
      tags: ['Python', 'ML', 'Data Analysis']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Amazon',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$140K - $170K',
      tags: ['AWS', 'Docker', 'Kubernetes']
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Available Jobs</Typography>
      <Grid container spacing={3}>
        {jobListings.map((job) => (
          <Grid item xs={12} md={6} lg={4} key={job.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {job.company} • {job.location} • {job.type}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {job.salary}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {job.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#FF6B00', 
                    '&:hover': { bgcolor: '#e65c00' },
                    borderRadius: 2
                  }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Jobs; 