import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Naavbar from '../Naavbar';
import Footer from '../../components/Footer';
import RightSide from '../RightSide';
function createData(name, card_number, balance, limit) {
  return { name, card_number, balance, limit };
}

const rows = [
  createData('Ram', 159, 6.0, 24, 4.0),
  createData('Hari', 237, 9.0, 37, 4.3),
  createData('Sita', 262, 16.0, 24, 6.0),
  createData('Krishna', 305, 3.7, 67, 4.3),
  createData('Arjun', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (<>
  <Naavbar/>
  <RightSide>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:'2rem'}}>Name</TableCell>
            <TableCell sx={{fontSize:'2rem'}}>Card Number</TableCell>
            <TableCell sx={{fontSize:'2rem'}}>Balance&nbsp;</TableCell>
            <TableCell sx={{fontSize:'2rem'}}>Limit&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.card_number}</TableCell>
              <TableCell >{row.balance}</TableCell>
              <TableCell >{row.limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></RightSide>
   < Footer/></>
  );
}
