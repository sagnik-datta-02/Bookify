import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const bestsellerData = [

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
  },{
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
  },{
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
  // Add more bestseller data here...
];

const BestsellerSection = () => {
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
                alt={book.title}
              />
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestsellerSection;
