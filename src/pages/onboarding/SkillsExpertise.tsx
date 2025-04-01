import {
  Box,
  TextField,
  Typography,
  Button,
  Chip,
  Autocomplete,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { Add as AddIcon } from '@mui/icons-material';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
});

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
  'React',
  'Node.js',
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'Docker',
  'Kubernetes',
];

const SkillsExpertise = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(5);
  };

  const handleAddCertification = () => {
    updateOnboardingData({
      skills: {
        ...onboardingData.skills,
        certifications: [...onboardingData.skills.certifications, ''],
      },
    });
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
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
              value={onboardingData.skills.primarySkills}
              onChange={(_, newValue) => {
                updateOnboardingData({
                  skills: {
                    ...onboardingData.skills,
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
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              {suggestedSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onClick={() => {
                    if (!onboardingData.skills.primarySkills.includes(skill)) {
                      updateOnboardingData({
                        skills: {
                          ...onboardingData.skills,
                          primarySkills: [...onboardingData.skills.primarySkills, skill],
                        },
                      });
                    }
                  }}
                  sx={{
                    bgcolor: onboardingData.skills.primarySkills.includes(skill)
                      ? '#FF5733'
                      : 'transparent',
                    color: onboardingData.skills.primarySkills.includes(skill) ? '#fff' : '#666',
                    border: '1px solid #ddd',
                    '&:hover': {
                      bgcolor: onboardingData.skills.primarySkills.includes(skill)
                        ? '#ff4019'
                        : '#f5f5f5',
                    },
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
              value={onboardingData.skills.certifications.join('\n')}
              onChange={(e) => {
                const certifications = e.target.value.split('\n').filter(Boolean);
                updateOnboardingData({
                  skills: {
                    ...onboardingData.skills,
                    certifications,
                  },
                });
              }}
              multiline
              rows={4}
            />
            <Button
              startIcon={<AddIcon />}
              sx={{ mt: 2, color: '#FF5733' }}
              onClick={handleAddCertification}
            >
              Add Certification
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="text"
            color="primary"
            sx={{ color: '#FF5733' }}
            onClick={() => setCurrentStep(5)}
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

export default SkillsExpertise; 