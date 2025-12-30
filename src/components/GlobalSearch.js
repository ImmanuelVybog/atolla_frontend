import { useState } from 'react';
import {
  Box,
  InputBase,
  Button,
  Drawer,
  Typography,
  IconButton,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Stack
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '100px',
  padding: '8px 16px',
  width: '100%',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
});

const StyledInputBase = styled(InputBase)({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 0',
  },
});

const FilterButton = styled(Button)({
  borderRadius: '100px',
  textTransform: 'none',
  color: '#666',
  borderColor: '#ddd',
  padding: '8px 16px',
  '&:hover': {
    borderColor: '#FF6B00',
    backgroundColor: 'transparent',
  },
});

const SearchButton = styled(Button)({
  borderRadius: '100px',
  textTransform: 'none',
  backgroundColor: '#FF6B00',
  color: '#fff',
  padding: '8px 24px',
  '&:hover': {
    backgroundColor: '#e65c00',
  },
});

const FilterChip = styled(Chip)({
  backgroundColor: 'rgba(255, 107, 0, 0.1)',
  color: '#FF6B00',
  borderRadius: '100px',
  '& .MuiChip-deleteIcon': {
    color: '#FF6B00',
    '&:hover': {
      color: '#e65c00',
    },
  },
});



const GlobalSearch = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRemoveFilter = (filterToRemove) => {
    setSelectedFilters(filters => 
      filters.filter(filter => 
        !(filter.label === filterToRemove.label && filter.category === filterToRemove.category)
      )
    );
  };

  const handleRemoveAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <>
      <Box sx={{ 
        bgcolor: '#222222',
        px: { xs: 2, md: 4 },
        py: 2,
      }}>
        <Box sx={{ 
          maxWidth: '1440px', 
          margin: '0 auto',
          width: '100%',
        }}>
          <SearchWrapper>
            <SearchIcon sx={{ color: '#666', mr: 1 }} />
            <StyledInputBase
              placeholder="Search for Jobs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Box sx={{ display: 'flex', gap: 1, ml: 1 }}>
              <FilterButton
                variant="outlined"
                startIcon={<TuneIcon />}
                onClick={() => setIsFilterOpen(true)}
              >
                Filters
              </FilterButton>
              <SearchButton variant="contained">
                Search
              </SearchButton>
            </Box>
          </SearchWrapper>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        PaperProps={{
          sx: {
            width: '400px',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TuneIcon />
              <Typography variant="h6">Filters</Typography>
            </Box>
            <IconButton onClick={() => setIsFilterOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            flexWrap: 'wrap',
            mb: 2,
            pb: 2,
            borderBottom: '1px solid #eee'
          }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Selected Filters
              </Typography>
              {selectedFilters.length > 0 && (
                <Button
                  onClick={handleRemoveAllFilters}
                  sx={{ 
                    color: '#FF6B00', 
                    textTransform: 'none',
                    p: 0,
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Clear all
                </Button>
              )}
            </Box>
            {selectedFilters.length > 0 ? (
              selectedFilters.map((filter, index) => (
                <FilterChip
                  key={index}
                  label={filter.label}
                  onDelete={() => handleRemoveFilter(filter)}
                />
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No filters selected
              </Typography>
            )}
          </Box>

          <Stack spacing={3} sx={{ 
            overflowY: 'auto', 
            maxHeight: 'calc(100vh - 250px)',
            pr: 1,
            mr: -1,
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
              '&:hover': {
                background: '#666',
              },
            },
          }}>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Date posted</Typography>
              <RadioGroup>
                <FormControlLabel value="any" control={<Radio />} label="Any time" />
                <FormControlLabel value="past_month" control={<Radio />} label="Past month" />
                <FormControlLabel value="past_week" control={<Radio />} label="Past week" />
                <FormControlLabel value="past_24h" control={<Radio />} label="Past 24 hours" />
              </RadioGroup>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Experience level</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Internship" />
                <FormControlLabel control={<Checkbox />} label="Entry level" />
                <FormControlLabel control={<Checkbox />} label="Associate" />
                <FormControlLabel control={<Checkbox />} label="Mid-Senior level" />
                <FormControlLabel control={<Checkbox />} label="Director" />
                <FormControlLabel control={<Checkbox />} label="Executive" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Company</Typography>
              <TextField
                fullWidth
                placeholder="Search Companies"
                size="small"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Google" />
                <FormControlLabel control={<Checkbox />} label="Amazon" />
                <FormControlLabel control={<Checkbox />} label="Microsoft" />
                <FormControlLabel control={<Checkbox />} label="Meta" />
                <FormControlLabel control={<Checkbox />} label="Apple" />
                <FormControlLabel control={<Checkbox />} label="Netflix" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Job Title</Typography>
              <TextField
                fullWidth
                placeholder="Search Job Title"
                size="small"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Software Engineer" />
                <FormControlLabel control={<Checkbox />} label="Full Stack Engineer" />
                <FormControlLabel control={<Checkbox />} label="Frontend Developer" />
                <FormControlLabel control={<Checkbox />} label="Backend Developer" />
                <FormControlLabel control={<Checkbox />} label="DevOps Engineer" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Job type</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Full-time" />
                <FormControlLabel control={<Checkbox />} label="Part-time" />
                <FormControlLabel control={<Checkbox />} label="Contract" />
                <FormControlLabel control={<Checkbox />} label="Temporary" />
                <FormControlLabel control={<Checkbox />} label="Internship" />
                <FormControlLabel control={<Checkbox />} label="Volunteer" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Job nature</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="On-site" />
                <FormControlLabel control={<Checkbox />} label="Hybrid" />
                <FormControlLabel control={<Checkbox />} label="Remote" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Location</Typography>
              <TextField
                fullWidth
                placeholder="Search Location"
                size="small"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Bengaluru" />
                <FormControlLabel control={<Checkbox />} label="Mumbai" />
                <FormControlLabel control={<Checkbox />} label="Delhi" />
                <FormControlLabel control={<Checkbox />} label="Hyderabad" />
                <FormControlLabel control={<Checkbox />} label="Chennai" />
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Industry</Typography>
              <TextField
                fullWidth
                placeholder="Search Industry"
                size="small"
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FormControlLabel control={<Checkbox />} label="Information Technology" />
                <FormControlLabel control={<Checkbox />} label="Software Development" />
                <FormControlLabel control={<Checkbox />} label="Financial Services" />
                <FormControlLabel control={<Checkbox />} label="Healthcare" />
                <FormControlLabel control={<Checkbox />} label="E-commerce" />
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box sx={{ 
          position: 'sticky', 
          bottom: 0, 
          p: 3,
          bgcolor: '#fff',
          borderTop: '1px solid #eee',
          display: 'flex',
          gap: 2
        }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleRemoveAllFilters}
            sx={{ 
              textTransform: 'none',
              borderColor: '#ddd',
              color: '#666'
            }}
          >
            Remove All
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setIsFilterOpen(false)}
            sx={{ 
              textTransform: 'none',
              bgcolor: '#FF6B00',
              '&:hover': {
                bgcolor: '#e65c00'
              }
            }}
          >
            Apply Filters
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default GlobalSearch; 