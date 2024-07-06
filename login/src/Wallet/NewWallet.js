import { LoadingButton } from '@mui/lab';
import { Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ResponsiveAppBar from '../Logged in/Naavbar';
// import { useNavigate } from 'react-router-dom';

export default function NewWallet() {
  const defaultValues = {
    name: '',
    balance: '',
    iban: '',
    email: '',
    userId: '',
  };

  // const navigate = useNavigate();
 
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
    <ResponsiveAppBar/>
     <div className="container">
      <Container >
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Load From Bank
          </Typography>
        </Stack>
        <Card>
          <Grid container alignItems="left" justify="center" direction="column" sx={{ width: 400, padding: 5 }}>
            <Stack spacing={3}>
              <TextField
                id="name"
                name="name"
                label="Bank Name"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <TextField
                id="accountNo"
                name="accountNo"
                label="AccountNo"
              
                value={formValues.iban}
                onChange={handleInputChange}
              />
              <TextField
                id="balance"
                name="balance"
                label="Balance"
                value={formValues.balance}
                onChange={handleInputChange}
              />
            </Stack>
            <Stack spacing={2} direction="row" alignItems="right" justifyContent="end" sx={{ mt: 4 }}>
              <Button sx={{ width: 120 }} variant="outlined" /*onClick={() => navigate('/wallets')}*/>
                Cancel
              </Button>
              <LoadingButton sx={{ width: 120 }} size="large" type="submit" variant="contained" >
                Save
              </LoadingButton>
            </Stack>
          </Grid>
        </Card>
      </Container>
      </div>
    </>
  );
}
