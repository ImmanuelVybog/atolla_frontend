import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Chip,
  IconButton,
  Divider,
  Tab,
  Tabs,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  DialogContentText,
  Snackbar,
  Alert,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import CloseIcon from '@mui/icons-material/Close';
import EmptyState from '../components/EmptyStates';
import Images from '../assets';

// Interface for job alert
interface JobAlert {
  id: string;
  title: string;
  keywords: string[];
  location: string;
  jobType: string;
  frequency: string;
  matchCount: number;
  active: boolean;
  createdAt: string;
  email?: string;
}

// Available job types
const jobTypeOptions = [
  'Full-time',
  'Part-time',
  'Contract',
  'Temporary',
  'Internship',
  'Remote'
];

// Available frequency options
const frequencyOptions = [
  'Daily',
  'Weekly',
  'Biweekly',
  'Monthly'
];

// Location suggestions
const locationSuggestions = [
  'New York, USA',
  'San Francisco, USA',
  'Toronto, Canada',
  'London, UK',
  'Remote',
  'Berlin, Germany',
  'Paris, France',
  'Tokyo, Japan',
  'Sydney, Australia',
  'Singapore'
];

const JobAlerts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [alerts, setAlerts] = useState<JobAlert[]>([]);
  const [tabValue, setTabValue] = useState(0);
  
  // Edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<JobAlert | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<JobAlert>>({});
  
  // Delete confirmation state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [alertToDelete, setAlertToDelete] = useState<string | null>(null);
  
  // Success notification state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  
  // Simulating API call to get job alerts
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mock job alerts data
      const mockAlerts = [
        {
          id: 'alert-1',
          title: 'Frontend Developer',
          keywords: ['React', 'JavaScript', 'CSS'],
          location: 'Toronto, Canada',
          jobType: 'Full-time',
          frequency: 'Daily',
          matchCount: 7,
          active: true,
          createdAt: '2023-04-15',
          email: 'user@example.com'
        },
        {
          id: 'alert-2',
          title: 'React Engineer',
          keywords: ['React', 'Redux', 'TypeScript'],
          location: 'Remote',
          jobType: 'Full-time',
          frequency: 'Weekly',
          matchCount: 4,
          active: true,
          createdAt: '2023-04-10',
          email: 'user@example.com'
        },
        {
          id: 'alert-3',
          title: 'Remote Jobs',
          keywords: ['Remote', 'Work from Home'],
          location: 'Anywhere',
          jobType: 'Any',
          frequency: 'Daily',
          matchCount: 10,
          active: true,
          createdAt: '2023-04-05',
          email: 'user@example.com'
        },
        {
          id: 'alert-4',
          title: 'UX Designer',
          keywords: ['UI/UX', 'Figma', 'Design'],
          location: 'New York, USA',
          jobType: 'Full-time',
          frequency: 'Daily',
          matchCount: 3,
          active: false,
          createdAt: '2023-03-28',
          email: 'user@example.com'
        }
      ];
      
      setAlerts(mockAlerts);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle tab change
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  // Filter alerts based on active tab
  const filteredAlerts = tabValue === 0 
    ? alerts 
    : tabValue === 1 
      ? alerts.filter(alert => alert.active) 
      : alerts.filter(alert => !alert.active);
  
  // Handle create new alert
  const handleCreateAlert = () => {
    navigate('/job-alerts/create');
  };
  
  // Handle view alert matches
  const handleViewAlertMatches = (alertId: string) => {
    navigate(`/job-alerts/${alertId}`);
  };
  
  // Handle edit alert
  const handleEditAlert = (alertId: string) => {
    const alertToEdit = alerts.find(alert => alert.id === alertId);
    if (alertToEdit) {
      setCurrentAlert(alertToEdit);
      setEditFormData({
        title: alertToEdit.title,
        keywords: alertToEdit.keywords,
        location: alertToEdit.location,
        jobType: alertToEdit.jobType,
        frequency: alertToEdit.frequency,
        email: alertToEdit.email || ''
      });
      setEditModalOpen(true);
    }
  };
  
  // Handle save edit
  const handleSaveEdit = () => {
    if (currentAlert && editFormData.title && editFormData.location) {
      // Update the alert in the state
      const updatedAlerts = alerts.map(alert => 
        alert.id === currentAlert.id 
          ? { 
              ...alert, 
              title: editFormData.title || alert.title,
              keywords: editFormData.keywords || alert.keywords,
              location: editFormData.location || alert.location,
              jobType: editFormData.jobType || alert.jobType,
              frequency: editFormData.frequency || alert.frequency,
              email: editFormData.email || alert.email
            } 
          : alert
      );
      
      setAlerts(updatedAlerts);
      setEditModalOpen(false);
      setCurrentAlert(null);
      
      // Show success notification
      setSnackbarMessage('Job alert updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }
  };
  
  // Handle open delete confirmation
  const handleOpenDeleteConfirm = (alertId: string) => {
    setAlertToDelete(alertId);
    setDeleteDialogOpen(true);
  };
  
  // Handle delete alert
  const handleDeleteAlert = () => {
    if (alertToDelete) {
      // In a real app, this would call an API to delete the alert
      setAlerts(alerts.filter(alert => alert.id !== alertToDelete));
      setDeleteDialogOpen(false);
      setAlertToDelete(null);
      
      // Show success notification
      setSnackbarMessage('Job alert deleted successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }
  };
  
  // Handle toggle alert status
  const handleToggleAlertStatus = (alertId: string) => {
    // In a real app, this would call an API to toggle the alert status
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, active: !alert.active } : alert
    ));
    
    // Show success notification
    const alert = alerts.find(a => a.id === alertId);
    setSnackbarMessage(`Job alert ${alert?.active ? 'deactivated' : 'activated'} successfully`);
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };
  
  // Handle close snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress sx={{ color: '#FF6B00' }} />
      </Box>
    );
  }
  
  // Check if there are no alerts to display
  const showEmptyState = filteredAlerts.length === 0;

  return (
    <Box sx={{ p: 3, minHeight: '100vh', m: 'auto', maxWidth: '96rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mb: 2, width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: 1, mb: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <Box
              component="img"
              src={Images.titleIcons.alert}
              alt="Job Alerts Icon"
              sx={{
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center'
              }}
            />
            <Typography variant="h5" component="h1">Alerts</Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Job alerts based on your preferences. You can also set a custom job alert!
          </Typography>
        </Box>
        
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleCreateAlert}
            sx={{ bgcolor: '#FF6B00', px: 3, py: 1, '&:hover': { bgcolor: '#e65c00' } }}
          >
            Create Alert
          </Button>
        </Box>
      </Box>
      
      <Paper sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 'none', border: '1px solid #eee', alignSelf: 'flex-start', width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            sx={{ 
              '& .MuiTabs-indicator': { backgroundColor: '#FF6B00' },
              '& .Mui-selected': { color: '#FF6B00' }
            }}
          >
            <Tab label="All Alerts" />
            <Tab label="Active" />
            <Tab label="Inactive" />
          </Tabs>
        </Box>

        {showEmptyState ? (
            <EmptyState 
              type="alerts" 
              title={tabValue === 0 ? "No Job Alerts" : tabValue === 1 ? "No Active Alerts" : "No Inactive Alerts"}
              description={
                tabValue === 0 
                  ? "You haven't set up any job alerts yet. Create alerts to get notified about new job opportunities." 
                  : tabValue === 1 
                    ? "You don't have any active job alerts. Activate an existing alert or create a new one." 
                    : "You don't have any inactive job alerts."
              }
              actionText="Create Alert"
              actionPath="/job-alerts/create"
            />
        ) : (
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              {filteredAlerts.map((alert) => (
                <Grid item xs={12} key={alert.id}>
                  <Paper
                    elevation={0}
                    sx={{ 
                      p: 2,
                      border: '1px solid #eee',
                      borderRadius: 2,
                      '&:hover': { boxShadow: 1 }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box 
                            sx={{
                              bgcolor: '#FFE2DB', 
                              p: 1, 
                              borderRadius: '50%', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center' 
                            }}
                          >
                            <NotificationsIcon sx={{ color: '#FF6B00' }} />
                          </Box>
                          <Box>
                            <Typography variant="h6">{alert.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {alert.location} • {alert.jobType} • {alert.frequency} Updates
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Chip 
                            label={alert.active ? "Active" : "Inactive"} 
                            color={alert.active ? "success" : "default"}
                            size="small"
                            variant="outlined"
                            onClick={() => handleToggleAlertStatus(alert.id)}
                            sx={{ cursor: 'pointer' }}
                          />
                          <IconButton 
                            size="small" 
                            onClick={() => handleEditAlert(alert.id)}
                            sx={{ color: '#64748B' }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton 
                            size="small" 
                            onClick={() => handleOpenDeleteConfirm(alert.id)}
                            sx={{ color: '#64748B' }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {alert.keywords.map((keyword, index) => (
                          <Chip 
                            key={index} 
                            label={keyword} 
                            size="small" 
                            sx={{ bgcolor: '#FFE2DB', color: '#FF6B00', border: '1px solid #fd9881' }} 
                          />
                        ))}
                      </Box>
                      
                      <Divider />
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <WorkIcon sx={{ color: '#64748B', fontSize: 20 }} />
                          <Typography variant="body2" color="text.secondary">
                            {alert.matchCount} matching jobs
                          </Typography>
                        </Box>
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => handleViewAlertMatches(alert.id)}
                          sx={{ borderColor: '#FF6B00', color: '#FF6B00', '&:hover': { borderColor: '#e65c00', bgcolor: '#FFF7ED' } }}
                        >
                          View Matches
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
      
      {/* Edit Alert Modal */}
      <Dialog 
        open={editModalOpen} 
        onClose={() => setEditModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Edit Job Alert
          <IconButton
            aria-label="close"
            onClick={() => setEditModalOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Alert Title"
                fullWidth
                required
                value={editFormData.title || ''}
                onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="keywords"
                options={[]}
                freeSolo
                value={editFormData.keywords || []}
                onChange={(_event, newValue) => setEditFormData({ ...editFormData, keywords: newValue })}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip 
                      label={option} 
                      {...getTagProps({ index })} 
                      sx={{ bgcolor: '#FFE2DB', color: '#FF6B00', border: '1px solid #fd9881' }}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Job Keywords"
                    placeholder="Add keywords..."
                    required
                    helperText="Enter skills, job titles, or keywords"
                  />
                )}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="location"
                options={locationSuggestions}
                freeSolo
                value={editFormData.location || ''}
                onChange={(_event, newValue) => setEditFormData({ ...editFormData, location: newValue || '' })}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Location"
                    placeholder="e.g., New York, Remote"
                    required
                  />
                )}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="job-type-label">Job Type</InputLabel>
                <Select
                  labelId="job-type-label"
                  id="job-type"
                  value={editFormData.jobType || ''}
                  label="Job Type"
                  onChange={(e) => setEditFormData({ ...editFormData, jobType: e.target.value })}
                >
                  {jobTypeOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="frequency-label">Alert Frequency</InputLabel>
                <Select
                  labelId="frequency-label"
                  id="frequency"
                  value={editFormData.frequency || ''}
                  label="Alert Frequency"
                  onChange={(e) => setEditFormData({ ...editFormData, frequency: e.target.value })}
                >
                  {frequencyOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email for Alerts"
                type="email"
                fullWidth
                required
                value={editFormData.email || ''}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                helperText="We'll send job matches to this email"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setEditModalOpen(false)}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSaveEdit}
            variant="contained"
            sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Delete Job Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this job alert? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleDeleteAlert} 
            color="error" 
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Success/Error Notification */}
      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default JobAlerts; 