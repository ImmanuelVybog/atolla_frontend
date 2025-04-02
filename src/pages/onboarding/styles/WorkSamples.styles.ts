import { SxProps, Theme } from '@mui/material';

export const styles = {
  pageTitle: {
    marginBottom: 4, 
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginBottom: 2, 
    fontWeight: 'bold',
  },
  optionalLabel: {
    component: 'span',
    color: 'text.secondary',
  },
  uploadBox: {
    border: '2px dashed #ddd',
    borderRadius: 2,
    p: 3,
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      borderColor: 'primary.main',
    },
  },
  fileInfoText: {
    mt: 1,
    color: 'text.secondary',
  },
} as Record<string, SxProps<Theme>>; 