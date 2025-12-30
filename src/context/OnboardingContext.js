import { createContext, useContext, useState } from 'react';



const defaultOnboardingData = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    location: '',
    bio: '',
    linkedinProfile: '',
    githubProfile: '',
    resume: null,
  },
  education: [],
  experience: [],
  skillsExpertise: {
    primarySkills: [],
    certifications: [],
  },
  workSamples: {
    resume: null,
    portfolioLink: '',
    coverLetter: '',
  },
  jobPreferences: {
    preferredRoles: [],
    preferredIndustry: '',
    preferredJobType: '',
    preferredWorkMode: '',
    noticePeriod: '',
    expectedSalaryRange: {
      min: '',
      max: '',
    },
  },
};

const OnboardingContext = createContext(undefined);

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState(defaultOnboardingData);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const updateOnboardingData = (updates) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const markStepCompleted = (step) => {
    setCompletedSteps((prev) => [...prev, step]);
  };

  const handleStepChange = (step) => {
    // If moving to step 7 (after Job Preferences), redirect to home page
    if (step === 7) {
      window.location.href = '/';
      return;
    }
    setCurrentStep(step);
  };

  return (
    <OnboardingContext.Provider
      value={{
        onboardingData,
        updateOnboardingData,
        currentStep,
        setCurrentStep: handleStepChange,
        completedSteps,
        markStepCompleted,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};

export default OnboardingContext; 