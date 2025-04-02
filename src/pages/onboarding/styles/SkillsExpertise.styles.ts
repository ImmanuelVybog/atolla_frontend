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
} as Record<string, SxProps<Theme>>; 