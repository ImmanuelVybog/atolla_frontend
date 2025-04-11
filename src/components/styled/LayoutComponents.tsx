import { styled } from '@mui/material/styles';
import { Box, Paper, Container } from '@mui/material';
import { spacing } from '../../theme';

/**
 * Standard content container for pages
 */
export const PageContainer = styled(Container)({
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
  margin: 'auto',
  maxWidth: '96rem',
});

/**
 * Paper component with consistent styling for cards and sections
 */
export const ContentPaper = styled(Paper)({
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
});

/**
 * Standard padding for content sections
 */
export const ContentBox = styled(Box)({
  padding: spacing.large,
});

/**
 * Form container with standard spacing between form elements
 */
export const FormBox = styled(Box)({
  display: 'grid',
  gap: spacing.large,
});

/**
 * Section container with standard spacing
 */
export const SectionBox = styled(Box)({
  marginBottom: spacing.large,
});

/**
 * Footer container for form buttons
 */
export const FormFooter = styled(Box)({
  marginTop: spacing.xlarge,
  display: 'flex',
  justifyContent: 'space-between',
}); 