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

const UsersTable = ({usersRows, count, fetchData}) => {
  const [page, setPage] = useState(0);
  const [pagesVisited, setPagesVisited] = useState([0])
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const displayingSearch = usersRows?.length === 1

  const handleChangePage = async (event, newPage) => {
    // Keeps track of pages visited so API does not need to fetch existing data
    if(pagesVisited.includes(newPage)){
      setPage(newPage);
    } else {
      setButtonDisabled(true);
      await fetchData(newPage);
      setPage(newPage);
      setPagesVisited(pagesVisited.concat(newPage));
      setButtonDisabled(false);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const currentPageUsers = () => {
    if(!displayingSearch){
      return usersRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    } 
      return usersRows;
  }

  const averageHeight = calculateAverage(currentPageUsers(), "height");;
  const averageMass = calculateAverage(currentPageUsers(), "mass");;

  const disabledNext = buttonDisabled || currentPageUsers().length < rowsPerPage
  
  return (
    <Paper sx={{ width: '90%' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header,i) => (
                <TableCell
                  key={`${header.name}_header_${i}`}
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageUsers()
              .map((row,i) => {
                return (
                  <TableRow hover key={`${row.name}_row_${i}`}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.gender}</TableCell>
                      <TableCell>{row.hair_color}</TableCell>
                      <TableCell>{row.height}</TableCell>
                      <TableCell>{row.mass}</TableCell>
                  </TableRow>
                );
              })}
              <TableRow hover>
                <TableCell />
                <TableCell />
                <TableCell align="right">Average:</TableCell>
                <TableCell>
                  {isNaN(averageHeight) ? "N/A" : averageHeight}
                </TableCell>
                <TableCell>
                  {isNaN(averageMass) ? "N/A" : averageMass}
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {displayingSearch ? null :       
        (<TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{disabled: disabledNext}}
        />)}

    </Paper>
  );
}

export default UsersTable;