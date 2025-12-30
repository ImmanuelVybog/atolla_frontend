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
import './Login.css';
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

// Separate component for the login form
const LoginForm = ({ 
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  handleSubmit,
  navigate 
}) => {
  console.log("LoginForm rendering");
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
              className="StyledTextField-root"
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

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            className="PrimaryButton-root"
          >
            Login
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
            Login with Google
          </Button>
          
          <Button 
            fullWidth 
            startIcon={
              <Box component="img" src={loginLinkedInLogo} alt="LinkedIn" sx={{ width: 24, height: 24 }} />
            }
            className="SocialButton-root"
          >
            Login with LinkedIn
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
  console.log("Login component rendering");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    error: false,
    loginError: false,
  });

  const handleSubmit = async (e) => {
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
        
          {/* Right Section - Login Form */}
          <Box sx={{ 
            width: '50%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
        
     </Box> 
    </ThemedAuthContainer>
  );
};

export default Login; 