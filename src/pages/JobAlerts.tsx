import { Box, Typography, Paper, Button, Chip, Switch, TextField, Grid, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const JobAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: 'Frontend Developer',
      keywords: ['React', 'JavaScript', 'TypeScript'],
      location: 'San Francisco, CA',
      matches: 7,
      isActive: true
    },
    {
      id: 2,
      title: 'UX Designer',
      keywords: ['UI', 'Figma', 'Design Systems'],
      location: 'Remote',
      matches: 4,
      isActive: true
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      keywords: ['Node.js', 'React', 'MongoDB'],
      location: 'New York, NY',
      matches: 12,
      isActive: false
    },
    {
      id: 4,
      title: 'Product Manager',
      keywords: ['Agile', 'Scrum', 'Product Development'],
      location: 'Seattle, WA',
      matches: 3,
      isActive: true
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Job Alerts</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          sx={{ 
            bgcolor: '#FF6B00', 
            '&:hover': { bgcolor: '#e65c00' },
            borderRadius: 2
          }}
        >
          Create New Alert
        </Button>
      </Box>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Get notified when new jobs matching your criteria are posted. We'll send you daily or weekly updates.
      </Typography>

      <Grid container spacing={3}>
        {/* Create new alert card */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper 
            sx={{ 
              p: 3, 
              borderRadius: 2, 
              height: '100%',
              border: '2px dashed #ccc',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#FF6B00',
                '& .MuiSvgIcon-root': {
                  color: '#FF6B00'
                }
              }
            }}
          >
            <AddIcon sx={{ fontSize: 40, color: '#999', mb: 2 }} />
            <Typography variant="h6" sx={{ color: '#666', textAlign: 'center' }}>
              Create New Job Alert
            </Typography>
          </Paper>
        </Grid>

        {/* Existing alerts */}
        {alerts.map((alert) => (
          <Grid item xs={12} md={6} lg={4} key={alert.id}>
            <Paper sx={{ p: 3, borderRadius: 2, height: '100%', position: 'relative' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">{alert.title}</Typography>
                <Switch 
                  checked={alert.isActive} 
                  color="primary" 
                  sx={{ 
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Keywords:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {alert.keywords.map((keyword) => (
                    <Chip key={keyword} label={keyword} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Location:</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{alert.location}</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                <Chip 
                  label={`${alert.matches} matches`} 
                  size="small" 
                  sx={{ 
                    bgcolor: '#FF6B00', 
                    color: 'white',
                  }} 
                />
                <Box>
                  <IconButton size="small" sx={{ color: '#666' }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#666' }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobAlerts; 