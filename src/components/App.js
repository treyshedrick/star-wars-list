import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Loading from './shared/Loading'
import {fetchStarWarsUsers} from '../services/starWarsApi';
import UsersTable from './shared/UsersTable';
import Search from './shared/Search';

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(null);
  const [searchedUser, setSearchedUser] = useState(null)

  const fetchData = async (pageNumber) => {
    const fetchedUsers = await fetchStarWarsUsers(pageNumber);
    if(users.length){
      setUsers((users) => users.concat(fetchedUsers.results));
    } else {
      setUsers(fetchedUsers.results);
    }
    
    setCount(fetchedUsers.count);
  }

  const onSearch = (searchedUser) => {
    setSearchedUser(users.filter(user => user.name === searchedUser));
  }

  useEffect(() => {
    fetchData(0);
  },[])

  if(users && count){
    return (
      <Box sx={{ margin: '20px' }}>
        <Search users={users.map(user => user.name)} onSearch={onSearch} />
        <UsersTable usersRows={searchedUser?.length ? searchedUser : users} count={count} fetchData={fetchData}/>
      </Box>
    );
    }

  return <Loading />
}

export default App;
