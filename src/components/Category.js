import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useNavigate} from "react-router-dom";
const MenuButtons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handleHotsellersClick = () => {
    navigate("/bestsellers");
  };

  const handleNewArrivalsClick = () => {
    navigate("/newarrivals");
  };

  const handleGenresClick = () => {
  };

  const handleAllBooksClick = () => {
    navigate("/allbooks");
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={3} justifyContent="center" m={2}>
      <Button variant="contained" color="primary" onClick={handleHotsellersClick}>
        BestSellers
      </Button>
      <Button variant="contained" color="primary" onClick={handleNewArrivalsClick}>
        New Arrivals
      </Button>
      <Button variant="contained" color="primary" onClick={handleGenresClick} disabled>
        Genres
      </Button>
      <Button  variant="contained" color="primary" onClick={handleAllBooksClick}>
        All Books
      </Button>
    </Box>
  );
};

export default MenuButtons;
