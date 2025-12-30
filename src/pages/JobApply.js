import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  Divider,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
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
  },
  {
    id: 'job-2',
    company: 'Microsoft',
    logo: 'M',
    title: 'Senior UI/UX Designer',
    location: 'Toronto, Canada',
    type: 'Full-time',
  },
  {
    id: 'job-3',
    company: 'Meta',
    logo: 'M',
    title: 'Data Analyst',
    location: 'Austin, USA',
    type: 'Full-time',
  }
];

const steps = ['Personal Information', 'Experience & Skills', 'Resume & Cover Letter', 'Review & Submit'];

const JobApply = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState(null);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    website: '',
    workExperience: '',
    education: '',
    skills: '',
    availability: '',
    salary: '',
    resumeUploaded: false,
    coverLetterUploaded: false,
    additionalInfo: '',
    termsAccepted: false
  });

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

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Submit application
      setSuccessDialogOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleFileUpload = (type) => {
    // In a real app, this would handle file uploads
    setFormData({
      ...formData,
      [`${type}Uploaded`]: true
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCloseSuccessDialog = () => {
    setSuccessDialogOpen(false);
    navigate('/job-tracker');
  };

  // Check if step is complete
  const isStepComplete = (step) => {
    switch (step) {
      case 0:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 1:
        return formData.workExperience && formData.education && formData.skills;
      case 2:
        return formData.resumeUploaded;
      case 3:
        return formData.termsAccepted;
      default:
        return false;
    }
  };

  // Render step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                label="Phone"
                fullWidth
                required
                value={formData.phone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                Social Links (Optional)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="linkedin"
                label="LinkedIn URL"
                fullWidth
                value={formData.linkedin}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="github"
                label="GitHub URL"
                fullWidth
                value={formData.github}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="website"
                label="Personal Website"
                fullWidth
                value={formData.website}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="workExperience"
                label="Work Experience"
                multiline
                rows={4}
                fullWidth
                required
                placeholder="Describe your relevant work experience"
                value={formData.workExperience}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="education"
                label="Education"
                multiline
                rows={3}
                fullWidth
                required
                placeholder="Describe your educational background"
                value={formData.education}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="skills"
                label="Skills"
                multiline
                rows={3}
                fullWidth
                required
                placeholder="List your relevant skills"
                value={formData.skills}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Availability</InputLabel>
                <Select
                  name="availability"
                  value={formData.availability}
                  label="Availability"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="immediate">Immediate</MenuItem>
                  <MenuItem value="2weeks">2 Weeks Notice</MenuItem>
                  <MenuItem value="1month">1 Month Notice</MenuItem>
                  <MenuItem value="custom">Custom</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Salary Expectation</InputLabel>
                <Select
                  name="salary"
                  value={formData.salary}
                  label="Salary Expectation"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="range1">$80K - $100K</MenuItem>
                  <MenuItem value="range2">$100K - $120K</MenuItem>
                  <MenuItem value="range3">$120K - $150K</MenuItem>
                  <MenuItem value="range4">$150K+</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 3,
                  border: '1px dashed #ccc',
                  borderRadius: 2,
                  textAlign: 'center',
                  mb: 2,
                  bgcolor: formData.resumeUploaded ? '#F0FFF4' : 'inherit'
                }}
              >
                {formData.resumeUploaded ? (
                  <Box>
                    <CheckCircleIcon sx={{ fontSize: 40, color: '#4CAF50', mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Resume Uploaded
                    </Typography>
                    <Button
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={() => handleFileUpload('resume')}
                    >
                      Replace
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <CloudUploadIcon sx={{ fontSize: 40, color: '#FF6B00', mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Upload Your Resume
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      PDF, DOCX, or TXT (Max 5MB)
                    </Typography>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
                      onClick={() => handleFileUpload('resume')}
                    >
                      Upload Resume
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 3,
                  border: '1px dashed #ccc',
                  borderRadius: 2,
                  textAlign: 'center',
                  bgcolor: formData.coverLetterUploaded ? '#F0FFF4' : 'inherit'
                }}
              >
                {formData.coverLetterUploaded ? (
                  <Box>
                    <CheckCircleIcon sx={{ fontSize: 40, color: '#4CAF50', mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Cover Letter Uploaded
                    </Typography>
                    <Button
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={() => handleFileUpload('coverLetter')}
                    >
                      Replace
                    </Button>
                  </Box>
                ) : (
                  <Box>
                    <CloudUploadIcon sx={{ fontSize: 40, color: '#FF6B00', mb: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      Upload Cover Letter (Optional)
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      PDF, DOCX, or TXT (Max 5MB)
                    </Typography>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ bgcolor: '#FF6B00', '&:hover': { bgcolor: '#e65c00' } }}
                      onClick={() => handleFileUpload('coverLetter')}
                    >
                      Upload Cover Letter
                    </Button>
                  </Box>
                )}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="additionalInfo"
                label="Additional Information (Optional)"
                multiline
                rows={4}
                fullWidth
                placeholder="Any additional information you'd like to share with the employer"
                value={formData.additionalInfo}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mb: 3 }}>
                Please review your application before submitting. You won't be able to make changes after submission.
              </Alert>
              
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Personal Information
              </Typography>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Full Name:</Typography>
                  <Typography variant="body2">{formData.firstName} {formData.lastName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Email:</Typography>
                  <Typography variant="body2">{formData.email}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2">Phone:</Typography>
                  <Typography variant="body2">{formData.phone}</Typography>
                </Grid>
              </Grid>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Experience & Skills
              </Typography>
              <Typography variant="subtitle2">Work Experience:</Typography>
              <Typography variant="body2" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                {formData.workExperience}
              </Typography>
              
              <Typography variant="subtitle2">Education:</Typography>
              <Typography variant="body2" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                {formData.education}
              </Typography>
              
              <Typography variant="subtitle2">Skills:</Typography>
              <Typography variant="body2" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                {formData.skills}
              </Typography>
              
              <Typography variant="subtitle2">Availability:</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {formData.availability || 'Not specified'}
              </Typography>
              
              <Typography variant="subtitle2">Salary Expectation:</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {formData.salary || 'Not specified'}
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Documents
              </Typography>
              <Typography variant="subtitle2">Resume:</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {formData.resumeUploaded ? 'Uploaded' : 'Not uploaded'}
              </Typography>
              
              <Typography variant="subtitle2">Cover Letter:</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                {formData.coverLetterUploaded ? 'Uploaded' : 'Not uploaded'}
              </Typography>
              
              {formData.additionalInfo && (
                <>
                  <Typography variant="subtitle2">Additional Information:</Typography>
                  <Typography variant="body2" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
                    {formData.additionalInfo}
                  </Typography>
                </>
              )}
              
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    name="termsAccepted"
                    required
                  />
                }
                label="I certify that all information provided is true and complete to the best of my knowledge."
              />
            </Grid>
          </Grid>
        );
      default:
        return 'Unknown step';
    }
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
        Back to Job
      </Button>

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
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
              Apply for {job.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {job.company} • {job.location} • {job.type}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Stepper */}
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step Content */}
        <Box sx={{ mt: 2, mb: 4 }}>
          {getStepContent(activeStep)}
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={!isStepComplete(activeStep)}
            sx={{
              bgcolor: '#FF6B00',
              '&:hover': { bgcolor: '#e65c00' }
            }}
          >
            {activeStep === steps.length - 1 ? 'Submit Application' : 'Next'}
          </Button>
        </Box>
      </Paper>

      {/* Success Dialog */}
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
            <CheckCircleIcon sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              Your application for {job.title} at {job.company} has been submitted!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              You can track the status of your application in the Job Tracker section.
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
    </Box>
  );
};

export default JobApply; 