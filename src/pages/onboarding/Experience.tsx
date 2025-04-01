import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
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

const Experience = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(4);
  };

  const handleAddExperience = () => {
    updateOnboardingData({
      experience: [
        ...onboardingData.experience,
        {
          company: '',
          location: '',
          positionTitle: '',
          experienceType: '',
          startMonth: '',
          startYear: '',
          endMonth: '',
          endYear: '',
          currentlyWorking: false,
        },
      ],
    });
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Experience {onboardingData.experience.length > 0 ? onboardingData.experience.length : '1'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gap: 3 }}>
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StyledTextField
              label="Company"
              fullWidth
              placeholder="Enter Company Name"
              value={onboardingData.experience[0]?.company || ''}
              onChange={(e) => {
                const updatedExperience = [...onboardingData.experience];
                if (!updatedExperience[0]) {
                  updatedExperience[0] = {
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
                  updatedExperience[0] = {
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
                }
                updatedExperience[0].location = e.target.value;
                updateOnboardingData({ experience: updatedExperience });
              }}
              required
            />
          </Box>

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StyledTextField
              label="Position Title"
              fullWidth
              placeholder="Enter Major"
              value={onboardingData.experience[0]?.positionTitle || ''}
              onChange={(e) => {
                const updatedExperience = [...onboardingData.experience];
                if (!updatedExperience[0]) {
                  updatedExperience[0] = {
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
                  updatedExperience[0] = {
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

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Start Date
              </Typography>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <StyledTextField
                  select
                  label="Month"
                  fullWidth
                  value={onboardingData.experience[0]?.startMonth || ''}
                  onChange={(e) => {
                    const updatedExperience = [...onboardingData.experience];
                    if (!updatedExperience[0]) {
                      updatedExperience[0] = {
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
                      updatedExperience[0] = {
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
                    }
                    updatedExperience[0].startYear = e.target.value;
                    updateOnboardingData({ experience: updatedExperience });
                  }}
                  required
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year.toString()}>
                      {year}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                End Date
              </Typography>
              <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <StyledTextField
                  select
                  label="Month"
                  fullWidth
                  value={onboardingData.experience[0]?.endMonth || ''}
                  onChange={(e) => {
                    const updatedExperience = [...onboardingData.experience];
                    if (!updatedExperience[0]) {
                      updatedExperience[0] = {
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
                    }
                    updatedExperience[0].endMonth = e.target.value;
                    updateOnboardingData({ experience: updatedExperience });
                  }}
                  required={!onboardingData.experience[0]?.currentlyWorking}
                  disabled={onboardingData.experience[0]?.currentlyWorking}
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
                      updatedExperience[0] = {
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
                    }
                    updatedExperience[0].endYear = e.target.value;
                    updateOnboardingData({ experience: updatedExperience });
                  }}
                  required={!onboardingData.experience[0]?.currentlyWorking}
                  disabled={onboardingData.experience[0]?.currentlyWorking}
                >
                  {years.map((year) => (
                    <MenuItem key={year} value={year.toString()}>
                      {year}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </Box>
            </Box>
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={onboardingData.experience[0]?.currentlyWorking || false}
                onChange={(e) => {
                  const updatedExperience = [...onboardingData.experience];
                  if (!updatedExperience[0]) {
                    updatedExperience[0] = {
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
                  }
                  updatedExperience[0].currentlyWorking = e.target.checked;
                  updateOnboardingData({ experience: updatedExperience });
                }}
              />
            }
            label="I currently work here"
          />
        </Box>

        <Button
          startIcon={<AddIcon />}
          sx={{ mt: 3, color: '#FF5733' }}
          onClick={handleAddExperience}
        >
          Add Experience
        </Button>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="text"
            color="primary"
            sx={{ color: '#FF5733' }}
            onClick={() => setCurrentStep(4)}
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

export default Experience; 