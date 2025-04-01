import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Stack,
  styled
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { CloudUpload } from '@mui/icons-material';
import { useState } from 'react';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    border: '1px solid #E2E8F0',
    backgroundColor: '#FFFFFF',
    '& fieldset': {
      borderColor: '#E2E8F0',
    },
    '&:hover fieldset': {
      borderColor: '#CBD5E1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5733',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748B',
    fontSize: '0.9rem',
    fontWeight: 500,
    transform: 'translate(14px, 14px) scale(1)',
    '&.Mui-focused': {
      color: '#FF5733',
    },
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, -6px) scale(0.75)',
  },
});

const PrimaryButton = styled(Button)({
  borderRadius: 50,
  textTransform: 'none',
  padding: '12px 24px',
  backgroundColor: '#FF5733',
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '16px',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#E64A2E',
    boxShadow: 'none',
  },
});

const SecondaryButton = styled(Button)({
  borderRadius: 50,
  textTransform: 'none',
  padding: '12px 24px',
  color: '#FF5733',
  fontWeight: 600,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'rgba(255, 87, 51, 0.04)',
  },
});

const UploadButton = styled(Button)({
  textTransform: 'none',
  color: '#FF5733',
  fontWeight: 600,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
}) as typeof Button;

const PersonalDetails = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      updateOnboardingData({
        personalDetails: {
          ...onboardingData.personalDetails,
          resume: file,
        },
      });
    }
  };

  return (
    <OnboardingLayout>
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

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <SecondaryButton
            onClick={() => setCurrentStep(2)}
          >
            Skip this Step
          </SecondaryButton>
          <PrimaryButton
            type="submit"
            endIcon={<span>→</span>}
          >
            Save and Continue
          </PrimaryButton>
        </Box>
      </form>
    </OnboardingLayout>
  );
};

export default PersonalDetails; 