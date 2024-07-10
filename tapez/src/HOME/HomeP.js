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
import ResponsiveAppBar from './Naavbar';
import Iconify from '../HOME/components/iconify/Iconify';
import './HomeP.css'; // Import CSS file
import Footer from '../components/Footer';

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
                      <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '2rem' }}>
                        Nischal Neupane
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                        9848008194
                      </Typography>
                    </Stack>
                  </Stack>
                  
                  <Button variant="contained"  sx={{ fontSize: '2rem',backgroundColor:'#006989',color:"#fff"}} >Home</Button>
                  <Button  variant="contained" sx={{ fontSize: '2rem',backgroundColor:'#006989',color:"#fff" }}>Wallet</Button>
                  <Button variant="contained"  sx={{ fontSize: '2rem',backgroundColor:'#006989',color:"#fff" }}>Load Fund</Button>
                  <Button variant="contained" sx={{ fontSize: '2rem',backgroundColor:'#006989',color:"#fff" }}>Transaction </Button>
        
                </Stack>
              </Card>

              {/* Contact section */}
              <Card sx={{ p: 2 ,marginBottom:3}}>
                <Typography variant="h3" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '2rem' }}>
                  Phone: 01-000000
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '2rem' }}>
                  Toll-Free: 01-000000
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '2rem' }}>
                  Mobile: 9841000000
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '2rem' }}>
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
                <Button variant="contained"sx={{ fontSize: '2rem',backgroundColor:'#006989',color:"#fff"}}>
                  Link Bank Now
                </Button>
              </Card>

              <Card sx={{ p: 2 }}>
                <Typography variant="h4" gutterBottom>
                   Payments
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
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
      <Footer/>
    </>
  );
}
