import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Switch,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grid,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tabs,
  Tab
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveIcon from '@mui/icons-material/Save';
import DownloadIcon from '@mui/icons-material/Download';
import Images from '../assets/index.js';
import { useTheme } from '../context/ThemeContext.js';
import { ThemedPageContainer } from '../components/styled/PageComponents';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Settings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    applicationUpdates: true,
    marketingEmails: false,
    browserNotifications: true
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  
  // Get theme context
  const { themePreferences, setThemeMode, setFontSize } = useTheme();

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleNotificationChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting]
    });
  };

  const handleSaveSettings = () => {
    // Here you would save the settings to your backend
    setSuccessSnackbar(true);
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteAccount = () => {
    // Here you would handle account deletion
    setDeleteDialogOpen(false);
  };

  // Handler for theme mode change
  const handleThemeModeChange = (event) => {
    const value = event.target.value;
    // Only set "light" or "dark" mode, handle "system" by detecting user preference
    if (value === "system") {
      // Check if user prefers dark mode
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDarkMode ? 'dark' : 'light');
    } else {
      setThemeMode(value);
    }
  };

  // Handler for font size change
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  return (
    <ThemedPageContainer sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        <Box 
          component="img" 
          src={Images.titleIcons.settings} 
          alt="Settings Icon"
          sx={{ 
            width: 28, 
            height: 28,
            display: 'flex',
            alignItems: 'center'
          }}
        />
        <Typography variant="h5" component="h1">Settings</Typography>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Manage your account preferences and settings
      </Typography>

      <Paper sx={{ borderRadius: 3, overflow: 'hidden', mb: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                minWidth: 120,
              },
              '& .Mui-selected': {
                color: '#FF6B00',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#FF6B00',
              }
            }}
          >
            <Tab 
              label="Account"
              icon={<PersonIcon />} 
              iconPosition="start"
              id="settings-tab-0" 
              aria-controls="settings-tabpanel-0"
            />
            <Tab 
              label="Security" 
              icon={<SecurityIcon />} 
              iconPosition="start"
              id="settings-tab-1" 
              aria-controls="settings-tabpanel-1"
            />
            <Tab 
              label="Notifications" 
              icon={<NotificationsIcon />} 
              iconPosition="start"
              id="settings-tab-2" 
              aria-controls="settings-tabpanel-2"
            />
            <Tab 
              label="Privacy" 
              icon={<PrivacyTipIcon />} 
              iconPosition="start"
              id="settings-tab-3" 
              aria-controls="settings-tabpanel-3"
            />
            <Tab 
              label="Appearance" 
              icon={<ColorLensIcon />} 
              iconPosition="start"
              id="settings-tab-4" 
              aria-controls="settings-tabpanel-4"
            />
          </Tabs>
        </Box>

        {/* Account Settings */}
        <TabPanel value={tabValue} index={0}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>Account Information</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Update your account details and personal information
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  defaultValue="Alexandra"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  defaultValue="Johnson"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  defaultValue="alex.johnson@example.com"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  defaultValue="+1 (555) 123-4567"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  defaultValue="San Francisco, CA"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>Preferences</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Configure your account preferences
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="language-select-label">Language</InputLabel>
                  <Select
                    labelId="language-select-label"
                    value="en"
                    label="Language"
                  >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="zh">中文</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="timezone-select-label">Time Zone</InputLabel>
                  <Select
                    labelId="timezone-select-label"
                    value="america_los_angeles"
                    label="Time Zone"
                  >
                    <MenuItem value="america_los_angeles">Pacific Time (US & Canada)</MenuItem>
                    <MenuItem value="america_denver">Mountain Time (US & Canada)</MenuItem>
                    <MenuItem value="america_chicago">Central Time (US & Canada)</MenuItem>
                    <MenuItem value="america_new_york">Eastern Time (US & Canada)</MenuItem>
                    <MenuItem value="europe_london">London</MenuItem>
                    <MenuItem value="asia_tokyo">Tokyo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button 
                variant="contained" 
                startIcon={<SaveIcon />}
                onClick={handleSaveSettings}
                sx={{ 
                  bgcolor: '#FF6B00', 
                  '&:hover': { bgcolor: '#e65c00' },
                  borderRadius: '100px',
                  textTransform: 'none',
                  px: 3,
                  py: 1
                }}
              >
                Save Changes
              </Button>
              <Button 
                startIcon={<DownloadIcon />}
                sx={{ 
                  borderRadius: '100px',
                  textTransform: 'none',
                }}
              >
                Export Data
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Security Settings */}
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>Password</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Update your password to keep your account secure
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type={showCurrentPassword ? 'text' : 'password'}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleToggleCurrentPassword}
                          edge="end"
                        >
                          {showCurrentPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="New Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm New Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom>Two-Factor Authentication</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Add an extra layer of security to your account
            </Typography>

            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                control={<Switch checked={false} />}
                label="Enable Two-Factor Authentication"
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                When enabled, you'll be required to enter a code from your authenticator app when signing in.
              </Typography>
            </Box>

            <Typography variant="h6" gutterBottom>Login Sessions</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Manage your active sessions and sign out from other devices
            </Typography>

            <Box sx={{ mb: 4 }}>
              <List>
                <ListItem
                  secondaryAction={
                    <Button
                      size="small"
                      sx={{ 
                        color: '#FF6B00',
                        '&:hover': { bgcolor: 'rgba(255, 107, 0, 0.04)' },
                        textTransform: 'none'
                      }}
                    >
                      Sign Out
                    </Button>
                  }
                >
                  <ListItemText
                    primary="MacBook Pro - San Francisco"
                    secondary="Current Session • Last active just now"
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button
                      size="small"
                      sx={{ 
                        color: '#666',
                        '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' },
                        textTransform: 'none'
                      }}
                    >
                      Sign Out
                    </Button>
                  }
                >
                  <ListItemText
                    primary="iPhone 13 - San Francisco"
                    secondary="Last active 2 hours ago"
                  />
                </ListItem>
              </List>
            </Box>

            <Button 
              variant="contained" 
              onClick={handleSaveSettings}
              sx={{ 
                bgcolor: '#FF6B00', 
                '&:hover': { bgcolor: '#e65c00' },
                borderRadius: '100px',
                textTransform: 'none',
                px: 3,
                py: 1
              }}
            >
              Update Security Settings
            </Button>
          </Box>
        </TabPanel>

        {/* Notification Settings */}
        <TabPanel value={tabValue} index={2}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>Email Notifications</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Choose what types of email notifications you'd like to receive
            </Typography>
            
            <List>
              <ListItem>
                <ListItemText 
                  primary="Email Notifications" 
                  secondary="Enable all email notifications" 
                />
                <Switch
                  edge="end"
                  checked={notificationSettings.emailNotifications}
                  onChange={() => handleNotificationChange('emailNotifications')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Job Alerts" 
                  secondary="Notifications for new jobs matching your preferences" 
                />
                <Switch
                  edge="end"
                  checked={notificationSettings.jobAlerts}
                  onChange={() => handleNotificationChange('jobAlerts')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Application Updates" 
                  secondary="Status changes to your job applications" 
                />
                <Switch
                  edge="end"
                  checked={notificationSettings.applicationUpdates}
                  onChange={() => handleNotificationChange('applicationUpdates')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Marketing Emails" 
                  secondary="Product updates, features, and promotions" 
                />
                <Switch
                  edge="end"
                  checked={notificationSettings.marketingEmails}
                  onChange={() => handleNotificationChange('marketingEmails')}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Push Notifications</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Configure browser notifications
            </Typography>

            <ListItem>
              <ListItemText 
                primary="Browser Notifications" 
                secondary="Enable browser push notifications" 
              />
              <Switch
                edge="end"
                checked={notificationSettings.browserNotifications}
                onChange={() => handleNotificationChange('browserNotifications')}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#FF6B00',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#FF6B00',
                  }
                }}
              />
            </ListItem>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>Notification Frequency</Typography>
              <FormControl component="fieldset">
                <RadioGroup defaultValue="immediately">
                  <FormControlLabel value="immediately" control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} label="Immediately" />
                  <FormControlLabel value="daily_digest" control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} label="Daily digest" />
                  <FormControlLabel value="weekly_digest" control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} label="Weekly digest" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Button 
                variant="contained" 
                onClick={handleSaveSettings}
                sx={{ 
                  bgcolor: '#FF6B00', 
                  '&:hover': { bgcolor: '#e65c00' },
                  borderRadius: '100px',
                  textTransform: 'none',
                  px: 3,
                  py: 1
                }}
              >
                Save Notification Preferences
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Privacy Settings */}
        <TabPanel value={tabValue} index={3}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>Privacy Settings</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Control how your information is shared with others
            </Typography>
            
            <List>
              <ListItem>
                <ListItemText 
                  primary="Profile Visibility" 
                  secondary="Make your profile visible to recruiters and companies" 
                />
                <Switch
                  edge="end"
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Show Salary Preferences" 
                  secondary="Display your desired salary range to potential employers" 
                />
                <Switch
                  edge="end"
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Share Application History" 
                  secondary="Allow us to use your application history to improve job recommendations" 
                />
                <Switch
                  edge="end"
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Data for Analytics" 
                  secondary="Allow anonymous usage data to help improve our service" 
                />
                <Switch
                  edge="end"
                  defaultChecked
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#FF6B00',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#FF6B00',
                    }
                  }}
                />
              </ListItem>
            </List>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" color="error" gutterBottom>Danger Zone</Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Permanent actions that cannot be undone
              </Typography>

              <Button 
                variant="outlined"
                color="error"
                startIcon={<DeleteForeverIcon />}
                onClick={handleDeleteDialogOpen}
                sx={{ borderRadius: '100px', textTransform: 'none' }}
              >
                Delete Account
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Appearance Settings */}
        <TabPanel value={tabValue} index={4}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h6" gutterBottom>Theme</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Choose how the application looks
            </Typography>
            
            <RadioGroup 
              value={themePreferences.mode} 
              onChange={handleThemeModeChange} 
              row 
              sx={{ mb: 4 }}
            >
              <FormControlLabel 
                value="light" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="Light" 
              />
              <FormControlLabel 
                value="dark" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="Dark" 
              />
              <FormControlLabel 
                value="system" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="System" 
              />
            </RadioGroup>

            <Typography variant="h6" gutterBottom>Font Size</Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Adjust the text size throughout the application
            </Typography>
            
            <RadioGroup 
              value={themePreferences.fontSize} 
              onChange={handleFontSizeChange} 
              row 
              sx={{ mb: 4 }}
            >
              <FormControlLabel 
                value="small" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="Small" 
              />
              <FormControlLabel 
                value="medium" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="Medium" 
              />
              <FormControlLabel 
                value="large" 
                control={<Radio sx={{ color: '#FF6B00', '&.Mui-checked': { color: '#FF6B00' } }} />} 
                label="Large" 
              />
            </RadioGroup>

            <Button 
              variant="contained" 
              onClick={handleSaveSettings}
              sx={{ 
                bgcolor: '#FF6B00', 
                '&:hover': { bgcolor: '#e65c00' },
                borderRadius: '100px',
                textTransform: 'none',
                px: 3,
                py: 1
              }}
            >
              Save Appearance Settings
            </Button>
          </Box>
        </TabPanel>
      </Paper>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom>Need Help?</Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          If you have any questions or need assistance with your settings, our support team is here to help.
      </Typography>
        <Button 
          variant="outlined"
          sx={{ 
            borderRadius: '100px',
            textTransform: 'none',
            borderColor: '#ddd',
            color: '#666',
          }}
        >
          Contact Support
        </Button>
      </Paper>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone. All of your data, including profile information, job applications, and saved jobs will be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteAccount} 
            color="error" 
            variant="contained"
            sx={{ textTransform: 'none' }}
          >
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={successSnackbar}
        autoHideDuration={6000}
        onClose={() => setSuccessSnackbar(false)}
        message="Settings saved successfully"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={() => setSuccessSnackbar(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Settings saved successfully
        </Alert>
      </Snackbar>
    </ThemedPageContainer>
  );
};

export default Settings; 