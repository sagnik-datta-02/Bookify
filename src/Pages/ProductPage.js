import React from 'react';
import { Container, Grid, Paper, Typography, Button, dividerClasses } from '@mui/material';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import BestsellerSection from '../components/BestSeller';
import Footer from '../components/Footer';
import PrimarySearchAppBar from '../components/Navbar';
import MenuButtons from '../components/Category';

const baseURL = "https://bookify-back-end.vercel.app/books/get";
const BookProductPage = () => {
  // Replace this with actual book data
  const [book, setBook] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`${baseURL}?book_id=${id}`).then((response) => {
      // Make sure the response data is an object
      console.log(response.data.data);
        
        
       setBook(response.data.data);
        // setBestSellerData(bookArray[2]);

     
    }).catch((error) => {
      console.error('Error fetching book data:', error);
    });
  }, []);
 

  const handleAddToCart = () => {
    // Implement the logic to add the book to the cart
    console.log('Book added to cart');
  };

  return (
    <>
     <PrimarySearchAppBar></PrimarySearchAppBar>
      <MenuButtons></MenuButtons>
    <Container maxWidth="md" >
     
      
      <Paper elevation={3} sx={{ padding: '20px', margin: '40px 0' }}>
        <Grid container spacing={2}>
          {/* Book Image */}
          <Grid item xs={12} md={6} >
            <img src={book.image} alt={book.name} style={{ width: '100%', height: '300' }} />
            <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ marginTop: '20px' }} disabled>
              Add to Cart
            </Button>
          </Grid>

          {/* Book Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              {book.name}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Author: {book.author}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Price: Rs {book.price}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Genre: {book.genre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {book.description}
            </Typography>
          </Grid>
        </Grid>
        
        
      </Paper>
       <BestsellerSection/>
      
      </Container>
        <Footer/>
   </>
  );
};

export default BookProductPage;
