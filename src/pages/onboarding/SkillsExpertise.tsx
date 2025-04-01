import { FC } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  Autocomplete,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { KeyboardArrowRight } from '@mui/icons-material';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    '&:hover fieldset': {
      borderColor: '#FF5733',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5733',
    },
  },
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

const suggestedSkills = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'React',
  'Node.js',
  'SQL',
  'AWS',
  'Docker',
  'Kubernetes',
  'Machine Learning',
  'Data Science',
  'UI/UX Design',
  'Project Management',
  'Agile',
];

const SkillsExpertise: FC = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(4); // Mark Skills & Expertise step as completed
    setCurrentStep(5); // Move to Work Samples step
  };

  const handleSkip = () => {
    markStepCompleted(4); // Mark as completed even when skipping
    setCurrentStep(5);
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Skills & Expertise
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'grid', gap: 4 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Primary Skills
                  </Typography>
                  <Autocomplete
                    multiple
                    options={suggestedSkills}
                    value={onboardingData.skillsExpertise.primarySkills}
                    onChange={(_, newValue) => {
                      updateOnboardingData({
                        skillsExpertise: {
                          ...onboardingData.skillsExpertise,
                          primarySkills: newValue,
                        },
                      });
                    }}
                    renderInput={(params) => (
                      <StyledTextField
                        {...params}
                        placeholder="Search Primary Skills"
                        variant="outlined"
                      />
                    )}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          {...getTagProps({ index })}
                          key={option}
                          label={option}
                          sx={{
                            bgcolor: '#FF5733',
                            color: '#fff',
                            '& .MuiChip-deleteIcon': {
                              color: '#fff',
                            },
                          }}
                        />
                      ))
                    }
                  />
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Certifications & Licenses <Typography component="span" color="text.secondary">(Optional)</Typography>
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter Certifications & Licenses"
                    multiline
                    rows={2}
                    value={onboardingData.skillsExpertise.certifications.map(cert => cert.name).join('\n')}
                    onChange={(e) => {
                      const certNames = e.target.value.split('\n').filter(Boolean);
                      const updatedCerts = certNames.map((name, i) => {
                        return onboardingData.skillsExpertise.certifications[i] ? 
                          { ...onboardingData.skillsExpertise.certifications[i], name } : 
                          { name, issuingOrganization: '', issueDate: '' };
                      });
                      
                      updateOnboardingData({
                        skillsExpertise: {
                          ...onboardingData.skillsExpertise,
                          certifications: updatedCerts,
                        },
                      });
                    }}
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

export default SkillsExpertise; 