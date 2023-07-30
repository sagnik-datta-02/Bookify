import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MenuButtons = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleHotsellersClick = () => {
    // Handle click for Hotsellers button, navigate to the corresponding page
    // Replace 'hotsellers-page' with the actual path of your Hotsellers page
    // For example: history.push('/hotsellers');
  };

  const handleNewArrivalsClick = () => {
    // Handle click for New Arrivals button, navigate to the corresponding page
    // Replace 'new-arrivals-page' with the actual path of your New Arrivals page
    // For example: history.push('/new-arrivals');
  };

  const handleGenresClick = () => {
    // Handle click for Genres button, navigate to the corresponding page
    // Replace 'genres-page' with the actual path of your Genres page
    // For example: history.push('/genres');
  };

  const handleAllBooksClick = () => {
    // Handle click for All Books button, navigate to the corresponding page
    // Replace 'all-books-page' with the actual path of your All Books page
    // For example: history.push('/all-books');
  };

  return (
    <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={1} justifyContent="center" mt={2}>
      <Button variant="contained" color="primary" onClick={handleHotsellersClick}>
        Hotsellers
      </Button>
      <Button variant="contained" color="primary" onClick={handleNewArrivalsClick}>
        New Arrivals
      </Button>
      <Button variant="contained" color="primary" onClick={handleGenresClick}>
        Genres
      </Button>
      <Button variant="contained" color="primary" onClick={handleAllBooksClick}>
        All Books
      </Button>
    </Box>
  );
};

export default MenuButtons;
