import React, {useEffect, useState} from 'react';
import {fetchStarWarsUsers} from './services/starWarsApi';

function App() {
  const [users, setUsers] = useState(null);

  const fetchData = async () => {
    const results = await fetchStarWarsUsers();
    setUsers(results);
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(users);

  return (
    <div className="App">

    </div>
  );
}

export default App;
