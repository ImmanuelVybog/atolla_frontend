import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      count: 4,
      subCategory: 'Backend Developer',
      subCount: 2,
      experience: '6 years exp.',
      salary: '$120k - $135k',
      appliedDate: 'Jan 4, 2025'
    }
  ];

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>🔔</Box>
          <Typography variant="h5" component="h1">Job Alerts</Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Job alerts based on your preferences. You can also set a custom job alert!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -1,
                left: 0,
                width: '100%',
                height: 2,
                bgcolor: '#FF6B00'
              }
            }}
          >
            Full Stack Developer (4)
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ color: '#666' }}
          >
            Backend Developer (2)
          </Typography>
        </Box>

        {alerts.map((alert) => (
          <Box 
            key={alert.id}
            sx={{ 
              p: 3,
              mb: 2,
              borderRadius: 3,
              border: '1px solid #eee',
              bgcolor: '#fff',
              '&:hover': {
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
              }
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Box
                component="img"
                src="/company-logos/google.png"
                alt="Google"
                sx={{
                  width: 32,
                  height: 32,
                  objectFit: 'contain',
                  borderRadius: 1
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                  Full-stack Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Google
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#666' }}>⏱️</Box>
                <Typography variant="body2" color="text.secondary">
                  {alert.experience}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#666' }}>💰</Box>
                <Typography variant="body2" color="text.secondary">
                  {alert.salary}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>
              <Typography variant="body2" color="text.secondary">
                Applied on {alert.appliedDate}
              </Typography>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  color: '#FF6B00',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline'
                  },
                  textTransform: 'none'
                }}
              >
                View Job
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default JobAlerts; 