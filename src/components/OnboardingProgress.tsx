import { Box, Typography, styled } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';

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
    <Box sx={{ width: '100%', mb: 3 }}>
      {/* Progress Navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, borderBottom: '1px solid #eee' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
          <IconButton
            sx={{ position: 'absolute', left: 0 }}
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', px: 5 }}>
            {steps.map((step, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: index + 1 === currentStep ? '#FF5733' : 
                         completedSteps.includes(index + 1) ? '#666' : '#999',
                  fontWeight: index + 1 === currentStep ? 'bold' : 'normal',
                  whiteSpace: 'nowrap',
                  cursor: completedSteps.includes(index + 1) || index + 1 === currentStep ? 'pointer' : 'default',
                  '&:hover': {
                    color: completedSteps.includes(index + 1) || index + 1 === currentStep ? '#FF5733' : '#999',
                  }
                }}
                onClick={() => handleStepClick(index)}
              >
                {step.label}
              </Typography>
            ))}
          </Box>

          <IconButton
            sx={{ position: 'absolute', right: 0 }}
            onClick={handleNext}
            disabled={currentStep === steps.length}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Progress Bar */}
      <Box sx={{ position: 'relative', height: '4px', width: '100%' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: '#E0E0E0' }} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${progressPercentage}%`,
            height: '100%',
            bgcolor: '#FF5733',
            transition: 'width 0.3s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default OnboardingProgress; 