import logo from './logo.svg';
import react, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const apiUrl = 'https://ergast.com/api/f1/'

  const [yearInput, SetYearInput] = useState();

  const apiRequest = async (e, year, round) => {
    console.log(e);
    e.preventDefault();

    //do{
    let request = `${year}/${round}/results.json`
    let loop = true;
    await axios.get(apiUrl + request)
      .then(response => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        if(response.data.MRData.RaceTable.Races.length == 0)
          loop = false;
      })
      .catch(error => {
        loop = false;
      })

    if (!loop)
      return;
    else
      apiRequest(e, year, round + 1);
  }

  return (
    <form onSubmit={(e) => apiRequest(e, yearInput, 0)}>
      <input type="text" onChange={(e) => SetYearInput(e.target.value)} />
    </form>
  );
}

export default App;
