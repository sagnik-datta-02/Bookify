import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} © Bookify. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Created with ❤️ by S & S.
        </Typography>
       
      </Container>
    </footer>
  );
};

export default Footer;
