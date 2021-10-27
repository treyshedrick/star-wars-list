import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {fetchStarWarsUsers} from './services/starWarsApi';
import UsersTable from './components/shared/UsersTable';

function App() {
  const [users, setUsers] = useState(null);

  const fetchData = async () => {
    const results = await fetchStarWarsUsers();
    setUsers(results);
  }

  useEffect(() => {
    fetchData();
  },[])

  if(!users) return <Box>Loading...</Box>

  return (
    <Box className="App">
      <UsersTable usersRows={users} />
    </Box>
  );
}

export default App;
