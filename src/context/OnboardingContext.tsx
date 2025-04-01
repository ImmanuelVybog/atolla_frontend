import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  location: string;
  bio: string;
  linkedinProfile: string;
  githubProfile: string;
  resume: File | null;
}

interface Education {
  schoolName: string;
  major: string;
  degree: string;
  gpa: string;
  startDate: {
    month: string;
    year: string;
  };
  endDate: {
    month: string;
    year: string;
  };
  currentlyStudying: boolean;
}

interface Experience {
  company: string;
  location: string;
  positionTitle: string;
  experienceType: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyWorking: boolean;
}

interface SkillsExpertise {
  primarySkills: string[];
  certifications: {
    name: string;
    issuingOrganization: string;
    issueDate: string;
    expiryDate?: string;
  }[];
}

interface WorkSamples {
  resume: File | null;
  portfolioLink: string;
  coverLetter: string;
}

interface JobPreferences {
  preferredRoles: string[];
  preferredIndustry: string;
  preferredJobType: string;
  preferredWorkMode: string;
  noticePeriod: string;
  expectedSalaryRange: {
    min: string;
    max: string;
  };
}

interface OnboardingData {
  personalDetails: PersonalDetails;
  education: Education[];
  experience: Experience[];
  skillsExpertise: SkillsExpertise;
  workSamples: WorkSamples;
  jobPreferences: JobPreferences;
}

interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateOnboardingData: (updates: Partial<OnboardingData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  completedSteps: number[];
  markStepCompleted: (step: number) => void;
}

const defaultOnboardingData: OnboardingData = {
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

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(defaultOnboardingData);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const updateOnboardingData = (updates: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const markStepCompleted = (step: number) => {
    setCompletedSteps((prev) => [...prev, step]);
  };

  const handleStepChange = (step: number) => {
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