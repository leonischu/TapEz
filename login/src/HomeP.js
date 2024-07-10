import {
  Button,
  Card,
  Container,
  Stack,
  Typography,
  Grid,
  IconButton,
  Paper,
} from '@mui/material';
import ResponsiveAppBar from './Logged in/Naavbar';
import Iconify from './components/iconify/Iconify';

export default function HomeP() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="land">
        <Container sx={{ minWidth: '100%', mt: 4 }}>
          <Grid container spacing={3}>
            {/* Sidebar */}
            <Grid item xs={2}>
              <Card sx={{ p: 2, mb: 3 }}>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Iconify icon="eva:person-outline" width={40} height={40} />
                    <Stack>
                      <Typography variant="body1" fontWeight="bold">
                        Nischal Neupane
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        9848008194
                      </Typography>
                    </Stack>
                  </Stack>
                  <Button>Home</Button>
                  <Button className="btn">Bazaar</Button>
                  <Button>Services</Button>
                  <Button>Bookings</Button>
                  <Button>Account</Button>
                  <Button>Wallet</Button>
                  <Button>Bank Link</Button>
                  <Button>Transaction History</Button>
                  <Button>Coupon</Button>
                  <Button>Loyalty</Button>
                  <Button>My Limits</Button>
                </Stack>
              </Card>

              {/* Contact section */}
              <Card sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="body2">
                  Phone: 01-000000
                </Typography>
                <Typography variant="body2">
                  Toll-Free: 01-000000
                </Typography>
                <Typography variant="body2">
                  Mobile: 9841000000
                </Typography>
                <Typography variant="body2">
                  Email: support@TapEz.com
                </Typography>
              </Card>
            </Grid>

            {/* Main content */}
            <Grid item xs={10}>
              <Card sx={{ p: 2, mb: 3 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Iconify icon="eva:home-outline" width={40} height={40} />
                  <Typography variant="h4" fontWeight="bold">
                    TapEz Bank Direct
                  </Typography>
                </Stack>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Link Bank Now
                </Button>
              </Card>

              <Card sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Recharge & Bill Payments
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <Button startIcon={<Iconify icon="eva:smartphone-outline" />} fullWidth>
                      Topup
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button startIcon={<Iconify icon="eva:tv-outline" />} fullWidth>
                      TV
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button startIcon={<Iconify icon="eva:flash-outline" />} fullWidth>
                      Internet
                    </Button>
                  </Grid>
                  {/* Add more options similarly */}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
