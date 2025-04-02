import { styled } from '@mui/material/styles';
import { TextField, Button, Chip } from '@mui/material';
import { colors } from '../../theme';

/**
 * Styled text field with consistent styling across the app
 */
export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    '&:hover fieldset': {
      borderColor: colors.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.main,
    },
  },
});

/**
 * Action button with primary/secondary styling options
 */
export const ActionButton = styled(Button)<{ $primary?: boolean }>(({ $primary }) => ({
  borderRadius: '30px',
  padding: $primary ? '0.6rem 1.5rem' : '0.6rem 1rem',
  backgroundColor: $primary ? colors.primary.main : 'transparent',
  color: $primary ? colors.common.white : colors.primary.main,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: $primary ? colors.primary.dark : colors.action.hover,
  },
}));

/**
 * Upload button for file uploads
 */
export const UploadButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'component'
})({
  border: `1px solid ${colors.primary.main}`,
  borderRadius: '30px',
  color: colors.primary.main,
  padding: '8px 16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: colors.action.hover,
  },
});

/**
 * Styled chip for skills, tags, etc.
 */
export const StyledChip = styled(Chip)<{ selected?: boolean }>(({ selected }) => ({
  borderRadius: '30px',
  margin: '0.3rem 0.3rem 0.3rem 0',
  padding: '0.2rem 0.5rem',
  backgroundColor: selected ? colors.primary.main : 'transparent',
  color: selected ? colors.common.white : colors.text.secondary,
  border: selected ? 'none' : `1px solid #ddd`,
  '&:hover': {
    backgroundColor: selected ? colors.primary.dark : '#f5f5f5',
  },
})); 