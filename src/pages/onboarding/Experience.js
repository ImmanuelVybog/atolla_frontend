import {
  Box,
  Typography,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext.js';
import OnboardingLayout from '../../components/OnboardingLayout.js';
import { Add as AddIcon, KeyboardArrowRight } from '@mui/icons-material';
import { StyledTextField, ActionButton } from '../../components/styled/FormComponents';
import { FormBox, FormFooter, SectionBox } from '../../components/styled/LayoutComponents';
import { styles } from './styles/Experience.styles';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

const experienceTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
  'Freelance',
  'Other',
];

const defaultExperience = {
  company: '',
  location: '',
  positionTitle: '',
  experienceType: '',
  startMonth: '',
  startYear: '',
  endMonth: '',
  endYear: '',
  currentlyWorking: false,
};

const Experience = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e) => {
    e.preventDefault();
    markStepCompleted(3);
    setCurrentStep(4);
  };

  const handleSkip = () => {
    markStepCompleted(3);
    setCurrentStep(4);
  };

  const handleAddExperience = () => {
    const updatedExperience = [...onboardingData.experience, defaultExperience];
    updateOnboardingData({ experience: updatedExperience });
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={styles.pageTitle}>
        Experience {onboardingData.experience.length > 0 ? `(${onboardingData.experience.length})` : ''}
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <SectionBox>
            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <StyledTextField
                label="Company"
                fullWidth
                placeholder="Enter Company Name"
                value={onboardingData.experience[0]?.company || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].company = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              />
              <StyledTextField
                label="Location"
                fullWidth
                placeholder="Search City"
                value={onboardingData.experience[0]?.location || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].location = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              />
                            <StyledTextField
                label="Position Title"
                fullWidth
                placeholder="Enter Position"
                value={onboardingData.experience[0]?.positionTitle || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].positionTitle = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              />
              <StyledTextField
                select
                label="Experience Type"
                fullWidth
                value={onboardingData.experience[0]?.experienceType || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].experienceType = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              >
                {experienceTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Box>


            <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
              Start Date
            </Typography>
            <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <StyledTextField
                select
                label="Month"
                fullWidth
                value={onboardingData.experience[0]?.startMonth || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].startMonth = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </StyledTextField>
              <StyledTextField
                select
                label="Year"
                fullWidth
                value={onboardingData.experience[0]?.startYear || ''}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = { ...defaultExperience };
                  }
                  updatedExperience[0].startYear = e.target.value;
                  updateOnboardingData({ experience: updatedExperience });
                }}
                required
              >
                {years.map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={onboardingData.experience[0]?.currentlyWorking || false}
                  onChange={(e) => {
                    const updatedExperience = [...onboardingData.experience];
                    if (!updatedExperience[0]) {
                      updatedExperience[0] = { ...defaultExperience };
                    }
                    updatedExperience[0].currentlyWorking = e.target.checked;
                    updateOnboardingData({ experience: updatedExperience });
                  }}
                />
              }
              label="I currently work here"
              sx={{ my: 2 }}
            />

            {!onboardingData.experience[0]?.currentlyWorking && (
              <>
                <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
                  End Date
                </Typography>
                <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <StyledTextField
                    select
                    label="Month"
                    fullWidth
                    value={onboardingData.experience[0]?.endMonth || ''}
                    onChange={(e) => {
                      const updatedExperience = [...onboardingData.experience];
                      if (!updatedExperience[0]) {
                        updatedExperience[0] = { ...defaultExperience };
                      }
                      updatedExperience[0].endMonth = e.target.value;
                      updateOnboardingData({ experience: updatedExperience });
                    }}
                    required={!onboardingData.experience[0]?.currentlyWorking}
                  >
                    {months.map((month) => (
                      <MenuItem key={month} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </StyledTextField>
                  <StyledTextField
                    select
                    label="Year"
                    fullWidth
                    value={onboardingData.experience[0]?.endYear || ''}
                    onChange={(e) => {
                      const updatedExperience = [...onboardingData.experience];
                      if (!updatedExperience[0]) {
                        updatedExperience[0] = { ...defaultExperience };
                      }
                      updatedExperience[0].endYear = e.target.value;
                      updateOnboardingData({ experience: updatedExperience });
                    }}
                    required={!onboardingData.experience[0]?.currentlyWorking}
                  >
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </StyledTextField>
                </Box>
              </>
            )}
          </SectionBox>

          <Button
            startIcon={<AddIcon />}
            onClick={handleAddExperience}
            sx={{ mt: 2, color: 'primary.main', textTransform: 'none' }}
          >
            Add Another Experience
          </Button>
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

export default Experience; 