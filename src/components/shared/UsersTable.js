import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {calculateAverage} from '../../helpers/calculate';

const headers = [
    {name: 'Name'},
    {name: 'Gender'},
    {name: 'Hair Color'},
    {name: 'Height'},
    {name: 'Mass'},
];

const UsersTable = ({usersRows}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const currentPageUsers = usersRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const averageHeight = calculateAverage(currentPageUsers, "height");;
  const averageMass = calculateAverage(currentPageUsers, "mass");;
  
  return (
    <Paper sx={{ width: '90%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header,i) => (
                <TableCell
                  key={`${header.name}_${i}`}
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageUsers
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.name}>
                      <TableCell
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.hair_color}</TableCell>
                      <TableCell>{row.height}</TableCell>
                      <TableCell>{row.mass}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow hover tabIndex={-1}>
                <TableCell />
                <TableCell />
                <TableCell align="right">Average:</TableCell>
                <TableCell>
                  {averageHeight}
                </TableCell>
                <TableCell>
                  {averageMass}
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[1, 5, 10]}
        component="div"
        count={usersRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default UsersTable;