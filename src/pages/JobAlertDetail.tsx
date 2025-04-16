import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  CircularProgress,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Autocomplete,
  Snackbar,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterListIcon from '@mui/icons-material/FilterList';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import EmptyState from '../components/EmptyStates';
import Images from '../assets';

// Interface for job match
interface JobMatch {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  type: string;
  salary: string;
  timeperiod: string;
  postedDate: string;
  tags: string[];
  matchScore: number;
}

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

const JobAlertDetail = () => {
  const { alertId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState<JobAlert | null>(null);
  const [matchingJobs, setMatchingJobs] = useState<JobMatch[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  
  // Edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<JobAlert>>({});
  
  // Delete confirmation state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  
  // Success notification state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  
  // Extract alertId from query params if not in path params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryAlertId = queryParams.get('alert');
    
    if (!alertId && queryAlertId) {
      navigate(`/job-alerts/${queryAlertId}`, { replace: true });
    }
  }, [alertId, location.search, navigate]);
  
  // Fetch alert details and matching jobs
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      // Mock alert data
      const mockAlert: JobAlert = {
        id: alertId || 'alert-1',
        title: 'Frontend Developer',
        keywords: ['React', 'JavaScript', 'CSS', 'TypeScript'],
        location: 'Toronto, Canada',
        jobType: 'Full-time',
        frequency: 'Daily',
        matchCount: 7,
        active: true,
        createdAt: '2023-04-15',
        email: 'user@example.com'
      };
      
      // Mock matching jobs
      const mockJobs: JobMatch[] = [
        {
          id: 'job-1',
          title: 'Senior Frontend Developer',
          company: 'Google',
          logo: 'google',
          location: 'Toronto, Canada',
          type: 'Full-time',
          salary: '$120K - 150K',
          timeperiod: '/yr',
          postedDate: '2 days ago',
          tags: ['React', 'JavaScript', 'TypeScript', 'CSS'],
          matchScore: 95
        },
        {
          id: 'job-2',
          title: 'Frontend Engineer',
          company: 'Microsoft',
          logo: 'microsoft',
          location: 'Toronto, Canada',
          type: 'Full-time',
          salary: '$110K - 140K',
          timeperiod: '/yr',
          postedDate: '1 week ago',
          tags: ['React', 'JavaScript', 'HTML', 'CSS'],
          matchScore: 90
        },
        {
          id: 'job-3',
          title: 'React Developer',
          company: 'Meta',
          logo: 'meta',
          location: 'Remote',
          type: 'Full-time',
          salary: '$115K - 145K',
          timeperiod: '/yr',
          postedDate: '3 days ago',
          tags: ['React', 'Redux', 'JavaScript', 'CSS'],
          matchScore: 88
        },
        {
          id: 'job-4',
          title: 'Frontend Developer',
          company: 'Netflix',
          logo: 'netflix',
          location: 'Toronto, Canada',
          type: 'Full-time',
          salary: '$105K - 135K',
          timeperiod: '/yr',
          postedDate: '1 day ago',
          tags: ['React', 'JavaScript', 'HTML', 'CSS'],
          matchScore: 85
        },
        {
          id: 'job-5',
          title: 'UI Developer',
          company: 'Amazon',
          logo: 'amazon',
          location: 'Toronto, Canada',
          type: 'Full-time',
          salary: '$100K - 130K',
          timeperiod: '/yr',
          postedDate: '2 weeks ago',
          tags: ['JavaScript', 'HTML', 'CSS', 'UI/UX'],
          matchScore: 80
        },
        {
          id: 'job-6',
          title: 'Frontend Developer',
          company: 'Apple',
          logo: 'apple',
          location: 'Vancouver, Canada',
          type: 'Full-time',
          salary: '$110K - 140K',
          timeperiod: '/yr',
          postedDate: '5 days ago',
          tags: ['React', 'TypeScript', 'CSS'],
          matchScore: 75
        },
        {
          id: 'job-7',
          title: 'Web Developer',
          company: 'Shopify',
          logo: '',
          location: 'Toronto, Canada',
          type: 'Full-time',
          salary: '$95K - 125K',
          timeperiod: '/yr',
          postedDate: '3 weeks ago',
          tags: ['JavaScript', 'React', 'HTML', 'CSS'],
          matchScore: 70
        }
      ];
      
      setAlert(mockAlert);
      setMatchingJobs(mockJobs);
      setLoading(false);
    };
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [alertId, location.search]);
  
  // Get company logo
  const getCompanyLogo = (companyName: string) => {
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
  
  // Filter jobs based on search query
  const filteredJobs = matchingJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  // Sort jobs based on selected option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'relevance':
        return b.matchScore - a.matchScore;
      case 'date':
        // Simple approximation - in real app would use actual date parsing
        return a.postedDate.includes('day') ? -1 : 1;
      case 'salary':
        // Extract the first salary number for comparison
        const aSalary = parseInt(a.salary.replace(/[^0-9]/g, ''));
        const bSalary = parseInt(b.salary.replace(/[^0-9]/g, ''));
        return bSalary - aSalary;
      default:
        return 0;
    }
  });
  
  // Handle go back
  const handleGoBack = () => {
    navigate(-1);
  };
  
  // Handle edit alert
  const handleEditAlert = () => {
    if (alert) {
      setEditFormData({
        title: alert.title,
        keywords: alert.keywords,
        location: alert.location,
        jobType: alert.jobType,
        frequency: alert.frequency,
        email: alert.email || ''
      });
      setEditModalOpen(true);
    }
  };
  
  // Handle save edit
  const handleSaveEdit = () => {
    if (alert && editFormData.title && editFormData.location) {
      // Update the alert
      const updatedAlert: JobAlert = {
        ...alert,
        title: editFormData.title || alert.title,
        keywords: editFormData.keywords || alert.keywords,
        location: editFormData.location || alert.location,
        jobType: editFormData.jobType || alert.jobType,
        frequency: editFormData.frequency || alert.frequency,
        email: editFormData.email
      };
      
      setAlert(updatedAlert);
      setEditModalOpen(false);
      
      // Show success notification
      setSnackbarMessage('Job alert updated successfully');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    }
  };
  
  // Handle delete alert confirmation
  const handleOpenDeleteConfirm = () => {
    setDeleteDialogOpen(true);
  };
  
  // Handle delete alert
  const handleDeleteAlert = () => {
    setDeleteDialogOpen(false);
    navigate('/job-alerts');
    
    // Show success notification (in a real app, this would happen after a successful API call)
    setSnackbarMessage('Job alert deleted successfully');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);
  };
  
  // Handle close snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  
  // Handle view job details
  const handleViewJobDetails = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };
  
  // Handle apply to job
  const handleApplyJob = (jobId: string) => {
    navigate(`/jobs/apply/${jobId}`);
  };
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress sx={{ color: '#FF6B00' }} />
      </Box>
    );
  }
  
  if (!alert) {
    return (
      <EmptyState 
        type="alerts" 
        title="Alert Not Found" 
        description="The job alert you're looking for doesn't exist or has been removed." 
        actionText="View All Alerts"
        actionPath="/job-alerts"
      />
    );
  }
  
  return (
    <Box sx={{ p: 3, bgcolor: '#fff', minHeight: '100vh', m: 'auto', maxWidth: '96rem' }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={handleGoBack}
        sx={{ mb: 3 }}
      >
        Back to Alerts
      </Button>
      
      {/* Alert Header */}
      <Paper 
        sx={{ 
          p: 3, 
          borderRadius: 2, 
          mb: 3, 
          boxShadow: 'none', 
          border: '1px solid #eee',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box 
              sx={{ 
                bgcolor: '#FFE2DB', 
                p: 1.5, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <NotificationsIcon sx={{ color: '#FF6B00', fontSize: 28 }} />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                {alert.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {alert.location} • {alert.jobType} • {alert.frequency} Updates
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {alert.keywords.map((keyword, index) => (
                  <Chip 
                    key={index} 
                    label={keyword} 
                    size="small" 
                    sx={{ bgcolor: '#FFE2DB', color: '#FF6B00', border: '1px solid #fd9881' }} 
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditAlert}
              sx={{ borderColor: '#FF6B00', color: '#FF6B00', '&:hover': { borderColor: '#e65c00', bgcolor: '#FFF7ED' } }}
            >
              Edit Alert
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleOpenDeleteConfirm}
            >
              Delete Alert
            </Button>
          </Box>
        </Box>
      </Paper>
      
      {/* Search and Filters */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, gap: 2 }}>
        <TextField
          placeholder="Search in matching jobs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flex: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="sort-by-label">Sort By</InputLabel>
            <Select
              labelId="sort-by-label"
              id="sort-by"
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="relevance">Relevance</MenuItem>
              <MenuItem value="date">Date Posted</MenuItem>
              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{ borderColor: '#ddd', color: '#666' }}
          >
            Filters
          </Button>
        </Box>
      </Box>
      
      {/* Matching Jobs List */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        {sortedJobs.length} Matching Jobs
      </Typography>
      
      {sortedJobs.length === 0 ? (
        <EmptyState 
          type="search" 
          title="No Matching Jobs Found" 
          description="Try adjusting your search query or alert criteria to find more matching jobs." 
          actionText="Edit Alert"
          actionPath={`/job-alerts/edit/${alert.id}`}
        />
      ) : (
        <Grid container spacing={2}>
          {sortedJobs.map((job) => (
            <Grid item xs={12} key={job.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid #eee',
                  borderRadius: 2,
                  '&:hover': { boxShadow: 1 }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                    {getCompanyLogo(job.company) ? (
                      <Box
                        component="img"
                        src={getCompanyLogo(job.company)}
                        alt={job.company}
                        sx={{
                          width: 50,
                          height: 50,
                          objectFit: 'contain',
                          borderRadius: 1
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          bgcolor: '#eee',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 1,
                          fontSize: '1.2rem'
                        }}
                      >
                        {job.company.charAt(0)}
                      </Box>
                    )}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {job.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.company} • {job.location}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <WorkIcon fontSize="small" color="action" />
                          <Typography variant="body2">{job.type}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <BusinessIcon fontSize="small" color="action" />
                          <Typography variant="body2">{job.salary}{job.timeperiod}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <AccessTimeIcon fontSize="small" color="action" />
                          <Typography variant="body2">Posted {job.postedDate}</Typography>
                        </Box>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        {job.tags.map((tag, index) => (
                          <Chip 
                            key={index} 
                            label={tag} 
                            size="small" 
                            sx={{ bgcolor: '#FFE2DB', color: '#FF6B00', border: '1px solid #fd9881' }} 
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                    <Chip
                      label={`${job.matchScore}% Match`}
                      sx={{
                        bgcolor: '#D1FAE5',
                        color: '#059669',
                        fontWeight: 600,
                        fontSize: '0.875rem'
                      }}
                    />
                    
                    <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                      <Button 
                        variant="outlined" 
                        onClick={() => handleViewJobDetails(job.id)}
                        sx={{ borderColor: '#ddd', color: '#666' }}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleApplyJob(job.id)}
                        sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
                      >
                        Apply
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
      
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

export default JobAlertDetail; 