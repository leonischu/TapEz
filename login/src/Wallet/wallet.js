import {
  Button,
  Card,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,

  TableRow,
  TableHead,
  Typography,
} from '@mui/material';
import ResponsiveAppBar from '../Logged in/Naavbar';

import { useEffect, useState } from 'react';

import Iconify from '../components/iconify/Iconify';
import Scrollbar from '../components/scrollbar/Scrollbar';

const TABLE_HEAD = [
  { id: 'id', label: 'Id', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'balance', label: 'Balance', alignRight: false },
  { id: 'user', label: 'User', alignRight: false },
  { id: '', label: '', alignRight: false },
  { id: '' },
];

export default function Wallet() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([
    { id: 1, name: 'Phone Pay', balance: 1000, user: { fullName: 'Nischal Neupane' }},
    { id: 2, name: 'Esewa', balance: 2000, user: { fullName: 'Nischal Neupane' } },
    { id: 3, name: 'Khalti', balance: 3000, user: { fullName: 'Nischal Neupane' }  },
    { id: 4, name: 'Ime Pay', balance: 4000, user: { fullName: 'Nischal Neupane' } },
   
  ]);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };




 
  return (
    <>
    <ResponsiveAppBar/>
      <Container sx={{ minWidth: '100%' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          
<div className="wallet">        <Typography variant="h4" gutterBottom>
            Wallet
          </Typography>  </div>   
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            Load Fund
          </Button>
        
        </Stack>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    {TABLE_HEAD.map((headCell) => (
                      <TableCell key={headCell.id} align={headCell.alignRight ? 'right' : 'left'}>
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, balance, user } = row;
                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox">
                        <TableCell align="left" sx={{ paddingLeft: 5 }}>
                          {id}
                        </TableCell>
                        <TableCell align="left">{name}</TableCell>
                        <TableCell align="left">{balance}</TableCell>
                        <TableCell align="left">{user.fullName}</TableCell>
                       
                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        
        </Card>
      </Container>
     
    </>
  );
}
