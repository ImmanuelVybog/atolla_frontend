import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Stack,
  styled,
  Container,
  Paper
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { CloudUpload, KeyboardArrowRight } from '@mui/icons-material';
import { useState } from 'react';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#d0d0d0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5733',
    },
  },
});

const UploadButton = styled(Button)({
  backgroundColor: '#FFFFFF',
  color: '#FF5733',
  border: '2px solid #FF5733',
  borderRadius: '30px',
  padding: '10px 24px',
  '&:hover': {
    backgroundColor: 'rgba(255, 87, 51, 0.04)',
    border: '2px solid #FF5733',
  },
}) as typeof Button;

const ActionButton = styled(Button)<{ $primary?: boolean }>(({ $primary }) => ({
  borderRadius: '30px',
  padding: $primary ? '0.6rem 1.5rem' : '0.6rem 1rem',
  backgroundColor: $primary ? '#FF5733' : 'transparent',
  color: $primary ? 'white' : '#FF5733',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: $primary ? '#ff4019' : 'rgba(255, 87, 51, 0.08)',
  },
}));

const PersonalDetails = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      updateOnboardingData({
        personalDetails: {
          ...onboardingData.personalDetails,
          resume: file,
        },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(1); // Mark Personal Details step as completed
    setCurrentStep(2); // Move to Education step
  };

  const handleSkip = () => {
    markStepCompleted(1); // Mark as completed even when skipping
    setCurrentStep(2);
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Personal Details
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    First Name
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter your first name"
                    value={onboardingData.personalDetails?.firstName || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        personalDetails: {
                          ...onboardingData.personalDetails,
                          firstName: e.target.value,
                        },
                      })
                    }
                    InputProps={{
                      sx: { p: 1 }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    Last Name
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter your last name"
                    value={onboardingData.personalDetails?.lastName || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        personalDetails: {
                          ...onboardingData.personalDetails,
                          lastName: e.target.value,
                        },
                      })
                    }
                    InputProps={{
                      sx: { p: 1 }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    Email Address
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter your email"
                    value={onboardingData.personalDetails?.email || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        personalDetails: {
                          ...onboardingData.personalDetails,
                          email: e.target.value,
                        },
                      })
                    }
                    InputProps={{
                      sx: { p: 1 }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1, 
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    Phone Number
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter Phone Number"
                    value={onboardingData.personalDetails?.phoneNumber || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        personalDetails: {
                          ...onboardingData.personalDetails,
                          phoneNumber: e.target.value,
                        },
                      })
                    }
                    InputProps={{
                      sx: { p: 1 }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                      Upload Resume
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Upload your Resume to automate this process
                    </Typography>
                    <Box
                      sx={{
                        border: '1px dashed #E2E8F0',
                        borderRadius: 2,
                        p: 4,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '200px',
                        backgroundColor: '#F8FAFC',
                      }}
                    >
                      <Box 
                        sx={{ 
                          mb: 2,
                          p: 1,
                          bgcolor: '#fff',
                          borderRadius: '50%',
                          width: 50,
                          height: 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <CloudUpload sx={{ color: '#FF5733', fontSize: 28 }} />
                      </Box>
                      <UploadButton
                        component="label"
                        sx={{ mb: 2 }}
                      >
                        Upload a File
                        <input
                          type="file"
                          hidden
                          accept=".doc,.docx,.pdf"
                          onChange={handleFileChange}
                        />
                      </UploadButton>
                      {fileName && (
                        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
                          File selected: {fileName}
                        </Typography>
                      )}
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Supported Format: DOC, DOCX, PDF
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Max file size: 5 mb
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

              <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                <ActionButton onClick={handleSkip}>
                  Skip this Step
                </ActionButton>
                <ActionButton $primary endIcon={<KeyboardArrowRight />} type="submit">
                  Save and Continue
                </ActionButton>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </OnboardingLayout>
  );
};

export default PersonalDetails; 