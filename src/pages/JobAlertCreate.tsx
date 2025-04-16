import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Autocomplete,
  Grid,
  IconButton,
  FormHelperText,
  Alert,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

// Interface for job alert form data
interface JobAlertFormData {
  title: string;
  keywords: string[];
  location: string;
  jobTypes: string[];
  frequency: string;
  email: string;
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

// Popular keywords suggestions
const keywordSuggestions = [
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'DevOps',
  'AWS',
  'UI/UX',
  'Product Manager',
  'Data Analyst',
  'Machine Learning',
  'Frontend',
  'Backend',
  'Full Stack'
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

const JobAlertCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<JobAlertFormData>({
    title: '',
    keywords: [],
    location: '',
    jobTypes: [],
    frequency: 'Daily',
    email: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle select change
  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle keywords change
  const handleKeywordsChange = (_event: React.SyntheticEvent, newValue: string[]) => {
    setFormData({
      ...formData,
      keywords: newValue
    });
    
    // Clear error for this field if it exists
    if (errors.keywords) {
      setErrors({
        ...errors,
        keywords: ''
      });
    }
  };
  
  // Handle job types change
  const handleJobTypesChange = (_event: React.SyntheticEvent, newValue: string[]) => {
    setFormData({
      ...formData,
      jobTypes: newValue
    });
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Alert title is required';
    }
    
    if (formData.keywords.length === 0) {
      newErrors.keywords = 'At least one keyword is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would submit the form data to an API
      console.log('Submitting form data:', formData);
      setShowSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        navigate('/job-alerts');
      }, 2000);
    }
  };
  
  // Handle go back
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <Box sx={{ p: 3 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={handleGoBack}
        sx={{ mb: 3 }}
      >
        Back to Job Alerts
      </Button>
      
      <Typography variant="h4" sx={{ color: '#FF6B00', mb: 3 }}>
        Create Job Alert
      </Typography>
      
      {showSuccess && (
        <Alert 
          severity="success" 
          sx={{ mb: 3 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowSuccess(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Job alert created successfully! Redirecting...
        </Alert>
      )}
      
      <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
          p: 3, 
          borderRadius: 2,
          boxShadow: 'none',
          border: '1px solid #eee'
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Alert Details
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Set up your job alert to receive notifications for matching job opportunities.
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Alert Title"
              placeholder="e.g., Frontend Developer Jobs"
              fullWidth
              required
              value={formData.title}
              onChange={handleInputChange}
              error={!!errors.title}
              helperText={errors.title}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Autocomplete
              multiple
              id="keywords"
              options={keywordSuggestions}
              freeSolo
              value={formData.keywords}
              onChange={handleKeywordsChange}
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
                  error={!!errors.keywords}
                  helperText={errors.keywords || "Enter skills, job titles, or keywords"}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="location"
              options={locationSuggestions}
              freeSolo
              value={formData.location}
              onChange={(_event, newValue) => {
                setFormData({
                  ...formData,
                  location: newValue || ''
                });
                
                // Clear error for this field if it exists
                if (errors.location) {
                  setErrors({
                    ...errors,
                    location: ''
                  });
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Location"
                  placeholder="e.g., New York, Remote"
                  required
                  error={!!errors.location}
                  helperText={errors.location}
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <Autocomplete
              multiple
              id="jobTypes"
              options={jobTypeOptions}
              value={formData.jobTypes}
              onChange={handleJobTypesChange}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip 
                    label={option} 
                    {...getTagProps({ index })} 
                    size="small"
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Job Types"
                  placeholder="Select job types..."
                />
              )}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="frequency-label">Alert Frequency</InputLabel>
              <Select
                labelId="frequency-label"
                id="frequency"
                name="frequency"
                value={formData.frequency}
                label="Alert Frequency"
                onChange={handleSelectChange}
                sx={{ borderRadius: 6 }}
              >
                {frequencyOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>How often you want to receive alerts</FormHelperText>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email for Alerts"
              type="email"
              fullWidth
              required
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email || "We'll send job matches to this email"}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>
          
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button 
              variant="outlined" 
              onClick={handleGoBack}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
            >
              Create Alert
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default JobAlertCreate; 