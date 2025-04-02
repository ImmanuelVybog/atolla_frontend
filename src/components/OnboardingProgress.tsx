import { Box, styled } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import { colors } from '../theme';

const steps = [
  { label: 'Personal Details', path: '/onboarding/personal-details' },
  { label: 'Education', path: '/onboarding/education' },
  { label: 'Experience', path: '/onboarding/experience' },
  { label: 'Skills & Expertise', path: '/onboarding/skills-expertise' },
  { label: 'Resume & Work Samples', path: '/onboarding/work-samples' },
  { label: 'Job Preferences', path: '/onboarding/job-preferences' },
];

interface OnboardingProgressProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const StepTab = styled(Box)<{ active: boolean; completed: boolean }>(({ active, completed }) => ({
  padding: '12px 0',
  color: active ? colors.primary.main : completed ? colors.text.primary : colors.text.secondary,
  fontWeight: active ? 'bold' : 'normal',
  cursor: completed || active ? 'pointer' : 'default',
  textAlign: 'center',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: completed || active ? colors.primary.main : colors.text.secondary,
  }
}));

const OnboardingProgress: React.FC<OnboardingProgressProps> = () => {
  const { currentStep, setCurrentStep, completedSteps } = useOnboarding();
  const navigate = useNavigate();

  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleStepClick = (stepIndex: number) => {
    // Allow navigation to completed steps or the next available step
    if (completedSteps.includes(stepIndex + 1) || stepIndex + 1 === currentStep) {
      setCurrentStep(stepIndex + 1);
      navigate(steps[stepIndex].path);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      navigate(steps[prevStep - 1].path);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      navigate(steps[nextStep - 1].path);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Navigation and Tabs */}
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative', 
          p: 2,
        }}
      >
        {/* Left Arrow - Hide on first page */}
        {currentStep > 1 && (
          <IconButton
            onClick={handlePrevious}
            sx={{ color: colors.text.primary }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        )}
        {/* Placeholder for spacing when left arrow is hidden */}
        {currentStep === 1 && <Box sx={{ width: 48, height: 48 }} />}

        {/* Step Tabs */}
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'space-between', mx: 1, overflowX: 'auto' }}>
          {steps.map((step, index) => (
            <StepTab
              key={index}
              active={index + 1 === currentStep}
              completed={completedSteps.includes(index + 1)}
              onClick={() => handleStepClick(index)}
              sx={{ 
                minWidth: '100px',
                px: 1,
                fontSize: { xs: '12px', sm: '14px' }
              }}
            >
              {step.label}
            </StepTab>
          ))}
        </Box>

        {/* Right Arrow - Hide on last page */}
        {currentStep < steps.length && (
          <IconButton
            onClick={handleNext}
            sx={{ color: colors.text.primary }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        )}
        {/* Placeholder for spacing when right arrow is hidden */}
        {currentStep === steps.length && <Box sx={{ width: 48, height: 48 }} />}
      </Box>

      {/* Progress Bar */}
      <Box sx={{ position: 'relative', height: '4px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', top: 0, width: '100%', height: '100%', bgcolor: '#E0E0E0' }} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${progressPercentage}%`,
            height: '100%',
            bgcolor: colors.primary.main,
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default OnboardingProgress; 