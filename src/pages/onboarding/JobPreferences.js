
import {
  Box,
  Typography,
  MenuItem,
  Autocomplete,
  Chip,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext.js';
import OnboardingLayout from '../../components/OnboardingLayout.js';
import { KeyboardArrowRight } from '@mui/icons-material';
import { StyledTextField, ActionButton } from '../../components/styled/FormComponents';
import { FormBox, FormFooter, SectionBox } from '../../components/styled/LayoutComponents';
import { styles } from './styles/JobPreferences.styles';

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
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e) => {
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
      <Typography variant="h4" sx={styles.pageTitle}>
        Job Preferences
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <SectionBox>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
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
                    sx={styles.chipStyles}
                  />
                ))
              }
            />
          </SectionBox>

          <SectionBox>
            <Box sx={styles.gridContainer}>
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
          </SectionBox>

          <SectionBox>
            <Box sx={styles.gridContainer}>
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
          </SectionBox>

          <SectionBox>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
              Expected Salary Range (Annual)
            </Typography>
            <Box sx={styles.gridContainer}>
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
                  startAdornment: <Typography sx={styles.salaryLabel}>$</Typography>,
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
                  startAdornment: <Typography sx={styles.salaryLabel}>$</Typography>,
                }}
              />
            </Box>
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

export default JobPreferences; 