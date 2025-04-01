import { Box, TextField, Typography, Button } from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';

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

const WorkSamples = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
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

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="text"
            color="primary"
            sx={{ color: '#FF5733' }}
            onClick={() => setCurrentStep(6)}
          >
            Skip this Step
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: '#FF5733',
              color: '#fff',
              '&:hover': { bgcolor: '#ff4019' },
              px: 4,
              py: 1,
              borderRadius: '30px',
            }}
          >
            Save and Continue →
          </Button>
        </Box>
      </form>
    </OnboardingLayout>
  );
};

export default WorkSamples; 