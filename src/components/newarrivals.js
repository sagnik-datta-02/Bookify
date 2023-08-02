import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

const baseURL = "https://bookify-back-end.vercel.app/books/get";
const NewArrivalsSection = () => {
    const navigate= useNavigate();
  const [newarrivalData, setNewArrivalData] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseURL}/all`).then((response) => {
      if (typeof response.data === 'object' && response.data !== null) {
        const bookArray = Object.values(response.data);
        console.log(bookArray);
        const bestsellers = bookArray[2].filter((book) => book.tags.includes('new arrivals'));
        setNewArrivalData(bestsellers);
        // setBestSellerData(bookArray[2]);
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
        New Arrivals
      </Typography>
      <Grid container spacing={3}>
        {newarrivalData.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card sx={{ height: 400 }}>
              <CardMedia
                component="img"
                sx={{

                  height: 200,
                  objectFit: 'contain',
                }}
                image={book.image}
                alt={book.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{height:55, mb:2}}>
                  {book.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {book.author}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  Rs. {book.price}
                </Typography>
              </CardContent>
              <div style={{
                display: 'flex',  alignItems: 'flex-end',justifyContent: 'space-between',
              
              }}>
                <Button variant="outlined" color="primary" style={{padding:1 , paddingLeft:1}} onClick={()=>navigate(`/book/${book._id}`)}>
                  Details
                </Button>
                <Button variant="contained" color="primary" style={{padding:1}} disabled>
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

export default NewArrivalsSection;
