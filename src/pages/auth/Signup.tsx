import { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Stack,
  useMediaQuery,
  useTheme,
  Divider,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';

// Import images directly
import atollaLogo from '../../assets/Images/Atolla Logo.png';
import metaLogo from '../../assets/Images/Meta Icon.png';
import appleLogo from '../../assets/Images/Apple Icon.png';
import googleLogo from '../../assets/Images/Google Icon.png';
import microsoftLogo from '../../assets/Images/Microsoft Icon.png';
import amazonLogo from '../../assets/Images/Amazon Icon.png';
import netflixLogo from '../../assets/Images/Netflix Icon.png';
import loginGoogleLogo from '../../assets/Images/Login Google.png';
import loginLinkedInLogo from '../../assets/Images/Login LinkedIn.png';
import noiseTexture from '../../assets/Images/Noise & Texture.svg';
import textBG from '../../assets/Images/Text BG.png';
import fadeArrow from '../../assets/Images/Fade Arrow.png';

// Type definitions
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  error?: boolean;
  passwordMismatch?: boolean;
  termsError?: boolean;
}

interface SignupFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmPassword: boolean;
  setShowConfirmPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent) => void;
  navigate: NavigateFunction;
}

// Styled components
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    height: 56,
    '& fieldset': {
      borderColor: '#E2E8F0',
    },
    '&:hover fieldset': {
      borderColor: '#CBD5E1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF5733',
    },
  },
  '& .MuiInputLabel-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-input': {
    padding: '15px 20px',
  },
});

const SocialButton = styled(Button)({
  borderRadius: 50,
  padding: '12px 16px',
  textTransform: 'none',
  border: '1px solid #E2E8F0',
  color: '#1E293B',
  backgroundColor: '#fff',
  height: 56,
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#F8FAFC',
    borderColor: '#CBD5E1',
  },
});

const PrimaryButton = styled(Button)({
  borderRadius: 50,
  textTransform: 'none',
  padding: '12px 24px',
  backgroundColor: '#FF5733',
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '16px',
  height: 56,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#E64A2E',
    boxShadow: 'none',
  },
});

const BackgroundTexture = styled(Box)({
  backgroundImage: `url(${noiseTexture})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: '50%',
  zIndex: 0,
});

const DarkBackground = styled(Box)({
  position: 'absolute',
  backgroundColor: '#222222',
  top: '50%',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
});

const CompanyLogo = styled('img')({
  width: 'auto',
  height: '80px',
});

const CompanyIcon = styled('img')(({ index }: { index: number }) => ({
  width: '100px',
  height: '100px',
  position: 'relative',
  transform: index % 2 === 0 ? 'translateY(-75px)' : 'translateY(75px)',
}));

// Separate component for the signup form
const SignupForm: React.FC<SignupFormProps> = ({ 
  formData, 
  setFormData, 
  showPassword, 
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  handleSubmit, 
  navigate 
}) => {
  return (
    <Paper elevation={10} sx={{
      width: '100%',
      maxWidth: '440px',
      py: 4,
      px: { xs: 3, md: 4 },
      borderRadius: 4,
      boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
      backgroundColor: '#FFFFFF',
    }}>
      <Typography 
        variant="h4" 
        component="h1" 
        sx={{ 
          mb: 1, 
          fontWeight: 'bold',
          fontSize: { xs: '1.75rem', md: '2rem' },
          color: '#000000'
        }}
      >
        Create Account
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          color: '#64748B',
          fontSize: '1rem',
          lineHeight: 1.5,
        }}
      >
        Join Atolla and start your journey.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1, 
                color: '#000000',
                fontWeight: 500,
              }}
            >
              Email
            </Typography>
            <StyledTextField
              fullWidth
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputProps={{
                sx: { pl: 1 }
              }}
              error={formData.error && !formData.email}
              helperText={formData.error && !formData.email ? "Email is required" : ""}
            />
          </Box>

          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1, 
                color: '#000000',
                fontWeight: 500,
              }}
            >
              Password
            </Typography>
            <StyledTextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              InputProps={{
                sx: { pl: 1 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: '#94A3B8', mr: 1 }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={formData.error && !formData.password}
              helperText={formData.error && !formData.password ? "Password is required" : ""}
            />
          </Box>

          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 1, 
                color: '#000000',
                fontWeight: 500,
              }}
            >
              Confirm Password
            </Typography>
            <StyledTextField
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              InputProps={{
                sx: { pl: 1 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                      sx={{ color: '#94A3B8', mr: 1 }}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={(formData.error && !formData.confirmPassword) || formData.passwordMismatch}
              helperText={
                formData.error && !formData.confirmPassword 
                  ? "Please confirm your password" 
                  : formData.passwordMismatch 
                  ? "Passwords do not match" 
                  : ""
              }
            />
          </Box>

          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  size="small"
                />
              }
              label={
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#64748B',
                    fontSize: '0.9rem',
                  }}
                >
                  I agree to the <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none', 
                      p: 0, 
                      minWidth: 'auto', 
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: '#FF5733',
                      verticalAlign: 'baseline',
                      '&:hover': {
                        background: 'transparent',
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Terms of Service
                  </Button> and <Button 
                    variant="text" 
                    sx={{ 
                      textTransform: 'none', 
                      p: 0, 
                      minWidth: 'auto', 
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      color: '#FF5733',
                      verticalAlign: 'baseline',
                      '&:hover': {
                        background: 'transparent',
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    Privacy Policy
                  </Button>
                </Typography>
              }
              sx={{ 
                alignItems: 'flex-start', 
                '.MuiCheckbox-root': { 
                  pt: 0,
                  color: formData.termsError ? 'error.main' : undefined
                }
              }}
            />
            {formData.termsError && (
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'error.main',
                  fontSize: '0.75rem',
                  ml: 2
                }}
              >
                You must agree to the terms and conditions
              </Typography>
            )}
          </Box>

          <PrimaryButton
            fullWidth
            variant="contained"
            size="large"
            type="submit"
          >
            Sign Up
          </PrimaryButton>

          <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography 
              variant="body2" 
              sx={{ 
                px: 2,
                color: '#64748B',
                fontSize: '0.9rem',
              }}
            >
              or
            </Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          <SocialButton 
            fullWidth 
            startIcon={
              <Box component="img" src={loginGoogleLogo} alt="Google" sx={{ width: 24, height: 24 }} />
            }
          >
            Sign up with Google
          </SocialButton>
          
          <SocialButton 
            fullWidth 
            startIcon={
              <Box component="img" src={loginLinkedInLogo} alt="LinkedIn" sx={{ width: 24, height: 24 }} />
            }
          >
            Sign up with LinkedIn
          </SocialButton>

          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center', 
              color: '#64748B', 
              mt: 3,
              fontSize: '0.9rem',
            }}
          >
            Already have an account?{' '}
            <Button
              variant="text"
              sx={{ 
                textTransform: 'none', 
                fontWeight: 500, 
                p: 0, 
                minWidth: 'auto', 
                verticalAlign: 'baseline',
                color: '#FF5733',
                '&:hover': {
                  background: 'transparent',
                  textDecoration: 'underline',
                }
              }}
              onClick={() => navigate('/login')}
            >
              Login here
            </Button>
          </Typography>
        </Stack>
      </form>
    </Paper>
  );
};

const Signup = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    error: false,
    passwordMismatch: false,
    termsError: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let hasError = false;
    let newFormData = { ...formData, error: false, passwordMismatch: false, termsError: false };
    
    // Check for empty fields
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      newFormData.error = true;
      hasError = true;
    }
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      newFormData.passwordMismatch = true;
      hasError = true;
    }
    
    // Check terms agreement
    if (!formData.agreeToTerms) {
      newFormData.termsError = true;
      hasError = true;
    }
    
    if (hasError) {
      setFormData(newFormData);
      return;
    }
    
    // Proceed to onboarding
    navigate('/onboarding/personal-details');
  };

  const logoImages = [
    { src: metaLogo, alt: "Meta" },
    { src: appleLogo, alt: "Apple" },
    { src: googleLogo, alt: "Google" },
    { src: microsoftLogo, alt: "Microsoft" },
    { src: amazonLogo, alt: "Amazon" },
    { src: netflixLogo, alt: "Netflix" },
  ];

  return (
    <Box sx={{ 
      width: '100%',
      height: '100vh',
      position: 'relative',
      backgroundColor: '#FFFFFF',
    }}>
      {/* Background layers */}
      <BackgroundTexture />
      <DarkBackground />
      
      {/* Main content container */}
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {/* Left side - Logo, Text and Company logos */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
          {/* Top section with logo and main text */}
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '50vh',
          }}>
            {/* Logo */}
            <Box>
              <CompanyLogo src={atollaLogo} alt="Atolla" />
            </Box>
            
            {/* Main text */}
            <Box>
              <Typography variant="h1" sx={{ 
                fontWeight: 'bold',
                fontSize: '5rem',
                lineHeight: 1.2,
                color: '#000000',
              }}>
                Your
              </Typography>
              
              <Typography variant="h1" sx={{ 
                fontWeight: 'bold',
                mr: 7,
                fontSize: '5rem',
                lineHeight: 1.2,
                color: '#ffffff',
                backgroundImage: `url(${textBG})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                bgcolor: 'white',
                p: 1,
                transform: 'translateY(-10px)',
              }}>
                dream job
              </Typography>
              
              <Typography variant="h1" sx={{ 
                fontWeight: 'bold', 
                fontSize: '5rem',
                lineHeight: 1.2,
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
                starts here 
                <img src={fadeArrow} alt="fadeArrow" style={{ width: '60px' }} />
              </Typography>
            </Box>
          </Box>
          
          {/* Bottom section with company logos in zigzag pattern */}
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            height: '50vh',
          }}>
            {logoImages.map((logo, index) => (
              <CompanyIcon 
                key={logo.alt}
                src={logo.src} 
                alt={logo.alt} 
                index={index}
              />
            ))}
          </Box>
        </Box>
        
        {/* Right side with signup form */}
        <Box sx={{ 
          width: '50%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <SignupForm 
            formData={formData} 
            setFormData={setFormData} 
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            handleSubmit={handleSubmit}
            navigate={navigate}
          />
        </Box>
      </Box>
      
      {/* Mobile view - Only displayed on smaller screens */}
      {isMobile && (
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            padding: 4,
            backgroundColor: '#FFF',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CompanyLogo src={atollaLogo} alt="Atolla" />
          </Box>
          
          {/* Main text */}
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h1" sx={{ 
              fontWeight: 'bold', 
              fontSize: '3rem',
              lineHeight: 1.2, 
              mb: 1 
            }}>
              Your dream job starts here
            </Typography>
          </Box>
          
          {/* Signup form */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <SignupForm 
              formData={formData} 
              setFormData={setFormData} 
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              handleSubmit={handleSubmit}
              navigate={navigate}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Signup; 