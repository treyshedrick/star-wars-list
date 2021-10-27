import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Loading from './shared/Loading'
import {fetchStarWarsUsers} from '../services/starWarsApi';
import UsersTable from './shared/UsersTable';
import Search from './shared/Search';

function App() {
  const [users, setUsers] = useState(null);
  const [searchedUser, setSearchedUser] = useState(null)

  const fetchData = async () => {
    const results = await fetchStarWarsUsers();
    setUsers(results);
  }

  const onSearch = (searchedUser) => {
    setSearchedUser(users.filter(user => user.name === searchedUser));
  }

  useEffect(() => {
    fetchData();
  },[])

  if(!users) return <Loading />

  return (
    <Box sx={{ margin: '20px' }}>
      <Search users={users.map(user => user.name)} onSearch={onSearch} />
      <UsersTable usersRows={searchedUser?.length ? searchedUser : users} />
    </Box>
  );
}

export default App;
