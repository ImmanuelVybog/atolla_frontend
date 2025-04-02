import { SxProps, Theme } from '@mui/material';

export const styles = {
  pageTitle: {
    fontWeight: 'bold',
    fontSize: '1.75rem',
    mb: 3
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: '1rem',
    mb: 2
  },
  experienceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  experienceCount: {
    fontWeight: 'normal',
    color: 'text.secondary',
  },
  experienceCard: {
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    padding: 3,
    marginBottom: 3,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    color: 'text.secondary',
  },
  gridContainer: {
    display: 'grid', 
    gap: 3, 
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  currentCheckbox: {
    mt: 1,
  },
  addButton: {
    color: 'primary.main',
    fontWeight: 'normal',
    textTransform: 'none',
    mt: 1,
  },
  optionalLabel: {
    fontWeight: 'normal',
    color: 'text.secondary',
    ml: 0.5,
    fontSize: '0.85rem'
  },
  jobDescription: {
    marginTop: 2,
  },
} as Record<string, SxProps<Theme>>; 