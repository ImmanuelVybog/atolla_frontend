import { Box, Container, Typography, styled } from '@mui/material';
import OnboardingProgress from './OnboardingProgress';

// Import images
import atollaLogo from '../assets/Images/Atolla Logo.png';
import obGoogleLogo from '../assets/Images/OB Google Icon.png';
import obAppleLogo from '../assets/Images/OB Apple Icon.png';
import obMicrosoftLogo from '../assets/Images/OB Microsoft Icon.png';
import obAmazonLogo from '../assets/Images/OB Amazon Icon.png';
import obNetflixLogo from '../assets/Images/OB Netflix Icon.png';
import obMetaLogo from '../assets/Images/OB Meta Icon.png';
import textBG from '../assets/Images/Text BG.png';


const CompanyLogo = styled('img')({
  width: 'auto',
  height: '45px',
});

const OnboardingLayout = ({ children }) => {
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
      {/* Logo */}
      <Box sx={{ mb: 1, p: 3, display: 'flex', justifyContent: 'flex-start' }}>
            <img src={atollaLogo} alt="VY LABS ATOLLA" style={{ height: '60px' }} />
          </Box>


      {/* Main content container */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            pt: 4,
            pb: 2,
            mt: -8,
            zIndex: 1,
            position: 'relative',
          }}
        >
          

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* Company logos in a row */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                mb: 5,
              }}
            >
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', top: '10px', left: '10px' }} src={obAmazonLogo} alt="Amazon" />
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', top: '60px', left: '20px' }} src={obMetaLogo} alt="Meta" />
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', bottom: '40px', left: '40px' }} src={obGoogleLogo} alt="Google" />
            </Box>
            {/* Welcome Heading */}
            <Box sx={{ mb: 5, textAlign: 'center', }}>
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
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', top: '60px', left: '20px' }} src={obNetflixLogo} alt="Netflix" />
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', bottom: '40px', left: '20px' }} src={obAppleLogo} alt="Apple" />
              <CompanyLogo sx={{ width: '80px', height: '80px', position: 'relative', top: '20px', left: '30px' }} src={obMicrosoftLogo} alt="Microsoft" />
            </Box>
          </Box>
        </Box>

        {/* Main Form Content with Progress Navigation inside */}
        <Box
          sx={{ 
            flex: 1, 
            backgroundColor: 'white',
            borderRadius: 2,
            border: '1px solid #eeeeee',
            mb: 5,
            overflow: 'hidden',
            zIndex: 1,
            position: 'relative',
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

        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 50,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'radial-gradient(ellipse at bottom, #feeeea, transparent)',
          width: '90%',
          height: '50vh',
          zIndex: 0,
          }}>
        </Box>
      </Container>
    </Box>
  );
};

export default OnboardingLayout; 