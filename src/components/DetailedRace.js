import {React, useState} from 'react'
import './DetailedRace.css'
import Result from './Result'

function DetailedRace({getCountryCode,raceData})
{

    const [raceResults,SetRaceResults] = useState(raceData.Results.map(result => <Result getCountryCode={getCountryCode} resultData={result}/>));

    return(
        <div className="DetailedRace">
            <h1>{raceData.raceName}</h1>
            <div className="DateName">
                <p>{raceData.date}</p>
                <p>{raceData.Circuit.circuitName}</p>
            </div>
            <div className="Results">
                {raceResults}
            </div>
        </div>
    );
}

export default DetailedRace