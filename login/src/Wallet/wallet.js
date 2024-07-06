import {
    Button,
    Card,
    Container,
    IconButton,
    MenuItem,
    Popover,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TablePagination,
    TableRow,
    Typography,
  } from '@mui/material';
  import { useEffect, useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import Iconify from '../components/iconify/Iconify';
  import  Scrollbar from '../components/scrollbar/Scrollbar';

//   import WalletListHead from './WalletListHead';
  

  
  export default function Wallet() {
    const [open, setOpen] = useState(null);
    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState([]);
    // const navigate = useNavigate();
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  
    const handleOpenMenu = (event) => {
      setOpen(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setOpen(null);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setPage(0);
      setRowsPerPage(parseInt(event.target.value, 10));
    };
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
   
  
    return (
      <>
        
       
        <Container sx={{ minWidth: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography variant="h4" gutterBottom>
           My Wallet
            </Typography>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            //   onClick={() => navigate('/wallets/new')}
            >
              Link Bank
            </Button>
          </Stack>
          
          <Card>
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  {/* <WalletListHead headLabel={TABLE_HEAD} /> */}
                  <TableBody>
                    {data &&
                      data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        const { id,  balance, user, iban } = row;
                        
                        return (
                          <TableRow hover key={id} tabIndex={-1} role="checkbox" >
                            <TableCell align="left" sx={{ paddingLeft: 5 }}>
                              {id}
                            </TableCell>
                            <TableCell align="left">ram</TableCell>
                            <TableCell align="left">{balance}</TableCell>
                            <TableCell align="left">{user.fullName}</TableCell>
                            <TableCell align="left">{iban}</TableCell>
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
            <TablePagination
              rowsPerPageOptions={[5,10,15,20 ]}
              component="div"
              count={data?.length > 0 ? data.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        </Container>
        <Popover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          
        >
          <MenuItem disabled>
            <Iconify icon={'material-symbols:edit'} sx={{ mr: 2 }} />
            <Link style={{ textDecoration: 'none' }}>Edit</Link>
          </MenuItem>
          <MenuItem disabled sx={{ color: 'error.main' }}>
            <Iconify icon={'material-symbols:delete-rounded'} sx={{ mr: 2 }} />
            <Link style={{ textDecoration: 'none' }}>Delete</Link>
          </MenuItem>
        </Popover>
      </>
    );
  }