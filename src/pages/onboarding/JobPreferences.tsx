import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Autocomplete,
  Chip,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
});

const suggestedRoles = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Data Scientist',
  'UI/UX Designer',
  'Product Manager',
  'Project Manager',
  'Business Analyst',
  'QA Engineer',
  'Technical Writer',
];

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'E-commerce',
  'Manufacturing',
  'Consulting',
  'Media & Entertainment',
  'Real Estate',
  'Energy',
];

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship',
];

const workModes = [
  'On-site',
  'Remote',
  'Hybrid',
];

const noticePeriods = [
  'Immediately',
  '15 Days',
  '30 Days',
  '60 Days',
  '90 Days',
];

const JobPreferences = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard after completing onboarding
    window.location.href = '/dashboard';
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Job Preferences
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gap: 4 }}>
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
              Preferred Roles
            </Typography>
            <Autocomplete
              multiple
              options={suggestedRoles}
              value={onboardingData.jobPreferences.preferredRoles}
              onChange={(_, newValue) => {
                updateOnboardingData({
                  jobPreferences: {
                    ...onboardingData.jobPreferences,
                    preferredRoles: newValue,
                  },
                });
              }}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  placeholder="Select Preferred Roles"
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

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StyledTextField
              select
              label="Preferred Industry"
              fullWidth
              required
              value={onboardingData.jobPreferences.preferredIndustry}
              onChange={(e) =>
                updateOnboardingData({
                  jobPreferences: {
                    ...onboardingData.jobPreferences,
                    preferredIndustry: e.target.value,
                  },
                })
              }
            >
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </StyledTextField>

            <StyledTextField
              select
              label="Job Type"
              fullWidth
              required
              value={onboardingData.jobPreferences.preferredJobType}
              onChange={(e) =>
                updateOnboardingData({
                  jobPreferences: {
                    ...onboardingData.jobPreferences,
                    preferredJobType: e.target.value,
                  },
                })
              }
            >
              {jobTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </StyledTextField>
          </Box>

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StyledTextField
              select
              label="Work Mode"
              fullWidth
              required
              value={onboardingData.jobPreferences.preferredWorkMode}
              onChange={(e) =>
                updateOnboardingData({
                  jobPreferences: {
                    ...onboardingData.jobPreferences,
                    preferredWorkMode: e.target.value,
                  },
                })
              }
            >
              {workModes.map((mode) => (
                <MenuItem key={mode} value={mode}>
                  {mode}
                </MenuItem>
              ))}
            </StyledTextField>

            <StyledTextField
              select
              label="Notice Period"
              fullWidth
              required
              value={onboardingData.jobPreferences.noticePeriod}
              onChange={(e) =>
                updateOnboardingData({
                  jobPreferences: {
                    ...onboardingData.jobPreferences,
                    noticePeriod: e.target.value,
                  },
                })
              }
            >
              {noticePeriods.map((period) => (
                <MenuItem key={period} value={period}>
                  {period}
                </MenuItem>
              ))}
            </StyledTextField>
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
              Expected Salary Range (Annual)
            </Typography>
            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <StyledTextField
                label="Minimum"
                fullWidth
                required
                type="number"
                placeholder="0"
                value={onboardingData.jobPreferences.expectedSalaryRange.min}
                onChange={(e) =>
                  updateOnboardingData({
                    jobPreferences: {
                      ...onboardingData.jobPreferences,
                      expectedSalaryRange: {
                        ...onboardingData.jobPreferences.expectedSalaryRange,
                        min: e.target.value,
                      },
                    },
                  })
                }
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                }}
              />
              <StyledTextField
                label="Maximum"
                fullWidth
                required
                type="number"
                placeholder="0"
                value={onboardingData.jobPreferences.expectedSalaryRange.max}
                onChange={(e) =>
                  updateOnboardingData({
                    jobPreferences: {
                      ...onboardingData.jobPreferences,
                      expectedSalaryRange: {
                        ...onboardingData.jobPreferences.expectedSalaryRange,
                        max: e.target.value,
                      },
                    },
                  })
                }
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="text"
            color="primary"
            sx={{ color: '#FF5733' }}
            onClick={() => window.location.href = '/dashboard'}
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
            Complete Setup →
          </Button>
        </Box>
      </form>
    </OnboardingLayout>
  );
};

export default JobPreferences; 