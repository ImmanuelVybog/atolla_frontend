import {
  Box,
  TextField,
  Typography,
  Button,
  Chip,
  Autocomplete,
  Paper,
  Container,
  IconButton
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { Add as AddIcon, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

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

const SkillChip = styled(Chip)<{ selected: boolean }>(({ selected }) => ({
  borderRadius: '30px',
  margin: '0.3rem 0.3rem 0.3rem 0',
  padding: '0.2rem 0.5rem',
  backgroundColor: selected ? '#FF5733' : 'transparent',
  color: selected ? 'white' : '#666',
  border: selected ? 'none' : '1px solid #ddd',
  '&:hover': {
    backgroundColor: selected ? '#ff4019' : '#f5f5f5',
  },
}));

const ActionButton = styled(Button)<{ primary?: boolean }>(({ primary }) => ({
  borderRadius: '30px',
  padding: primary ? '0.6rem 1.5rem' : '0.6rem 1rem',
  backgroundColor: primary ? '#FF5733' : 'transparent',
  color: primary ? 'white' : '#FF5733',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: primary ? '#ff4019' : 'rgba(255, 87, 51, 0.08)',
  },
}));

const suggestedSkills = [
  'Full-Stack Development',
  'Cloud Computing',
  'Cybersecurity',
  'Data Science',
  'Mobile Development',
  'DevOps',
  'UI/UX Design',
  'Blockchain',
  'Database Management',
  'Software Testing',
  'Artificial Intelligence',
  'AWS',
];

const SkillsExpertise = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  // Use the proper skillsExpertise property from onboardingData
  const { primarySkills = [], certifications = [] } = onboardingData.skillsExpertise;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(4); // Mark Skills & Expertise step as completed
    setCurrentStep(5);
  };

  const handleSkip = () => {
    markStepCompleted(4); // Mark as completed even when skipping
    setCurrentStep(5);
  };

  const handleAddCertification = () => {
    updateOnboardingData({
      skillsExpertise: {
        ...onboardingData.skillsExpertise,
        certifications: [...certifications, {
          name: '',
          issuingOrganization: '',
          issueDate: '',
        }],
      },
    });
  };

  const handlePreviousStep = () => {
    setCurrentStep(3);
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          {/* Content */}
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
                    value={primarySkills}
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
                    renderTags={() => null} // Don't render chips inside the input
                  />
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                    {suggestedSkills.map((skill) => (
                      <SkillChip
                        key={skill}
                        label={skill}
                        selected={primarySkills.includes(skill)}
                        onClick={() => {
                          if (!primarySkills.includes(skill)) {
                            updateOnboardingData({
                              skillsExpertise: {
                                ...onboardingData.skillsExpertise,
                                primarySkills: [...primarySkills, skill],
                              },
                            });
                          } else {
                            updateOnboardingData({
                              skillsExpertise: {
                                ...onboardingData.skillsExpertise,
                                primarySkills: primarySkills.filter((s: string) => s !== skill),
                              },
                            });
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Certifications & Licenses <Typography component="span" color="text.secondary">(Optional)</Typography>
                  </Typography>
                  <StyledTextField
                    fullWidth
                    placeholder="Enter Certifications & Licenses"
                    value={certifications.map(cert => cert.name).join('\n')}
                    onChange={(e) => {
                      const certNames = e.target.value.split('\n').filter(Boolean);
                      const updatedCerts = certNames.map((name, i) => {
                        return certifications[i] ? 
                          { ...certifications[i], name } : 
                          { name, issuingOrganization: '', issueDate: '' };
                      });
                      
                      updateOnboardingData({
                        skillsExpertise: {
                          ...onboardingData.skillsExpertise,
                          certifications: updatedCerts,
                        },
                      });
                    }}
                    multiline
                    rows={2}
                  />
                  <Button
                    startIcon={<AddIcon />}
                    sx={{ mt: 2, color: '#FF5733', fontWeight: 'normal', textTransform: 'none' }}
                    onClick={handleAddCertification}
                  >
                    Add Certification
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mt: 6, display: 'flex', justifyContent: 'space-between' }}>
                <ActionButton onClick={handleSkip}>
                  Skip this Step
                </ActionButton>
                <ActionButton type="submit" primary endIcon={<KeyboardArrowRight />}>
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