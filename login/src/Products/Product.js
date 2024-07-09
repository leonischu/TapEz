import React, { useState } from 'react';
import {

  Card,
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  CardContent,
  CardMedia,
  CardActions,

  Badge,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../Logged in/Naavbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const productsData = [
  {
    id: 'P-001',
    name: 'Product 1',
    image: 'https://via.placeholder.com/300',
    price: '$100',
    description: 'This is a brief description of Product 1.',
  },
  {
    id: 'P-002',
    name: 'Product 2',
    image: 'https://via.placeholder.com/300',
    price: '$200',
    description: 'This is a brief description of Product 2.',
  },
  {
    id: 'P-003',
    name: 'Product 3',
    image: 'https://via.placeholder.com/300',
    price: '$300',
    description: 'This is a brief description of Product 3.',
  },
  {
    id: 'P-004',
    name: 'Product 4',
    image: 'https://via.placeholder.com/300',
    price: '$400',
    description: 'This is a brief description of Product 4.',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

export default function ProductPage() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ minWidth: '100%', mt: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" gutterBottom align="center">
            Our  Products
          </Typography>
          <Button component={Link} to="/cart" variant="contained" color="primary" startIcon={
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          }>
            View Cart
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
