import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Container,
  Paper,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext';
import OnboardingLayout from '../../components/OnboardingLayout';
import { styled } from '@mui/material/styles';
import { Add as AddIcon } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
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

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

const degreeTypes = [
  'High School',
  'Associate\'s Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctorate',
  'Other',
];

const defaultEducation = {
  schoolName: '',
  major: '',
  degree: '',
  gpa: '',
  startDate: {
    month: '',
    year: '',
  },
  endDate: {
    month: '',
    year: '',
  },
  currentlyStudying: false,
};

const Education = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    markStepCompleted(2);
    setCurrentStep(3);
  };

  const handleSkip = () => {
    markStepCompleted(2);
    setCurrentStep(3);
  };

  const handleAddEducation = () => {
    const updatedEducation = [...onboardingData.education, defaultEducation];
    updateOnboardingData({ education: updatedEducation });
  };

  return (
    <OnboardingLayout>
      <Container maxWidth="md">
        <Paper sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
              Education
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'grid', gap: 3 }}>
                <StyledTextField
                  label="School Name"
                  fullWidth
                  placeholder="Enter School Name"
                  value={onboardingData.education[0]?.schoolName || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = defaultEducation;
                    }
                    updatedEducation[0] = {
                      ...updatedEducation[0],
                      schoolName: e.target.value,
                    };
                    updateOnboardingData({ education: updatedEducation });
                  }}
                  required
                />

                <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: '2fr 1fr' }}>
                  <StyledTextField
                    label="Major"
                    fullWidth
                    placeholder="Enter Major"
                    value={onboardingData.education[0]?.major || ''}
                    onChange={(e) => {
                      const updatedEducation = [...onboardingData.education];
                      if (!updatedEducation[0]) {
                        updatedEducation[0] = defaultEducation;
                      }
                      updatedEducation[0] = {
                        ...updatedEducation[0],
                        major: e.target.value,
                      };
                      updateOnboardingData({ education: updatedEducation });
                    }}
                    required
                  />
                  <StyledTextField
                    label="GPA"
                    fullWidth
                    placeholder="Enter GPA"
                    value={onboardingData.education[0]?.gpa || ''}
                    onChange={(e) => {
                      const updatedEducation = [...onboardingData.education];
                      if (!updatedEducation[0]) {
                        updatedEducation[0] = defaultEducation;
                      }
                      updatedEducation[0] = {
                        ...updatedEducation[0],
                        gpa: e.target.value,
                      };
                      updateOnboardingData({ education: updatedEducation });
                    }}
                  />
                </Box>

                <StyledTextField
                  select
                  label="Degree"
                  fullWidth
                  value={onboardingData.education[0]?.degree || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = defaultEducation;
                    }
                    updatedEducation[0] = {
                      ...updatedEducation[0],
                      degree: e.target.value,
                    };
                    updateOnboardingData({ education: updatedEducation });
                  }}
                  required
                >
                  {degreeTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </StyledTextField>

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
                        value={onboardingData.education[0]?.startDate.month || ''}
                        onChange={(e) => {
                          const updatedEducation = [...onboardingData.education];
                          if (!updatedEducation[0]) {
                            updatedEducation[0] = defaultEducation;
                          }
                          updatedEducation[0] = {
                            ...updatedEducation[0],
                            startDate: {
                              ...updatedEducation[0].startDate,
                              month: e.target.value,
                            },
                          };
                          updateOnboardingData({ education: updatedEducation });
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
                        value={onboardingData.education[0]?.startDate.year || ''}
                        onChange={(e) => {
                          const updatedEducation = [...onboardingData.education];
                          if (!updatedEducation[0]) {
                            updatedEducation[0] = defaultEducation;
                          }
                          updatedEducation[0] = {
                            ...updatedEducation[0],
                            startDate: {
                              ...updatedEducation[0].startDate,
                              year: e.target.value,
                            },
                          };
                          updateOnboardingData({ education: updatedEducation });
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
                        value={onboardingData.education[0]?.endDate.month || ''}
                        onChange={(e) => {
                          const updatedEducation = [...onboardingData.education];
                          if (!updatedEducation[0]) {
                            updatedEducation[0] = defaultEducation;
                          }
                          updatedEducation[0] = {
                            ...updatedEducation[0],
                            endDate: {
                              ...updatedEducation[0].endDate,
                              month: e.target.value,
                            },
                          };
                          updateOnboardingData({ education: updatedEducation });
                        }}
                        required={!onboardingData.education[0]?.currentlyStudying}
                        disabled={onboardingData.education[0]?.currentlyStudying}
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
                        value={onboardingData.education[0]?.endDate.year || ''}
                        onChange={(e) => {
                          const updatedEducation = [...onboardingData.education];
                          if (!updatedEducation[0]) {
                            updatedEducation[0] = defaultEducation;
                          }
                          updatedEducation[0] = {
                            ...updatedEducation[0],
                            endDate: {
                              ...updatedEducation[0].endDate,
                              year: e.target.value,
                            },
                          };
                          updateOnboardingData({ education: updatedEducation });
                        }}
                        required={!onboardingData.education[0]?.currentlyStudying}
                        disabled={onboardingData.education[0]?.currentlyStudying}
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
                      checked={onboardingData.education[0]?.currentlyStudying || false}
                      onChange={(e) => {
                        const updatedEducation = [...onboardingData.education];
                        if (!updatedEducation[0]) {
                          updatedEducation[0] = defaultEducation;
                        }
                        updatedEducation[0] = {
                          ...updatedEducation[0],
                          currentlyStudying: e.target.checked,
                        };
                        updateOnboardingData({ education: updatedEducation });
                      }}
                    />
                  }
                  label="I currently study here"
                />
              </Box>

              <Button
                startIcon={<AddIcon />}
                sx={{ mt: 3, color: '#FF5733' }}
                onClick={handleAddEducation}
              >
                Add Education
              </Button>

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

export default Education; 