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

export default function UserProfile() {
  const [user, setUser] = useState({
    id: '12345',
    fullName: 'Nischal Neupane',
    contactNumber: '000000000',
    email: 'nischal@example.com',
    address: 'Duwakot, Bkt, Nepal',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.',
    profilePicture: './images/user.png',
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
                alt={user.fullName}
                src={user.profilePicture}
                sx={{ width: 150, height: 150, mb: 2, mx: 'auto' }}
              />
              <Typography variant="h5" gutterBottom>
                {user.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                User ID: {user.id}
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
                    Phone: {user.contactNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address: {user.address}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Bio
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.bio}
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
