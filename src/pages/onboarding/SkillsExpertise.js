
import {
  Box,
  Typography,
  Autocomplete,
} from '@mui/material';
import { useOnboarding } from '../../context/OnboardingContext.js';
import OnboardingLayout from '../../components/OnboardingLayout.js';
import { KeyboardArrowRight } from '@mui/icons-material';
import { StyledTextField, ActionButton, StyledChip } from '../../components/styled/FormComponents';
import { FormBox, FormFooter } from '../../components/styled/LayoutComponents';
import { styles } from './styles/SkillsExpertise.styles';

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

const SkillsExpertise = () => {
  const { onboardingData, updateOnboardingData, setCurrentStep, markStepCompleted } = useOnboarding();

  const handleSubmit = (e) => {
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
      <Typography variant="h4" sx={styles.pageTitle}>
        Skills & Expertise
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormBox>
          <Box>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
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
                  <StyledChip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                    selected={true}
                  />
                ))
              }
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={styles.sectionTitle}>
              Certifications & Licenses <Typography component="span" sx={styles.optionalLabel}>(Optional)</Typography>
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

export default SkillsExpertise; 