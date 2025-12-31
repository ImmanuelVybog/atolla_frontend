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
    <Box sx={{ p: 3, borderRadius: 2, mx: 'auto', background: 'white', boxShadow: '0px 0px 6px 1px rgb(136 136 136 / 3%)', border: '1px solid #ebebeb' }}>


      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search everything"
          variant="outlined"
          size="small"
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>


        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: '500', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Job Categories
              </Typography>
              <TextField
                fullWidth
                placeholder="Search job category..."
                variant="outlined"
                size="small"
                sx={{ mb: 0.3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: '500', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                Countries
              </Typography>
              <TextField
                fullWidth
                placeholder="Search country..."
                variant="outlined"
                size="small"
                sx={{ mb: 0.3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: '500', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Salary Range
              </Typography>
              <TextField
                fullWidth
                placeholder="Search by salary range..."
                variant="outlined"
                size="small"
                sx={{ mb: 0.3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: '500', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                 Skills
              </Typography>
              <TextField
                fullWidth
                placeholder="Search skills..."
                variant="outlined"
                size="small"
                sx={{ mb: 0.3, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
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
              bgcolor: '#FF6B00',
              color: 'white',
              textTransform: 'none',
              py: 1.5,
              borderRadius: 5,
              '&:hover': { bgcolor: '#e65c00' },
              maxWidth: 200,
            }}
          >
            Apply filters
          </Button>
        </Box>
    </Box>
  );
};

export default JobSearchFilter;