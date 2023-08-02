import React from 'react';
import {useNavigate} from "react-router-dom"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from '../components/Navbar';
import BookShowcase from '../components/BookShowcase'
import BestsellerSection from '../components/BestSeller';
import Footer from '../components/Footer';
import MenuButtons from '../components/Category';
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PrimarySearchAppBar />
      
      <MenuButtons/>
      
      <section style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container maxWidth="md">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" gutterBottom>
                Welcome to Bookify
              </Typography>
              <Typography variant="body1" gutterBottom>
                Discover the world of books with Bookify. We offer a wide
                collection of bestsellers, new arrivals, and genres for all book
                lovers. Explore and find your next great read today!
              </Typography>
              <Button onClick={()=>navigate("/allbooks")} variant="contained" color="primary" size="large">
                Explore Books
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
          </Grid>
        </Container>
        <section style={{ padding: '50px' }}>
        <BookShowcase />
      </section>
        <Container maxWidth="md">
          <BestsellerSection/>
        </Container>
      </section>
      <Footer/>
    </div>
    
  );
};

export default LandingPage;
