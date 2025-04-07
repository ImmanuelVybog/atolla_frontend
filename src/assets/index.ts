// Company Logos
import amazonLogo from './Images/Amazon Logo.png';
import appleLogo from './Images/Apple Logo.png';
import googleLogo from './Images/Google Logo.png';
import metaLogo from './Images/Meta Logo.png';
import microsoftLogo from './Images/Microsoft Logo.png';
import netflixLogo from './Images/Netflix Logo.png';
import tcsLogo from './Images/TCS Logo.png';

// Onboarding Icons
import obAmazonIcon from './Images/OB Amazon Icon.png';
import obAppleIcon from './Images/OB Apple Icon.png';
import obGoogleIcon from './Images/OB Google Icon.png';
import obMetaIcon from './Images/OB Meta Icon.png';
import obMicrosoftIcon from './Images/OB Microsoft Icon.png';
import obNetflixIcon from './Images/OB Netflix Icon.png';

// Regular Icons
import amazonIcon from './Images/Amazon Icon.png';
import appleIcon from './Images/Apple Icon.png';
import googleIcon from './Images/Google Icon.png';
import metaIcon from './Images/Meta Icon.png';
import microsoftIcon from './Images/Microsoft Icon.png';
import netflixIcon from './Images/Netflix Icon.png';

// SVG Icons
import locationIcon from './Images/Location Icon.svg';
import experienceIcon from './Images/Experience Icon.svg';
import salaryIcon from './Images/Salary Icon.svg';
import saveIcon from './Images/Save Icon.svg';
import scheduleIcon from './Images/Schedule Icon.svg';
import quickSearchIcon from './Images/Quick Search Icon.svg';
import applicationTrackerIcon from './Images/Application Tracker Icon.svg';
import jobAlertIcon from './Images/Job Alert Icon.svg';
import calendarIcon from './Images/uis_calender.svg';
import recommendedJobsIcon from './Images/Recommended Jobs.svg';

// Title Icons
import alertTitleIcon from './Images/Alert Title Icon.svg';
import checkResumeTitleIcon from './Images/Check Resume Title Icon.svg';
import jobTrackerTitleIcon from './Images/Job Tracker Title Icon.svg';
import settingsTitleIcon from './Images/Settings Title Icon.svg';
import myProfileTitleIcon from './Images/My Profile Title Icon.svg';

// UI Elements
import atollaLogo from './Images/Atolla Logo.png';
import vyLabsAtollaIcon from './Images/Vy Labs Atolla Icon.svg';
import textBG from './Images/Text BG.png';
import fadeArrow from './Images/Fade Arrow.png';
import noiseTexture from './Images/Noise & Texture.svg';

// Login Images
import loginGoogle from './Images/Login Google.png';
import loginLinkedIn from './Images/Login LinkedIn.png';

// Export all images organized by category
export const Images = {
  logos: {
    amazon: amazonLogo,
    apple: appleLogo,
    google: googleLogo,
    meta: metaLogo,
    microsoft: microsoftLogo,
    netflix: netflixLogo,
    tcs: tcsLogo,
    atolla: atollaLogo,
  },
  onboarding: {
    amazon: obAmazonIcon,
    apple: obAppleIcon,
    google: obGoogleIcon,
    meta: obMetaIcon,
    microsoft: obMicrosoftIcon,
    netflix: obNetflixIcon,
  },
  icons: {
    companies: {
      amazon: amazonIcon,
      apple: appleIcon,
      google: googleIcon,
      meta: metaIcon,
      microsoft: microsoftIcon,
      netflix: netflixIcon,
    },
    location: locationIcon,
    experience: experienceIcon,
    salary: salaryIcon,
    save: saveIcon,
    schedule: scheduleIcon,
    quickSearch: quickSearchIcon,
    applicationTracker: applicationTrackerIcon,
    jobAlert: jobAlertIcon,
    calendar: calendarIcon,
    recommendedJobs: recommendedJobsIcon,
  },
  titleIcons: {
    alert: alertTitleIcon,
    checkResume: checkResumeTitleIcon,
    jobTracker: jobTrackerTitleIcon,
    settings: settingsTitleIcon,
    myProfile: myProfileTitleIcon,
  },
  ui: {
    atollaIcon: vyLabsAtollaIcon,
    textBackground: textBG,
    fadeArrow: fadeArrow,
    noiseTexture: noiseTexture,
  },
  login: {
    google: loginGoogle,
    linkedIn: loginLinkedIn,
  }
};

// Default export for easier importing
export default Images; 