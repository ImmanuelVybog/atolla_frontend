import { Box, Typography, Button } from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext.js';
import OnboardingLayout from '../../components/OnboardingLayout.js';
import { styled } from '@mui/material/styles';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';

import { StyledTextField, ActionButton } from '../../components/styled/FormComponents';
import { FormBox, FormFooter, SectionBox } from '../../components/styled/LayoutComponents';
import { styles } from './styles/WorkSamples.styles';
import { colors } from '../../theme/index.js';

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
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e) => {
    e.preventDefault();
    markStepCompleted(5);
    setCurrentStep(6);
  };

  const handleSkip = () => {
    markStepCompleted(5);
    setCurrentStep(6);
  };

  const handleFileChange = (e) => {
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
      <Typography variant="h4" sx={styles.pageTitle}>
        Resume & Work Samples
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <SectionBox>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
              Upload Resume
            </Typography>
            <Box sx={styles.uploadBox}>
              <Button
                component="label"
                variant="text"
                startIcon={<CloudUploadIcon />}
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
          </SectionBox>

          <SectionBox>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
              Portfolio Link <Typography component="span" sx={styles.optionalLabel}>(Optional)</Typography>
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
          </SectionBox>

          <SectionBox>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
              Cover Letter <Typography component="span" sx={styles.optionalLabel}>(Optional)</Typography>
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
          </SectionBox>
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

export default WorkSamples; 