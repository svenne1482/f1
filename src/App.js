import logo from './logo.svg';
import react, { useState } from 'react';
import axios from 'axios';
import './App.css';
import RaceSeason from './components/RaceSeason'
import DetailedRace from './components/DetailedRace'

function App() {
  const apiUrl = 'https://ergast.com/api/f1/'
  const [yearInput, SetYearInput] = useState();
  const [raceSeasons, SetRaceSeasons] = useState({});
  const [currentYear, SetCurrentYear] = useState();
  const [displayType, SetDisplayType] = useState("grid");
  const [currentRace, SetCurrentRace] = useState();
  const [countriesData, SetCountriesData] = useState();

  const handleSelectRace = (raceData) => {
    SetDisplayType("race");
    SetCurrentRace(raceData);
  }

  const handleGetYear = async (e, year) => {
    e.preventDefault();
    SetDisplayType("grid");
    if (!raceSeasons[year]) {
      SetRaceSeasons({ ...raceSeasons, [year]: await getYear(year) });
    }
    SetCurrentYear(year);
  }

  const getCountriesData = async () => {
    SetCountriesData(await makeApiRequest("","Countries-List.json"));
  }

  const getYear = async (year) => {
    let request = `${year}/results.json?limit=1000`
    return await makeApiRequest(apiUrl, request)
  }

  const getSpecificRound = async (year, round) => {
    let request = `${year}/${round}/results.json`
    return await makeApiRequest(apiUrl, request)
  }

  const makeApiRequest = async (url, request) => {
    const response = await axios.get(url + request);
    return response.data;
  }

  const getCountryCode = (country) => 
  {
    let countryLine = countriesData.filter(line => (line["Demonym 1"] === country) || (line["Demonym 2"] === country) || (line["Demonym 3"] === country))
    
    return countryLine[0]["ISO 3166 Code"].toLowerCase();
  }
  
  if(countriesData == null)
  {
    getCountriesData();
  }

  return (
    <div className="App">
      <form onSubmit={(e) => handleGetYear(e, yearInput)}>
        <input type="text" onChange={(e) => SetYearInput(e.target.value)} placeholder="test" />
      </form>
      {displayType == "grid" ? <RaceSeason raceArray={raceSeasons[currentYear]} handleSelectRace={handleSelectRace}/> : <DetailedRace getCountryCode={getCountryCode} raceData={currentRace}/>}
    </div>
  );

}

export default App;
