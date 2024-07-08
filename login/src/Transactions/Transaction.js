import {
  Card,
  Container,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
 
  TableRow,
  Typography,
} from '@mui/material';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import Iconify from '../components/iconify/Iconify';
import Label from '../components/label/Label';
import Scrollbar from '../components/scrollbar/Scrollbar';
import ResponsiveAppBar from '../Logged in/Naavbar';

const TABLE_HEAD = [
  { id: 'id', label: 'Id', alignRight: false, firstColumn: true },
  { id: 'sender', label: 'Sender', alignRight: false },
  { id: 'receiver', label: 'Receiver', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: true },
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'createdAt', label: 'Time of Transaction', alignRight: false },
  { id: 'type', label: 'Type', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

const TransactionListHead = ({ headLabel }) => (
  <TableRow>
    {headLabel.map((headCell) => (
      <TableCell >
        {headCell.label}
      </TableCell>
    ))}
  </TableRow>
);

export default function Transaction() {
  const [open, setOpen] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState([
    { id: 15, sender: { fullName: 'Leo' }, receiver: { fullName: 'Nischal Neupane' }, amount: 160, description: 'Transfered', createdAt: '27.03.2024 13:58:08', type: { name: 'Transfer' }, status: 'SUCCESS' },
    { id: 14, sender: { fullName: 'Ram' }, receiver: { fullName: 'Nischal Neupane' }, amount: 240, description: 'Transfered', createdAt: '27.03.2024 13:57:33', type: { name: 'Transfer' }, status: 'SUCCESS' },
    { id: 13, sender: { fullName: 'Nischal Neupane' }, receiver: { fullName: 'Leo' }, amount: 130, description: 'Transfered', createdAt: '27.03.2024 13:56:32', type: { name: 'Transfer' }, status: 'SUCCESS' },
    { id: 11, sender: { fullName: 'Nischal Neupane' }, receiver: { fullName: 'Ram' }, amount: 250, description: 'Transfered', createdAt: '27.03.2024 13:53:05', type: { name: 'Transfer' }, status: 'SUCCESS' },
    { id: 25, sender: { fullName: 'Nischal Neupane' }, receiver: { fullName: 'Nischal Neupane' }, amount: 5000, description: 'Initial balance', createdAt: '27.03.2024 13:41:59', type: { name: 'Transfer' }, status: 'SUCCESS' },
  ]);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };



  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ minWidth: '100%' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Transactions
          </Typography>
        </Stack>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableBody>
                  <TransactionListHead headLabel={TABLE_HEAD} />
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, sender, receiver, amount, description, createdAt, type, status } = row;
                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox">
                        <TableCell align="left" sx={{ paddingLeft: 5 }}>
                          {id}
                        </TableCell>
                        <TableCell align="left">{sender.fullName}</TableCell>
                        <TableCell align="left">{receiver.fullName}</TableCell>
                        <TableCell align="right">{amount}</TableCell>
                        <TableCell align="left">{description}</TableCell>
                        <TableCell align="left">{createdAt}</TableCell>
                        <TableCell align="left">{type.name}</TableCell>
                        <TableCell align="left">
                          <Label color={status === 'SUCCESS' ? 'success' : 'warning'}>{sentenceCase(status)}</Label>
                        </TableCell>
                        <TableCell align="right" width="20">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={9} />
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
