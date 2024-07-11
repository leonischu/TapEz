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
  
  export default function RightSide() {
    return (
      <>
    
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
</Grid>
          </Container>
        </div>
      
      </>
    );
  }
  