import { styled } from '@mui/material/styles';
import { TextField, Button, Chip, Box } from '@mui/material';
import { colors } from '../../theme';

/**
 * Styled text field with consistent styling across the app
 */
export const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: 'transparent !important',
    '&:hover fieldset': {
      borderColor: colors.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.primary.main,
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent !important',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F3F4F6',
      '& fieldset': {
        borderColor: 'transparent',
      },
    },
  },
  '& .MuiOutlinedInput-input': {
    backgroundColor: 'transparent !important',
    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
      transition: 'background-color 5000s ease-in-out 0s',
      '-webkit-text-fill-color': colors.text.primary,
      '-webkit-box-shadow': '0 0 0px 1000px white inset !important',
      boxShadow: '0 0 0px 1000px white inset !important',
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent !important',
    '&::placeholder': {
      color: colors.text.secondary,
      opacity: 1,
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
  borderRadius: selected ? '30px' : '0',
  margin: '0.3rem 0',
  marginRight: '0',
  padding: '0.2rem 0.5rem',
  backgroundColor: selected ? colors.primary.main : 'transparent',
  color: selected ? colors.common.white : colors.text.secondary,
  border: selected ? 'none' : `1px solid #ddd`,
  borderRight: 'none',
  '&:first-of-type': {
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
  },
  '&:last-of-type': {
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    borderRight: `1px solid #ddd`,
  },
  '&:hover': {
    backgroundColor: selected ? colors.primary.dark : '#f5f5f5',
  },
  '& .MuiChip-deleteIcon': {
    color: selected ? colors.common.white : 'rgba(45, 55, 72, 0.26)',
  },
}));

/**
 * Filter segment control for filter toggles
 */
export const FilterSegmentContainer = styled(Box)({
  display: 'flex',
  background: '#FFFFFF',
  padding: '4px',
  borderRadius: '100px',
  gap: 0,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
});

export const FilterSegment = styled(Button)<{ selected?: boolean }>(({ selected }) => ({
  borderRadius: '100px',
  padding: '8px 24px',
  backgroundColor: selected ? '#FF6B00' : 'transparent',
  color: selected ? '#FFFFFF' : '#666666',
  textTransform: 'none',
  minWidth: 'auto',
  fontWeight: selected ? 600 : 400,
  '&:hover': {
    backgroundColor: selected ? '#FF6B00' : 'rgba(0, 0, 0, 0.04)',
  },
})); 