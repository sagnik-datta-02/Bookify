import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import BestsellerSection from '../components/BestSeller';
import Footer from '../components/Footer';
const BookProductPage = () => {
  // Replace this with actual book data
  const book = {
    image: 'book-image.jpg',
    name: 'Book Name',
    author: 'Author Name',
    price: '$19.99',
    description: 'Book Description',
    genre: 'Fiction',
  };

  const handleAddToCart = () => {
    // Implement the logic to add the book to the cart
    console.log('Book added to cart');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: '20px', margin: '40px 0' }}>
        <Grid container spacing={2}>
          {/* Book Image */}
          <Grid item xs={12} md={6}>
            <img src={book.image} alt={book.name} style={{ width: '100%', height: 'auto' }} />
            <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ marginTop: '20px' }}>
              Add to Cart
            </Button>
          </Grid>

          {/* Book Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {book.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Author: {book.author}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price: {book.price}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Genre: {book.genre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
        
        
      </Paper>
        <Container maxWidth="md">
          <BestsellerSection/>
        </Container>
      <Footer/>
      </Container>
        
   
  );
};

export default BookProductPage;
