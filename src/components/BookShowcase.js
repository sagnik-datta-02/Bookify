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
import { useParams,useNavigate } from 'react-router-dom';

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
    const navigate= useNavigate();
    React.useEffect(() => {
      axios.get(`${baseURL}/genre/Romantic`).then((response) => {
        if (typeof response.data === 'object' && response.data !== null) {
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
              justifyContent: 'center', 
             height: '100%', 
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
                <Button variant="outlined" color="primary" onClick={() => navigate(`/book/${book._id}`)}>
                  Details
                </Button>
                <Button variant="contained" color="primary" disabled>
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
