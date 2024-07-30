import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import DonorList from './components/DonorList';

function App() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    axios.get('/api/donors')
      .then(response => {
        setDonors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donors!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LifesaverLink</h1>
        <DonorList donors={donors} />
      </header>
    </div>
  );
}

export default App;
