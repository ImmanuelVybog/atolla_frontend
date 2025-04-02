import { FC } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  InputAdornment,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { CloudUpload, KeyboardArrowRight } from '@mui/icons-material';
import { StyledTextField, ActionButton } from '../../components/styled/FormComponents';
import { FormBox, FormFooter } from '../../components/styled/LayoutComponents';
import { styles } from './styles/PersonalDetails.styles';
import { colors } from '../../theme';
import { styled } from '@mui/material/styles';

// Add the VisuallyHiddenInput component
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PersonalDetails: FC = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(1); // Mark Personal Details step as completed
    setCurrentStep(2); // Move to Education step
  };

  const handleSkip = () => {
    markStepCompleted(1); // Mark as completed even when skipping
    setCurrentStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateOnboardingData({
        personalDetails: {
          ...onboardingData.personalDetails,
          resume: e.target.files[0],
        },
      });
    }
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={styles.pageTitle}>
        Personal Details
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">
                First Name
              </Typography>
              <StyledTextField
                fullWidth
                placeholder="Enter your first name"
                value={onboardingData.personalDetails.firstName}
                onChange={(e) =>
                  updateOnboardingData({
                    personalDetails: {
                      ...onboardingData.personalDetails,
                      firstName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">
                Last Name
              </Typography>
              <StyledTextField
                fullWidth
                placeholder="Enter your last name"
                value={onboardingData.personalDetails.lastName}
                onChange={(e) =>
                  updateOnboardingData({
                    personalDetails: {
                      ...onboardingData.personalDetails,
                      lastName: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">
                Email Address
              </Typography>
              <StyledTextField
                fullWidth
                placeholder="Enter your email"
                value={onboardingData.personalDetails.email}
                onChange={(e) =>
                  updateOnboardingData({
                    personalDetails: {
                      ...onboardingData.personalDetails,
                      email: e.target.value,
                    },
                  })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">
                Phone Number
              </Typography>
              <StyledTextField
                fullWidth
                placeholder="Enter Phone Number"
                value={onboardingData.personalDetails.phoneNumber}
                onChange={(e) =>
                  updateOnboardingData({
                    personalDetails: {
                      ...onboardingData.personalDetails,
                      phoneNumber: e.target.value,
                    },
                  })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Upload Resume
              </Typography>
              <Box sx={styles.uploadBox}>
                <Button
                  component="label"
                  variant="text"
                  startIcon={<CloudUpload />}
                  sx={{ color: colors.primary.main }}
                >
                  Upload a File
                  <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileChange}
                    accept=".doc,.docx,.pdf"
                  />
                </Button>
                <Typography variant="body2" sx={styles.fileInfoText}>
                  Supported Format: DOC, DOCX, PDF
                </Typography>
                <Typography variant="body2" sx={styles.fileInfoText}>
                  Max file size: 5 mb
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </FormBox>

        <FormFooter>
          <ActionButton onClick={handleSkip}>
            Skip this Step
          </ActionButton>
          <ActionButton $primary endIcon={<KeyboardArrowRight />} type="submit">
            Save and Continue
          </ActionButton>
        </FormFooter>
      </form>
    </OnboardingLayout>
  );
};

export default PersonalDetails; 