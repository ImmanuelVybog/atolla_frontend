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
  formSection: {
    display: 'grid',
    gap: 3,
  },
  gridContainer: {
    display: 'grid', 
    gap: 3, 
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  phoneInput: {
    width: '100%',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 3,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  uploadHelp: {
    color: 'text.secondary',
    mt: 1,
    fontSize: '0.875rem',
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