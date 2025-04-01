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

const degreeTypes = [
  'High School',
  'Associate\'s Degree',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctorate',
  'Other',
];

const Education = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handleAddEducation = () => {
    updateOnboardingData({
      education: [
        ...onboardingData.education,
        {
          schoolName: '',
          major: '',
          degreeType: '',
          gpa: '',
          startMonth: '',
          startYear: '',
          endMonth: '',
          endYear: '',
          currentlyStudying: false,
        },
      ],
    });
  };

  return (
    <OnboardingLayout>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Education {onboardingData.education.length > 0 ? onboardingData.education.length : '1'}
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
                updatedEducation[0] = {
                  schoolName: '',
                  major: '',
                  degreeType: '',
                  gpa: '',
                  startMonth: '',
                  startYear: '',
                  endMonth: '',
                  endYear: '',
                  currentlyStudying: false,
                };
              }
              updatedEducation[0].schoolName = e.target.value;
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
                  updatedEducation[0] = {
                    schoolName: '',
                    major: '',
                    degreeType: '',
                    gpa: '',
                    startMonth: '',
                    startYear: '',
                    endMonth: '',
                    endYear: '',
                    currentlyStudying: false,
                  };
                }
                updatedEducation[0].major = e.target.value;
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
                  updatedEducation[0] = {
                    schoolName: '',
                    major: '',
                    degreeType: '',
                    gpa: '',
                    startMonth: '',
                    startYear: '',
                    endMonth: '',
                    endYear: '',
                    currentlyStudying: false,
                  };
                }
                updatedEducation[0].gpa = e.target.value;
                updateOnboardingData({ education: updatedEducation });
              }}
            />
          </Box>

          <StyledTextField
            select
            label="Degree Type"
            fullWidth
            value={onboardingData.education[0]?.degreeType || ''}
            onChange={(e) => {
              const updatedEducation = [...onboardingData.education];
              if (!updatedEducation[0]) {
                updatedEducation[0] = {
                  schoolName: '',
                  major: '',
                  degreeType: '',
                  gpa: '',
                  startMonth: '',
                  startYear: '',
                  endMonth: '',
                  endYear: '',
                  currentlyStudying: false,
                };
              }
              updatedEducation[0].degreeType = e.target.value;
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
                  value={onboardingData.education[0]?.startMonth || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = {
                        schoolName: '',
                        major: '',
                        degreeType: '',
                        gpa: '',
                        startMonth: '',
                        startYear: '',
                        endMonth: '',
                        endYear: '',
                        currentlyStudying: false,
                      };
                    }
                    updatedEducation[0].startMonth = e.target.value;
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
                  value={onboardingData.education[0]?.startYear || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = {
                        schoolName: '',
                        major: '',
                        degreeType: '',
                        gpa: '',
                        startMonth: '',
                        startYear: '',
                        endMonth: '',
                        endYear: '',
                        currentlyStudying: false,
                      };
                    }
                    updatedEducation[0].startYear = e.target.value;
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
                  value={onboardingData.education[0]?.endMonth || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = {
                        schoolName: '',
                        major: '',
                        degreeType: '',
                        gpa: '',
                        startMonth: '',
                        startYear: '',
                        endMonth: '',
                        endYear: '',
                        currentlyStudying: false,
                      };
                    }
                    updatedEducation[0].endMonth = e.target.value;
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
                  value={onboardingData.education[0]?.endYear || ''}
                  onChange={(e) => {
                    const updatedEducation = [...onboardingData.education];
                    if (!updatedEducation[0]) {
                      updatedEducation[0] = {
                        schoolName: '',
                        major: '',
                        degreeType: '',
                        gpa: '',
                        startMonth: '',
                        startYear: '',
                        endMonth: '',
                        endYear: '',
                        currentlyStudying: false,
                      };
                    }
                    updatedEducation[0].endYear = e.target.value;
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
                    updatedEducation[0] = {
                      schoolName: '',
                      major: '',
                      degreeType: '',
                      gpa: '',
                      startMonth: '',
                      startYear: '',
                      endMonth: '',
                      endYear: '',
                      currentlyStudying: false,
                    };
                  }
                  updatedEducation[0].currentlyStudying = e.target.checked;
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

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button
            variant="text"
            color="primary"
            sx={{ color: '#FF5733' }}
            onClick={() => setCurrentStep(3)}
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

export default Education; 