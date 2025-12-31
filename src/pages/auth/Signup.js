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
  Divider,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { ThemedAuthContainer } from '../../components/styled/AuthComponents.js';

// Import images directly
import loginGoogleLogo from '../../assets/Images/Login Google.png';
import loginLinkedInLogo from '../../assets/Images/Login LinkedIn.png';
import atollaLogo from '../../assets/Images/Atolla Logo.png';
import fadeArrow from '../../assets/Images/Fade Arrow.png';
import textBG from '../../assets/Images/Text BG.png';
import metaLogo from '../../assets/Images/Meta Logo.png';
import appleLogo from '../../assets/Images/Apple Logo.png';
import googleLogo from '../../assets/Images/Google Logo.png';
import microsoftLogo from '../../assets/Images/Microsoft Logo.png';
import amazonLogo from '../../assets/Images/Amazon Logo.png';
import netflixLogo from '../../assets/Images/Netflix Logo.png';

// Separate component for the signup form
const SignupForm = ({ 
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
      maxWidth: '480px',
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
            <TextField
              fullWidth
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputProps={{
                sx: { pl: 1 }
              }}
              error={formData.error && !formData.email}
              helperText={formData.error && !formData.email ? "Email is required" : ""}
              className="StyledTextField-root"
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
            <TextField
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
              className="StyledTextField-root"
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
            <TextField
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
              className="StyledTextField-root"
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
                      color: '#FF6B00',
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
                      color: '#FF6B00',
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

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            className="PrimaryButton-root"
          >
            Sign Up
          </Button>

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

          <Button 
            fullWidth 
            startIcon={
              <Box component="img" src={loginGoogleLogo} alt="Google" sx={{ width: 24, height: 24 }} />
            }
            className="SocialButton-root"
          >
            Sign up with Google
          </Button>
          
          <Button 
            fullWidth 
            startIcon={
              <Box component="img" src={loginLinkedInLogo} alt="LinkedIn" sx={{ width: 24, height: 24 }} />
            }
            className="SocialButton-root"
          >
            Sign up with LinkedIn
          </Button>

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
                color: '#FF6B00',
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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    error: false,
    passwordMismatch: false,
    termsError: false,
  });

  const handleSubmit = async (e) => {
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

  return (
    <ThemedAuthContainer>
      <Box sx={{ 
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundColor: '#FFFFFF',
      }}>
        {/* Background layers */}
        <Box className="BackgroundTexture-root" />
        <Box className="DarkBackground-root" />
        
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
                <Box component="img" src={atollaLogo} alt="Atolla" sx={{
                width: 'auto',
                height: '80px',
              }} />
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

              {/* Company Logos */}
                        <Box sx={{ 
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: 10,
                          columnGap: 20,
                          zIndex: 2,
                          marginTop: 20,
                        }}>
                          <Box component="img" src={metaLogo} alt="Meta" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                          <Box component="img" src={appleLogo} alt="Apple" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                          <Box component="img" src={googleLogo} alt="Google" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                          <Box component="img" src={microsoftLogo} alt="Microsoft" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                          <Box component="img" src={amazonLogo} alt="Amazon" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                          <Box component="img" src={netflixLogo} alt="Netflix" sx={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'contain',
                          }} />
                        </Box>
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
      </Box>
    </ThemedAuthContainer>
  );
};

export default Signup; 