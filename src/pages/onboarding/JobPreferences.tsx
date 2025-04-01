import { FC } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Autocomplete,
  Chip,
  Container,
  Paper,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { KeyboardArrowRight } from '@mui/icons-material';

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

const JobPreferences: FC = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(6); // Mark Job Preferences step as completed
    setCurrentStep(7); // Move to next step
  };

  const handleSkip = () => {
    markStepCompleted(6); // Mark as completed even when skipping
    setCurrentStep(7);
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
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

export default JobPreferences; 