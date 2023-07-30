import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button , CardActions, Divider} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'; // You can use any carousel library

const bookData = [
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Otvorena_knjiga.JPG', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Otvorena_knjiga.JPG', // Replace with the actual image path
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'book1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'book2.jpg', // Replace with the actual image path
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'book1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'book2.jpg', // Replace with the actual image path
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'book1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'book2.jpg', // Replace with the actual image path
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'book1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'book2.jpg', // Replace with the actual image path
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name 1',
    price: '$10.99',
    image: 'book1.jpg', // Replace with the actual image path
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name 2',
    price: '$12.99',
    image: 'book2.jpg', // Replace with the actual image path
  },];

const BookShowcase = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Featured Books
      </Typography>
      <Carousel animation="slide" navButtonsAlwaysVisible={true} maxWidth="md">
        {bookData.map((book) => (
          <Card
            key={book.id}
            sx={{
              
              display: 'flex',
              flexDirection: 'column',
             // alignItems: 'center', // Center the content horizontally
              justifyContent: 'center', // Center the content vertically
             // height: '100%', // Ensure that the cards have equal height within the carousel
              boxShadow: 'none',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                
                height: 300, // Set the desired height (e.g., 200px)
                objectFit: 'contain', // Ensure the image covers the entire area
              }}
              image={book.image}
              alt={book.title}
            />
            <Divider />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {book.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {book.author}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {book.price}
              </Typography>
            </CardContent>
          
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" color="primary">
                  Details
                </Button>
                <Button variant="contained" color="primary">
                  Cart
                </Button>
              </div>
      
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default BookShowcase;
