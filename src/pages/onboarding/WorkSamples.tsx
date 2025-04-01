import { Box, TextField, Typography, Button, Container, Paper } from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';
import { FC } from 'react';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
});

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

const WorkSamples: FC = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(5);
    setCurrentStep(6);
  };

  const handleSkip = () => {
    markStepCompleted(5);
    setCurrentStep(6);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateOnboardingData({
        workSamples: {
          ...onboardingData.workSamples,
          resume: e.target.files[0],
        },
      });
    }
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Resume & Work Samples
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'grid', gap: 4 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Upload Resume
                  </Typography>
                  <Box
                    sx={{
                      border: '2px dashed #ddd',
                      borderRadius: 2,
                      p: 3,
                      textAlign: 'center',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#FF5733',
                      },
                    }}
                  >
                    <Button
                      component="label"
                      variant="text"
                      startIcon={<CloudUploadIcon />}
                      sx={{ color: '#FF5733' }}
                    >
                      Upload a File
                      <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                        accept=".doc,.docx,.pdf"
                      />
                    </Button>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Supported Format: DOC, DOCX, PDF
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Max file size: 5 mb
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Portfolio Link <Typography component="span" color="text.secondary">(Optional)</Typography>
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter Portfolio URL"
                    value={onboardingData.workSamples.portfolioLink || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        workSamples: {
                          ...onboardingData.workSamples,
                          portfolioLink: e.target.value,
                        },
                      })
                    }
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Cover Letter <Typography component="span" color="text.secondary">(Optional)</Typography>
                  </Typography>
                  <StyledTextField
                    fullWidth
                    multiline
                    rows={6}
                    placeholder="Enter Cover Letter"
                    value={onboardingData.workSamples.coverLetter || ''}
                    onChange={(e) =>
                      updateOnboardingData({
                        workSamples: {
                          ...onboardingData.workSamples,
                          coverLetter: e.target.value,
                        },
                      })
                    }
                  />
                </Box>
              </Box>

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

export default WorkSamples; 