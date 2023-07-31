import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import axios from 'axios';


const baseURL = "https://bookify-back-end.vercel.app/books/get";
const BestsellerSection = () => {

  const [bestsellerData,setBestSellerData] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/all`).then((response) => {
      // Make sure the response data is an object
      if (typeof response.data === 'object' && response.data !== null) {
        // Convert the object to an array
        const bookArray = Object.values(response.data);
        console.log(bookArray);
        setBestSellerData(bookArray[2]);
      } else {
        console.error('Data received from API is not an object:', response.data);
      }
    }).catch((error) => {
      console.error('Error fetching book data:', error);
    });
  }, []);
  return (
    <Container maxWidth="md" style={{ padding: '50px 0' }}>
      <Typography variant="h2" gutterBottom>
        Bestsellers
      </Typography>
      <Grid container spacing={3}>
        {bestsellerData.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={book.image}
                alt={book.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.name}
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestsellerSection;
