import logo from './logo.svg';
import react, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const apiUrl = 'https://ergast.com/api/f1/'
  const [yearInput, SetYearInput] = useState();
  const [raceSeasons, SetRaceSeasons] = useState({});

  const handleGetYear = async (e,year) =>
  {
    e.preventDefault();
    if(!raceSeasons[year]){
      SetRaceSeasons({...raceSeasons, [year]: await getYear(year)});
    }
    console.log(raceSeasons);
  }
  const getYear = async (year) =>
  {
    let request = `${year}/results.json?limit=1000`
    return await makeApiRequest(apiUrl, request) 
  }
  
  const getSpecificRound = async (year, round) =>
  {
    let request = `${year}/${round}/results.json`
    return await makeApiRequest(apiUrl, request)
  }

  const makeApiRequest = async (url, request) => 
  {
    const response = await axios.get(url + request);
    return response.data;
  }

  return (
    <form onSubmit={(e) => handleGetYear(e, yearInput)}>
      <input type="text" onChange={(e) => SetYearInput(e.target.value)} />
    </form>
  );
}

export default App;
