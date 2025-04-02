import { Box, Container, Typography, styled } from '@mui/material';
import OnboardingProgress from './OnboardingProgress';

// Import images
import atollaLogo from '../assets/Images/Atolla Logo.png';
import googleLogo from '../assets/Images/Google Icon.png';
import appleLogo from '../assets/Images/Apple Icon.png';
import microsoftLogo from '../assets/Images/Microsoft Icon.png';
import amazonLogo from '../assets/Images/Amazon Icon.png';
import netflixLogo from '../assets/Images/Netflix Icon.png';
import metaLogo from '../assets/Images/Meta Icon.png';
import textBG from '../assets/Images/Text BG.png';
interface OnboardingLayoutProps {
  children: React.ReactNode;
}

const CompanyLogo = styled('img')({
  width: 'auto',
  height: '45px',
});

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main content container */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            pt: 4,
            pb: 2,
          }}
        >
          {/* Logo */}
          <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
            <img src={atollaLogo} alt="VY LABS ATOLLA" style={{ height: '45px' }} />
          </Box>

          {/* Company logos in a row */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              gap: { xs: 2, md: 4 },
              mb: 5,
            }}
          >
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', top: '10px', left: '10px' }} src={amazonLogo} alt="Amazon" />
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', top: '60px', left: '20px' }} src={metaLogo} alt="Meta" />
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', bottom: '40px', left: '40px' }} src={googleLogo} alt="Google" />
          </Box>

          {/* Welcome Heading */}
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '28px', md: '36px' },
                mb: 1,
              }}
            >
              Welcome Aboard!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography 
                variant="h2" 
                component="span" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '32px', md: '42px' },
                }}
              >
                Let's Build 
              </Typography>
              <Box 
                component="span" 
                sx={{ 
                  backgroundImage: `url(${textBG})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  color: 'white', 
                  px: 2, 
                  py: 1, 
                  borderRadius: 1,
                  ml: 1,
                  fontWeight: 'bold',
                  fontSize: { xs: '32px', md: '42px' },
                  display: 'inline-block',
                }}
              >
                Your Future
              </Box>
            </Box>
          </Box>

          {/* Company logos in a row */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              gap: { xs: 2, md: 4 },
              mb: 5,
            }}
          >
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', top: '60px', left: '20px' }} src={netflixLogo} alt="Netflix" />
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', bottom: '40px', left: '20px' }} src={appleLogo} alt="Apple" />
            <CompanyLogo sx={{ width: '60px', height: '60px', position: 'relative', top: '20px', left: '30px' }} src={microsoftLogo} alt="Microsoft" />
          </Box>
        </Box>

        {/* Main Form Content with Progress Navigation inside */}
        <Box
          sx={{ 
            flex: 1, 
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            mb: 5,
            overflow: 'hidden',
          }}
        >
          {/* Progress Navigation now inside the card */}
          <OnboardingProgress />
          
          {/* Form Content */}
          <Box
            sx={{
              width: '100%',
              py: 2, 
              px: { xs: 2, sm: 3 },
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OnboardingLayout; 