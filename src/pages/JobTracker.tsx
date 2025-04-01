import { Box, Typography, Paper, Tabs, Tab, Button, Chip, Divider } from '@mui/material';
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const JobTracker = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const applications = [
    {
      id: 1,
      company: 'Google',
      position: 'Senior Frontend Developer',
      location: 'San Francisco',
      status: 'Interview',
      statusColor: '#4CAF50',
      date: 'Apr 15, 2023'
    },
    {
      id: 2,
      company: 'Apple',
      position: 'UX Designer',
      location: 'Cupertino',
      status: 'Submitted',
      statusColor: '#2196F3',
      date: 'Apr 18, 2023'
    },
    {
      id: 3,
      company: 'Amazon',
      position: 'Backend Engineer',
      location: 'Remote',
      status: 'Draft',
      statusColor: '#FFC107',
      date: 'Apr 20, 2023'
    },
    {
      id: 4,
      company: 'Netflix',
      position: 'Full Stack Developer',
      location: 'Los Angeles',
      status: 'Rejected',
      statusColor: '#F44336',
      date: 'Apr 10, 2023'
    },
    {
      id: 5,
      company: 'Microsoft',
      position: 'Software Engineer',
      location: 'Seattle',
      status: 'Offer',
      statusColor: '#9C27B0',
      date: 'Apr 5, 2023'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Job Tracker</Typography>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#FF6B00', 
            '&:hover': { bgcolor: '#e65c00' },
            borderRadius: 2
          }}
        >
          + Add Application
        </Button>
      </Box>

      <Paper sx={{ mb: 3, borderRadius: 2 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          indicatorColor="primary" 
          sx={{ 
            '& .MuiTab-root': { 
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              mx: 1,
            },
            '& .Mui-selected': {
              color: '#FF6B00',
              fontWeight: 600,
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#FF6B00',
            }
          }}
        >
          <Tab label="All Applications (5)" />
          <Tab label="Interview (1)" />
          <Tab label="Submitted (1)" />
          <Tab label="Draft (1)" />
          <Tab label="Offer (1)" />
          <Tab label="Rejected (1)" />
        </Tabs>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 2 }}>
        {applications.map((app, index) => (
          <Box key={app.id}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    fontWeight: 'bold'
                  }}
                >
                  {app.company.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{app.position}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {app.company} • {app.location} • Applied on {app.date}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Chip
                  label={app.status}
                  sx={{
                    bgcolor: app.statusColor + '20',
                    color: app.statusColor,
                    borderColor: app.statusColor,
                    fontWeight: 500
                  }}
                  variant="outlined"
                />
                <Button 
                  size="small" 
                  variant="outlined" 
                  sx={{ 
                    borderColor: '#ccc', 
                    color: '#666' 
                  }}
                >
                  Update
                </Button>
                <Button 
                  size="small" 
                  variant="text" 
                  endIcon={<ArrowForwardIcon />} 
                  sx={{ color: '#666' }}
                >
                  View
                </Button>
              </Box>
            </Box>
            {index < applications.length - 1 && (
              <Divider sx={{ my: 1 }} />
            )}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default JobTracker; 