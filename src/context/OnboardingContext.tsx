import React, { createContext, useContext, useState } from 'react';

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
  companyName: string;
  location: string;
  position: string;
  type: string;
  startDate: {
    month: string;
    year: string;
  };
  endDate: {
    month: string;
    year: string;
  };
  currentlyWorking: boolean;
  description: string;
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
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onboardingData: OnboardingData;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
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

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(defaultOnboardingData);

  const updateOnboardingData = (data: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        onboardingData,
        updateOnboardingData,
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