import { Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';



const EmptyState = ({ 
  type, 
  title, 
  description, 
  actionText, 
  actionPath,
  image
}) => {
  const navigate = useNavigate();

  // Default content based on type
  const getDefaultContent = () => {
    switch (type) {
      case 'jobs':
        return {
          icon: <WorkIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'No Jobs Found',
          description: description || 'We couldn\'t find any jobs matching your criteria. Try adjusting your search filters or explore recommended jobs.',
          actionText: actionText || 'Explore Jobs',
          actionPath: actionPath || '/jobs',
          imagePath: image || '/images/empty-states/no-jobs.svg'
        };
      case 'applications':
        return {
          icon: <FormatListBulletedIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'No Applications Yet',
          description: description || 'You haven\'t applied to any jobs yet. Start exploring jobs and submit your first application.',
          actionText: actionText || 'Find Jobs',
          actionPath: actionPath || '/jobs',
          imagePath: image || '/images/empty-states/no-applications.svg'
        };
      case 'alerts':
        return {
          icon: <NotificationsIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'No Job Alerts',
          description: description || 'You haven\'t set up any job alerts yet. Create alerts to get notified about new job opportunities.',
          actionText: actionText || 'Create Alert',
          actionPath: actionPath || '/job-alerts/create',
          imagePath: image || '/images/empty-states/no-alerts.svg'
        };
      case 'interviews':
        return {
          icon: <CalendarTodayIcon sx={{ fontSize: 64, color: '#3361EA' }} />,
          title: title || 'No Upcoming Interviews',
          description: description || 'You don\'t have any scheduled interviews. Keep applying to jobs to secure interviews.',
          actionText: actionText || 'View Applications',
          actionPath: actionPath || '/job-tracker',
          imagePath: image || '/images/empty-states/no-interviews.svg'
        };
      case 'profile':
        return {
          icon: <PersonIcon sx={{ fontSize: 64, color: '#00BFA5' }} />,
          title: title || 'Complete Your Profile',
          description: description || 'Your profile is incomplete. Complete your profile to increase your chances of getting hired.',
          actionText: actionText || 'Complete Profile',
          actionPath: actionPath || '/profile',
          imagePath: image || '/images/empty-states/incomplete-profile.svg'
        };
      case 'resume':
        return {
          icon: <AssignmentIcon sx={{ fontSize: 64, color: '#00BFA5' }} />,
          title: title || 'No Resume Found',
          description: description || 'You haven\'t uploaded your resume yet. Upload your resume to apply for jobs faster.',
          actionText: actionText || 'Upload Resume',
          actionPath: actionPath || '/profile',
          imagePath: image || '/images/empty-states/no-resume.svg'
        };
      case 'search':
        return {
          icon: <SearchIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'No Search Results',
          description: description || 'We couldn\'t find any results matching your search. Try different keywords or filters.',
          actionText: actionText || 'Clear Filters',
          actionPath: actionPath || '',
          imagePath: image || '/images/empty-states/no-results.svg'
        };
      case 'preparation':
        return {
          icon: <QuizIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'Start Your Preparation',
          description: description || 'You haven\'t started any preparation courses yet. Begin preparing for your interviews.',
          actionText: actionText || 'Start Learning',
          actionPath: actionPath || '/job-preparation',
          imagePath: image || '/images/empty-states/no-preparation.svg'
        };
      default:
        return {
          icon: <SearchIcon sx={{ fontSize: 64, color: '#FF6B00' }} />,
          title: title || 'Nothing to See Here',
          description: description || 'There\'s nothing to display at the moment. Check back later or explore other sections.',
          actionText: actionText || 'Go Back',
          actionPath: actionPath || '/',
          imagePath: image || '/images/empty-states/general-empty.svg'
        };
    }
  };

  const content = getDefaultContent();

  const handleAction = () => {
    if (content.actionPath) {
      navigate(content.actionPath);
    }
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        textAlign: 'center',
        minHeight: '300px',
      }}
    >
      {content.imagePath && (
        <Box 
          component="img"
          src={content.imagePath}
          alt={content.title}
          sx={{ 
            width: '100%',
            maxWidth: 300,
            height: 'auto',
            marginBottom: 3
          }}
        />
      )}
      {content.icon && !content.imagePath && (
        <Box sx={{ marginBottom: 2 }}>
          {content.icon}
        </Box>
      )}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
        {content.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
        {content.description}
      </Typography>
      {content.actionText && (
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: type === 'interviews' ? '#3361EA' : 
                    type === 'profile' || type === 'resume' ? '#00BFA5' : '#FF6B00',
            '&:hover': { 
              bgcolor: type === 'interviews' ? '#2D4ECC' : 
                        type === 'profile' || type === 'resume' ? '#00A693' : '#e65c00'
            }
          }}
          onClick={handleAction}
        >
          {content.actionText}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState; 