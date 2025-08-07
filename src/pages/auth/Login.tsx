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
  useTheme as useMuiTheme,
  Divider,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { ThemedAuthContainer } from '../../components/styled/AuthComponents';

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
  rememberMe: boolean;
  error?: boolean;
  loginError?: boolean;
}

interface LoginFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
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

// Separate component for the login form
const LoginForm: React.FC<LoginFormProps> = ({ 
  formData, 
  setFormData, 
  showPassword, 
  setShowPassword, 
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
        Welcome Back!
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
        Your Next Opportunity Awaits.
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
              placeholder="Enter your Password"
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

          {formData.loginError && (
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'error.main',
                fontSize: '0.9rem',
              }}
            >
              Invalid email or password. Please try again.
            </Typography>
          )}

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 1
          }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
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
                  Remember me
                </Typography>
              }
            />
            <Button 
              variant="text" 
              sx={{ 
                textTransform: 'none',
                color: '#FF5733',
                fontWeight: 500,
                fontSize: '0.9rem',
                p: 0,
                '&:hover': {
                  background: 'transparent',
                  textDecoration: 'underline',
                }
              }}
            >
              Forgot Password?
            </Button>
          </Box>

          <PrimaryButton
            fullWidth
            variant="contained"
            size="large"
            type="submit"
          >
            Login
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
            Login with Google
          </SocialButton>
          
          <SocialButton 
            fullWidth 
            startIcon={
              <Box component="img" src={loginLinkedInLogo} alt="LinkedIn" sx={{ width: 24, height: 24 }} />
            }
          >
            Login with LinkedIn
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
            New to Atolla?{' '}
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
              onClick={() => navigate('/signup')}
            >
              Sign up here
            </Button>
          </Typography>
        </Stack>
      </form>
    </Paper>
  );
};

const Login = () => {
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false,
    error: false,
    loginError: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.password) {
      setFormData({
        ...formData,
        error: true,
        loginError: false
      });
      return;
    }
    
    // Check hardcoded credentials
    if (formData.email === 'atolla@vylabs.ai' && formData.password === 'Atolla@2025') {
      // Successful login, redirect to home
      navigate('/home');
    } else {
      // Failed login
      setFormData({
        ...formData,
        loginError: true,
        error: false
      });
    }
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
    <ThemedAuthContainer>
      <Box sx={{ 
        width: '100%',
        height: '100vh',
        position: 'relative',
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
          {/* Login form content here */}
          <LoginForm 
            formData={formData} 
            setFormData={setFormData} 
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
            navigate={navigate}
          />
        </Box>
      </Box>
    </ThemedAuthContainer>
  );
};

export default Login; 