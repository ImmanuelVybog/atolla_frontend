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
  gridContainer: {
    display: 'grid', 
    gap: 3, 
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  salaryLabel: {
    mr: 1,
  },
  chipStyles: {
    bgcolor: 'primary.main',
    color: 'common.white',
    '& .MuiChip-deleteIcon': {
      color: 'common.white',
    },
  },
} as Record<string, SxProps<Theme>>; 