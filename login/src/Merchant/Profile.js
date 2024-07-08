import {
    Avatar,
    Box,
    Card,
    Container,
    Grid,
    Stack,
    Typography,
  } from '@mui/material';
  import { useState } from 'react';
  import ResponsiveAppBar from '../Logged in/Naavbar';
  
  export default function MerchantProfile() {
    const [merchant, setMerchant] = useState({
      id: 'M-00123',
      name: 'ABC Store',
      contactNumber: '00000000',
      email: 'contact@abcstore.com',
      address: 'Balkumari, Lalitpur, Nepal',
      description: 'ABC Store offers a wide range of products including electronics, apparel, and home goods. Our mission is to provide high-quality products at competitive prices.',
      logo: './images/hero.png',
      website: 'https://www.abcstore.com',
    });
  
    return (
      <>
        <ResponsiveAppBar />
        <Container sx={{ minWidth: '100%' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <div className="wallet">
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <Avatar
                  alt={merchant.name}
                  src={merchant.logo}
                  sx={{ width: 150, height: 150, mb: 2, mx: 'auto' }}
                />
                <Typography variant="h5" gutterBottom>
                  {merchant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Merchant ID: {merchant.id}
                </Typography>
              </Card>
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className="wallet">
              <Card sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {merchant.contactNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {merchant.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Address: {merchant.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Website: <a href={merchant.website}>{merchant.website}</a>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Description
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {merchant.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
  