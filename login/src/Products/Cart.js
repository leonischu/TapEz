import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from '../Logged in/Naavbar';

export default function CartPage({ cart }) {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ minWidth: '100%', mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Your Cart
        </Typography>
        <List>
          {cart.length === 0 ? (
            <Typography variant="h6" align="center">
              Your cart is empty.
            </Typography>
          ) : (
            cart.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar src={item.image} alt={item.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={`Price: ${item.price}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))
          )}
        </List>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}
