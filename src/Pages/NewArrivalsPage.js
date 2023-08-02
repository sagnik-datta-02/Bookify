import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from '../components/Navbar';
import BookShowcase from '../components/BookShowcase';
import AllBooksShowcase from '../components/AllBooksShowcase';
import BestsellerSection from '../components/BestSeller';
import Footer from '../components/Footer';
import MenuButtons from '../components/Category';
import NewArrivalsSection from '../components/newarrivals';
const NewArrivalsPage = () => {
    return (
      <div>
        <PrimarySearchAppBar />
        <MenuButtons/>
        <section style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
          <Container maxWidth="md">
            <NewArrivalsSection/>
          </Container>
        </section>
        <Footer/>
      </div>
      
    );
  };
  
  export default NewArrivalsPage;