import { Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

interface LoginProps {
  onLogin: () => void;
}

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: '#fff',
  },
});

const StyledButton = styled(Button)({
  borderRadius: '30px',
  padding: '12px 0',
  textTransform: 'none',
  fontSize: '16px',
});

const Login = ({ onLogin }: LoginProps) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        background: 'url("/background-pattern.svg")',
        backgroundColor: '#fff',
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: '500px' }}>
          <Box sx={{ mb: 4 }}>
            <img src="/logo.svg" alt="Atolla" style={{ height: '40px' }} />
          </Box>
          <Typography variant="h1" sx={{ fontSize: '72px', fontWeight: 'bold', mb: 2 }}>
            Your
          </Typography>
          <Box sx={{ position: 'relative', mb: 2 }}>
            <Typography
              sx={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#FF5733',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              dream job
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: '72px', fontWeight: 'bold', mb: 2 }}>
            starts here ≫≫
          </Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            p: 4,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4, color: 'text.secondary' }}>
            Your Next Opportunity Awaits.
          </Typography>

          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            placeholder="Enter your email"
          />
          <StyledTextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            placeholder="Enter your Password"
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', textDecoration: 'underline', cursor: 'pointer' }}
            >
              Forgot Password?
            </Typography>
          </Box>

          <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            onClick={onLogin}
            sx={{ mb: 2, bgcolor: '#FF5733', '&:hover': { bgcolor: '#ff4019' } }}
          >
            Login
          </StyledButton>

          <Box sx={{ textAlign: 'center', my: 2 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              or
            </Typography>
          </Box>

          <StyledButton
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mb: 2 }}
          >
            Login with Google
          </StyledButton>

          <StyledButton
            fullWidth
            variant="outlined"
            startIcon={<LinkedInIcon />}
            sx={{ mb: 3 }}
          >
            Login with LinkedIn
          </StyledButton>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              New to Atolla?{' '}
              <Typography
                component="span"
                sx={{ color: '#FF5733', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up here
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login; 