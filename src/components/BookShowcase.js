import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Button , CardActions, Divider} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'; // You can use any carousel library
import axios from "axios";


const baseURL = "https://bookify-back-end.vercel.app/books/get";

const BookShowcase = () => {
  const [bookData,setBookData] = React.useState([
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
    },]);
    React.useEffect(() => {
      axios.get(`${baseURL}/all`).then((response) => {
        // Make sure the response data is an object
        if (typeof response.data === 'object' && response.data !== null) {
          // Convert the object to an array
          const bookArray = Object.values(response.data);
          console.log(bookArray);
          setBookData(bookArray[2]);
        } else {
          console.error('Data received from API is not an object:', response.data);
        }
      }).catch((error) => {
        console.error('Error fetching book data:', error);
      });
    }, []);
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
             height: '100%', // Ensure that the cards have equal height within the carousel
              boxShadow: 'none',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                
                height: 300, 
                objectFit: 'contain', 
              }}
              image={book.image}
              alt={book.name}
            />
            <Divider />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{height:55}}>
                {book.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {book.author}
              </Typography>
              <Typography variant="h6" color="text.primary">
                Rs.{book.price}
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
