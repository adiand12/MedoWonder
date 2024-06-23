import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// import Menu from '@mui/material/Menu';

// import IconButton from '@mui/material/IconButton';
// import LanguageIcon from '@mui/icons-material/Language';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Select, MenuItem } from '@mui/material';

const TopBar = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = (language) => {
  //   setAnchorEl(null);
  //   if (language) {
  //     setSelectedLanguage(language);
  //   }
  // };

  return (
    <AppBar position="static"  sx={{ height: '44px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' , minHeight: '48px !important', padding: '0 16px' }} >
        <Box display="flex" alignItems="center"  >
          <Typography variant="body1" sx={{ marginRight: 2, display: isSmallScreen ? 'none' : 'block' }}>
            (123) 456-7890
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, display: isSmallScreen ? 'none' : 'block' }}>
            - 
          </Typography>
          <Typography variant="body1" sx={{ display: isSmallScreen ? 'none' : 'block' }}>
            example@example.com
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
      {/* <Typography variant="body1" sx={{ marginRight: 1, color: 'white' }}>
        Language:
      </Typography> */}
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        sx={{ color: 'white', borderColor: 'white' }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'black',
              '& .MuiMenuItem-root': {
                color: 'white',
              },
            },
          },
        }}
      >
        <MenuItem value="English">English</MenuItem>
        <MenuItem value="Spanish">Spanish</MenuItem>
        <MenuItem value="French">French</MenuItem>
      </Select>
    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
