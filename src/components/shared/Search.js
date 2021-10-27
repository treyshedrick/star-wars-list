import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Search = ({users, onSearch}) => {
  return (
    <Autocomplete
      onChange={(event, value) => onSearch(value)}
      disablePortal
      options={users}
      sx={{ width: "45%" }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}

export default Search;