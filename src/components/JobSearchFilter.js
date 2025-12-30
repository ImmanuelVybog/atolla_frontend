import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, InputAdornment, IconButton, Collapse } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList'; // Import the filter icon

const JobSearchFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Box sx={{ p: 3, borderRadius: 2, mx: 'auto' }}>


      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search everything"
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 }, mr: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleToggleFilters}
          sx={{
            bgcolor: '#FFEAE6',
            color: '#FF5733',
            textTransform: 'none',
            px: 2,
            py: 1,
            borderRadius: 1,
            '&:hover': { bgcolor: '#FFD7CC' },
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <FilterListIcon />
          Filters
        </Button>
      </Box>

      <Collapse in={showFilters}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Job Categories
              </Typography>
              <TextField
                fullWidth
                placeholder="Search job category..."
                variant="outlined"
                size="small"
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                Countries
              </Typography>
              <TextField
                fullWidth
                placeholder="Search country..."
                variant="outlined"
                size="small"
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Salary Range
              </Typography>
              <TextField
                fullWidth
                placeholder="Search by salary range..."
                variant="outlined"
                size="small"
              sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                ),
              }}
            />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Skills
              </Typography>
              <TextField
                fullWidth
                placeholder="Search skills..."
                variant="outlined"
                size="small"
                sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                ),
              }}
            />
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: '#FF5733',
              color: 'white',
              textTransform: 'none',
              py: 1.5,
              borderRadius: 1,
              '&:hover': { bgcolor: '#e65c00' },
              maxWidth: 200,
            }}
          >
            Apply filters
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default JobSearchFilter;