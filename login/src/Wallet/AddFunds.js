import { LoadingButton } from '@mui/lab';
import { Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import ResponsiveAppBar from '../Logged in/Naavbar';



// import { useNavigate } from 'react-router-dom';


export default function AddFunds() {
  const defaultValues = {
    amount: '',
    description: '',
    fromWalletIban: '',
    toWalletIban: '',
    typeId: 1, // set as Transfer by default
  };

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
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Add Funds
          </Typography>
        </Stack>
        <Card>
          <Grid container alignItems="left" justify="center" direction="column" sx={{ width: 400, padding: 5 }}>
            <Stack spacing={3}>
              <TextField
                id="amount"
                name="amount"
                label="Amount"
                autoFocus
                required
                value={formValues.amount}
                onChange={handleInputChange}
              />
              <TextField
                id="description"
                name="description"
                label="Description"
                autoComplete="description"
                required
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Stack>
            <Stack spacing={2} direction="row" alignItems="right" justifyContent="end" sx={{ mt: 4 }}>
              <Button sx={{ width: 120 }} variant="outlined"/* onClick={() => navigate('/wallets')}*/>
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
